import type { IncomingMessage, ServerResponse } from "http";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export async function sendDiscordNotification({
  title,
  fields,
  color = 0x006565,
  description,
}: {
  title: string;
  fields: { name: string; value: string; inline?: boolean }[];
  color?: number;
  description?: string;
}) {
  if (!DISCORD_WEBHOOK_URL) {
    console.warn("DISCORD_WEBHOOK_URL not configured. Skipping Discord notification.");
    return;
  }

  const embed = {
    title,
    description,
    color,
    fields,
    timestamp: new Date().toISOString(),
    footer: {
      text: "BuiltExpert Notifications",
    },
  };

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "BuiltExpert Bot",
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Discord webhook failed: ${errorText}`);
    }
  } catch (error) {
    console.error("Failed to send Discord notification:", error);
  }
}
