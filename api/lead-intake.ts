import { sendDiscordNotification } from "./_utils/discord";

const rateLimitMap = new Map<string, number>();
const COOLDOWN_MS = 2000;

type LeadType = "contact" | "audit";

interface LeadPayload {
  leadType: LeadType;
  name: string;
  email: string;
  website?: string;
  phone?: string;
  company?: string;
  serviceType?: string;
  goals?: string;
  trade?: string;
  leads?: string;
  source?: string;
}

function json(response: ServerResponse, statusCode: number, body: Record<string, unknown>) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
}

function getField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getIpAddress(request: IncomingMessage) {
  const forwarded = request.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }

  return request.socket.remoteAddress || "anonymous";
}

function formatServiceType(serviceType?: string) {
  if (!serviceType) return "Not specified";

  return serviceType
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

async function sendToDiscord(payload: LeadPayload) {
  const fields = [
    { name: "Lead Type", value: payload.leadType === "audit" ? "Lead System Audit" : "Contact Request", inline: true },
    { name: "Name", value: payload.name || "Not provided", inline: true },
    { name: "Email", value: payload.email || "Not provided", inline: true },
    { name: "Website", value: payload.website || "Not provided", inline: false },
  ];

  if (payload.company) fields.push({ name: "Company", value: payload.company, inline: true });
  if (payload.phone) fields.push({ name: "Phone", value: payload.phone, inline: true });
  if (payload.serviceType) fields.push({ name: "Requested Service", value: formatServiceType(payload.serviceType), inline: true });
  if (payload.trade) fields.push({ name: "Trade", value: payload.trade, inline: true });
  if (payload.leads) fields.push({ name: "Current Lead Volume", value: payload.leads, inline: true });
  if (payload.goals) fields.push({ name: "Goals", value: payload.goals, inline: false });
  if (payload.source) fields.push({ name: "Source", value: payload.source, inline: true });

  await sendDiscordNotification({
    title: payload.leadType === "audit" ? "New Audit Request" : "New Contact Lead",
    color: payload.leadType === "audit" ? 0x006565 : 0x1A1A1A,
    fields,
    description: `A new ${payload.leadType} inquiry was received.`,
  });
}

export default async function handler(
  request: IncomingMessage & { body?: unknown },
  response: ServerResponse,
) {
  if (request.method !== "POST") {
    return json(response, 405, { error: "Method not allowed" });
  }

  const ip = getIpAddress(request);
  const now = Date.now();
  const lastRequestAt = rateLimitMap.get(ip) || 0;

  if (now - lastRequestAt < COOLDOWN_MS) {
    return json(response, 429, { error: "Too many requests. Please wait a moment." });
  }

  rateLimitMap.set(ip, now);

  try {
    const body = (request.body || {}) as Record<string, unknown>;
    const leadType = getField(body.leadType) as LeadType;
    const name = getField(body.name);
    const email = getField(body.email);
    const website = getField(body.website);
    const company = getField(body.company);
    const phone = getField(body.phone);
    const serviceType = getField(body.serviceType);
    const goals = getField(body.goals);
    const trade = getField(body.trade);
    const leads = getField(body.leads);
    const source = getField(body.source);
    const honeypot = getField(body._gotcha);

    if (honeypot) {
      return json(response, 200, { success: true });
    }

    if (leadType !== "contact" && leadType !== "audit") {
      return json(response, 400, { error: "Invalid lead type" });
    }

    if (!name || !email) {
      return json(response, 400, { error: "Missing required fields" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json(response, 400, { error: "Invalid email address" });
    }

    if (website) {
      try {
        const normalized = website.includes("://") ? website : `https://${website}`;
        new URL(normalized);
      } catch {
        return json(response, 400, { error: "Invalid website URL" });
      }
    }

    await sendToDiscord({
      leadType,
      name,
      email,
      website,
      company,
      phone,
      serviceType,
      goals,
      trade,
      leads,
      source,
    });

    return json(response, 200, { success: true });
  } catch (error: any) {
    console.error("Lead intake error:", error);
    return json(response, 500, {
      error: "Failed to submit lead",
      details: error?.message || "Unknown error",
    });
  }
}
