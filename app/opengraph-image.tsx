import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bayview Home Watch Services — South Florida Home Watch";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1B2B50",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          padding: "60px",
        }}
      >
        {/* Teal decorative top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: "#00ADAC" }} />

        {/* Icon placeholder (simplified house SVG inline) */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
          <div style={{ width: 72, height: 72, background: "#00ADAC", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M22 6L38 18V38H28V27H16V38H6V18L22 6Z" fill="white" />
              <ellipse cx="22" cy="24" rx="5" ry="3" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="22" cy="24" r="1.5" fill="white" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: "28px", fontWeight: "900", letterSpacing: "-0.02em", lineHeight: 1 }}>BAYVIEW</span>
            <span style={{ color: "#00ADAC", fontSize: "11px", letterSpacing: "0.22em", marginTop: "4px" }}>HOME WATCH SERVICES</span>
          </div>
        </div>

        <h1 style={{ color: "white", fontSize: "52px", fontWeight: "900", textAlign: "center", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 20px", maxWidth: "900px" }}>
          Your South Florida Home,<br />
          <span style={{ color: "#00ADAC" }}>Always in Good Hands.</span>
        </h1>

        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "22px", textAlign: "center", margin: "0 0 36px", maxWidth: "700px", lineHeight: 1.5 }}>
          Professional home watch services for Broward County homeowners.
        </p>

        <div style={{ display: "flex", gap: "32px", color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>
          <span>✓ Licensed & Insured</span>
          <span>✓ Woman-Owned</span>
          <span>✓ Broward County Local</span>
        </div>

        {/* Bottom bar */}
        <div style={{ position: "absolute", bottom: "28px", color: "rgba(255,255,255,0.4)", fontSize: "14px", letterSpacing: "0.1em" }}>
          bayviewhomewatchservices.com
        </div>
      </div>
    ),
    { ...size }
  );
}
