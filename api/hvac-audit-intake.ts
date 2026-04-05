import type { IncomingMessage, ServerResponse } from "http";
import { submitAuditIntake } from "../src/lib/sanity.client";

// SendGrid configurations
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "hello@builtexpert.com";

// Simple in-memory rate limiting (Note: limited effectiveness in serverless environments)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

// Valid budget ranges from the frontend enum
const VALID_BUDGET_RANGES = [
  "Under $1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Just exploring options",
];

async function sendEmailNotification(data: any) {
  if (!SENDGRID_API_KEY) {
    console.warn("SENDGRID_API_KEY not found. Skipping email notification.");
    return;
  }

  const subject = `New HVAC Audit Intake: ${data.businessName}`;
  const htmlContent = `
    <h2>New Intake Submission</h2>
    <p><strong>Owner:</strong> ${data.ownerName}</p>
    <p><strong>Business:</strong> ${data.businessName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Website:</strong> ${data.websiteUrl || "N/A"}</p>
    <p><strong>Years in Business:</strong> ${data.yearsInBusiness}</p>
    <p><strong>Top Services:</strong> ${Array.isArray(data.topServices) ? data.topServices.join(", ") : data.topServices}</p>
    <p><strong>Service Areas:</strong> ${data.serviceAreas || "N/A"}</p>
    <p><strong>Problem:</strong> ${data.mainProblem || "N/A"}</p>
    <p><strong>Monthly Lead Volume:</strong> ${data.monthlyLeadVolume || "N/A"}</p>
    <p><strong>Budget:</strong> ${data.budgetRange || "N/A"}</p>
    <hr />
    <p><a href="https://z5yntv4o.sanity.studio/desk/auditIntakeSubmission">View in Sanity Studio</a></p>
  `;

  try {
    // Upgraded to SendGrid v3
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: NOTIFICATION_EMAIL }],
          subject: subject,
        }],
        from: { email: "hello@builtexpert.com", name: "BuiltExpert Intake" },
        content: [{
          type: "text/html",
          value: htmlContent,
        }],
      }),
    });

    if (!response.ok) {
      const errorMsg = await response.text();
      throw new Error(`SendGrid v3 API error: ${errorMsg}`);
    }

    console.log("Email notification sent successfully via v3.");
  } catch (error) {
    console.error("Failed to send email notification:", error);
  }
}

export default async function handler(
  request: IncomingMessage & { body?: any },
  response: ServerResponse
) {
  if (request.method !== "POST") {
    response.statusCode = 405;
    return response.end(JSON.stringify({ error: "Method not allowed" }));
  }

  // Basic Rate Limiting check
  const ip = (request.headers["x-forwarded-for"] as string) || "anonymous";
  const now = Date.now();
  const lastRequest = rateLimitMap.get(ip) || 0;
  
  if (now - lastRequest < 2000) { // Simple 2-second cooldown per IP
    response.statusCode = 429;
    return response.end(JSON.stringify({ error: "Too many requests. Please wait a moment." }));
  }
  rateLimitMap.set(ip, now);

  try {
    const data = request.body;

    if (!data || typeof data !== "object") {
      response.statusCode = 400;
      return response.end(JSON.stringify({ error: "Invalid body" }));
    }

    // Basic validation
    if (!data.email || !data.businessName || !data.ownerName) {
      response.statusCode = 400;
      return response.end(JSON.stringify({ error: "Missing required fields" }));
    }

    // Coerce yearsInBusiness to number
    data.yearsInBusiness = Number(data.yearsInBusiness) || 0;

    // Validate budgetRange against enums
    if (data.budgetRange && !VALID_BUDGET_RANGES.includes(data.budgetRange)) {
      response.statusCode = 400;
      return response.end(JSON.stringify({ error: "Invalid budget range value" }));
    }

    // Require https for websiteUrl if present
    if (data.websiteUrl && !data.websiteUrl.startsWith("https://")) {
      response.statusCode = 400;
      return response.end(JSON.stringify({ error: "Website URL must use https://" }));
    }

    // Convert topServices back to array if it is a string
    if (typeof data.topServices === "string") {
      data.topServices = data.topServices
        .split(",")
        .map((s: string) => s.trim())
        .filter(Boolean);
    }

    // Remove client-only helper fields
    delete data._subject;

    // 1. Submit to Sanity
    const result = await submitAuditIntake(data);

    // 2. Notify Eric via SendGrid v3
    await sendEmailNotification(data);

    console.log("Intake submission success:", result._id);

    response.statusCode = 200;
    return response.end(
      JSON.stringify({
        success: true,
        message: "Intake form submitted successfully",
        id: result._id,
      })
    );
  } catch (error: any) {
    console.error("Intake submission error:", error);
    response.statusCode = 500;
    return response.end(
      JSON.stringify({
        error: "Failed to submit intake form",
        details: error.message,
      })
    );
  }
}



