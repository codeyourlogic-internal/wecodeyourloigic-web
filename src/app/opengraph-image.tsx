import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "CodeYourLogic — Enterprise Software Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0C0A09 0%, #292524 50%, #1c1917 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "linear-gradient(135deg, #D97706, #EA580C)",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 40, color: "white" }}>{"</>"}</span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          CodeYourLogic
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#FBBF24",
            maxWidth: 800,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Enterprise Software Engineering & Digital Transformation
        </div>
      </div>
    ),
    { ...size }
  );
}
