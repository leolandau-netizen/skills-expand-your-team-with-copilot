import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const MainVideo = () => {
  const frame = useCurrentFrame();
  const durationFrames = 30 * 30; // 30 seconds at 30fps

  // Animate the main title
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleScale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Animate the subtitle
  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleY = interpolate(frame, [30, 60], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Animate the tagline
  const taglineOpacity = interpolate(frame, [600, 650], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Animate the CTA button
  const ctaOpacity = interpolate(frame, [700, 750], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaScale = interpolate(frame, [700, 750], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#1a1a1a",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background gradient accent */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255, 140, 0, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "-200px",
          right: "-200px",
          opacity: 0.5,
        }}
      />

      {/* Main Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          marginBottom: "30px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "120px",
            fontWeight: "bold",
            margin: 0,
            color: "#ffffff",
            textShadow: "0 4px 20px rgba(255, 140, 0, 0.5)",
            letterSpacing: "-2px",
          }}
        >
          BREW
        </h1>
        <h2
          style={{
            fontSize: "100px",
            fontWeight: "300",
            margin: "0",
            color: "#ff8c00",
            textShadow: "0 2px 10px rgba(255, 140, 0, 0.6)",
            letterSpacing: "4px",
          }}
        >
          PERFECTION
        </h2>
      </div>

      {/* Subtitle */}
      <div
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          marginBottom: "40px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: "36px",
            color: "#cccccc",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          Handcrafted. Premium. Bold.
        </p>
      </div>

      {/* Tagline */}
      <div
        style={{
          opacity: taglineOpacity,
          position: "absolute",
          bottom: "200px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: "24px",
            color: "#ff8c00",
            margin: 0,
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          ✓ 100% Organic Beans
        </p>
      </div>

      {/* CTA Button */}
      <div
        style={{
          opacity: ctaOpacity,
          transform: `scale(${ctaScale})`,
          position: "absolute",
          bottom: "80px",
          zIndex: 1,
        }}
      >
        <button
          style={{
            padding: "20px 60px",
            fontSize: "24px",
            fontWeight: "bold",
            backgroundColor: "#ff8c00",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 8px 25px rgba(255, 140, 0, 0.4)",
            transition: "all 0.3s ease",
          }}
        >
          Order Now
        </button>
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "8px",
          background: "linear-gradient(90deg, transparent, #ff8c00 50%, transparent)",
        }}
      />
    </div>
  );
};
