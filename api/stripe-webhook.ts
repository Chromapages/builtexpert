import type { IncomingMessage, ServerResponse } from "http";
import Stripe from "stripe";
import { sendDiscordNotification } from "./_utils/discord";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(
  request: IncomingMessage & { body?: any },
  response: ServerResponse
) {
  if (request.method !== "POST") {
    response.statusCode = 405;
    return response.end(JSON.stringify({ error: "Method not allowed" }));
  }

  const sig = request.headers["stripe-signature"];

  if (!sig || !webhookSecret) {
    console.warn("Stripe Signature or Webhook Secret missing. Skipping verification.");
    // In production, this should return a 400 error.
    if (!sig) {
      response.statusCode = 400;
      return response.end(JSON.stringify({ error: "Missing stripe-signature" }));
    }
  }

  let event: Stripe.Event;

  try {
    // If webhookSecret is available, strictly verify.
    if (webhookSecret && sig) {
      const rawBody = await getRawBody(request);
      event = stripe.webhooks.constructEvent(rawBody, sig as string, webhookSecret);
    } else {
      // For testing without secret - use body as is
      event = request.body;
    }

    console.log("Stripe Event Received:", event.type);

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        await handlePaymentSuccess(session);
        break;
      case "payment_intent.succeeded":
        const intent = event.data.object as Stripe.PaymentIntent;
        console.log("Payment Intent Success:", intent.id);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.statusCode = 200;
    response.end(JSON.stringify({ received: true }));
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    response.statusCode = 400;
    response.end(JSON.stringify({ error: `Webhook Error: ${err.message}` }));
  }
}

async function handlePaymentSuccess(session: Stripe.Checkout.Session) {
  const email = session.customer_details?.email || "No email provided";
  const name = session.customer_details?.name || "Anonymous";
  const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : "0.00";
  const currency = session.currency?.toUpperCase() || "USD";

  console.log(`Payment successful for ${email}: ${amountTotal} ${currency}`);

  // Send Discord Notification
  await sendDiscordNotification({
    title: "💰 New HVAC Audit Sale!",
    color: 0x00FF00, // Green
    fields: [
      { name: "Customer", value: name, inline: true },
      { name: "Email", value: email, inline: true },
      { name: "Amount", value: `${amountTotal} ${currency}`, inline: true },
      { name: "Payment Link", value: session.payment_intent as string || "Check Stripe Dashboard", inline: false },
      { name: "Intake Link", value: `${process.env.APP_URL}/hvac-audit-intake`, inline: false },
    ],
    description: "A customer just purchased the HVAC Lead System Audit. They should be redirected to the intake form now.",
  });
}

/**
 * Helper to get raw body for signature verification
 */
async function getRawBody(request: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      resolve(body);
    });
    request.on("error", (err) => {
      reject(err);
    });
  });
}
