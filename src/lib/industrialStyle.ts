import type { CSSProperties } from "react";

/** Shared with Pricing + Home — industrial / “Capital” editorial look */
export const INDUSTRIAL = {
  charcoal: "#1a1a1a",
  muted: "#6b7280",
  outline: "#e5e7eb",
} as const;

export const industrialMeshStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage: `radial-gradient(${INDUSTRIAL.outline} 0.5px, transparent 0.5px)`,
  backgroundSize: "24px 24px",
};

export const industrialTextGradientStyle: CSSProperties = {
  background: "linear-gradient(135deg, #121212 0%, #4b5563 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
};
