import type { CSSProperties } from "react";

/** Shared with Pricing + Home — industrial / “Capital” editorial look */
export const INDUSTRIAL = {
  charcoal: "#1a1a1a",
  muted: "#6b7280",
  outline: "#e5e7eb",
  primary: "#006A6A",
  secondary: "#4a6363",
} as const;

export const industrialMeshStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage: `radial-gradient(${INDUSTRIAL.outline} 0.5px, transparent 0.5px)`,
  backgroundSize: "24px 24px",
};

export const industrialTextGradientStyle: CSSProperties = {
  background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const industrialDarkMeshStyle: CSSProperties = {
  backgroundColor: "#1a1a1a",
  backgroundImage: `radial-gradient(rgba(255,255,255,0.05) 0.5px, transparent 0.5px)`,
  backgroundSize: "24px 24px",
};
