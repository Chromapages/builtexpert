import type { IncomingMessage, ServerResponse } from "http";
import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;

const AUDIT_AMOUNT = 49700;
const AUDIT_NAME = "Lead System Audit - Manual Strategic Diagnostic";

function json(response: ServerResponse, statusCode: number, body: Record<string, unknown>) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
}

function getField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getBaseUrl(request: IncomingMessage) {
  if (process.env.APP_URL) {
    return process.env.APP_URL.replace(/\/$/, "");
  }

  const host = request.headers.host;
  if (!host) {
    return "http://localhost:4000";
  }

  const forwardedProto = request.headers["x-forwarded-proto"];
  const protocol = typeof forwardedProto === "string" ? forwardedProto : host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

function validateWebsite(website: string) {
  if (!website) return true;

  try {
    const normalized = website.includes("://") ? website : `https://${website}`;
    new URL(normalized);
    return true;
  } catch {
    return false;
  }
}

export default async function handler(
  request: IncomingMessage & { body?: unknown },
  response: ServerResponse,
) {
  if (request.method !== "POST") {
    return json(response, 405, { error: "Method not allowed" });
  }

  if (!stripeKey) {
    console.error("STRIPE_SECRET_KEY is not configured.");
    return json(response, 500, { error: "Stripe is not configured." });
  }

  const stripe = new Stripe(stripeKey, {
    apiVersion: "2023-10-16" as any,
  });

  try {
    const body = (request.body || {}) as Record<string, unknown>;
    const website = getField(body.website);
    const company = getField(body.company);
    const email = getField(body.email);
    const phone = getField(body.phone);
    const name = getField(body.name);
    const trade = getField(body.trade);
    const leads = getField(body.leads);

    if (!website || !company || !email || !phone || !name) {
      return json(response, 400, { error: "Missing required fields" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json(response, 400, { error: "Invalid email address" });
    }

    if (!validateWebsite(website)) {
      return json(response, 400, { error: "Invalid website URL" });
    }

    const baseUrl = getBaseUrl(request);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      billing_address_collection: "auto",
      customer_email: email,
      success_url: `${baseUrl}/audit/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/audit`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: AUDIT_AMOUNT,
            product_data: {
              name: AUDIT_NAME,
              description: "A manual strategic diagnostic of your website, lead flow, and local market position.",
            },
          },
        },
      ],
      metadata: {
        website,
        company,
        email,
        phone,
        name,
        trade,
        leads,
      },
    });

    return json(response, 200, { url: session.url, sessionId: session.id });
  } catch (error: any) {
    console.error("Create audit session error:", error);
    return json(response, 500, {
      error: error?.message || "Failed to create Stripe Checkout session",
    });
  }
}
