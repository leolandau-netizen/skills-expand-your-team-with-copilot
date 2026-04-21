import React from "react";
import { interpolate, useCurrentFrame, Video, Img } from "remotion";

export const MainVideo = () => {
  const frame = useCurrentFrame();

  // Video timeline (30 seconds = 900 frames at 30fps)
  // 0-8s: Waking up (240 frames)
  // 8-16s: Drinking coffee (240 frames)
  // 16-25s: Reading newspaper (270 frames)
  // 25-30s: CTA outro (150 frames)

  const wakingUpEnd = 240;
  const drinkinCoffeeEnd = 480;
  const readingNewspaperEnd = 750;

  // Fade in overlay text at the end
  const ctaOpacity = interpolate(frame, [750, 810], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaScale = interpolate(frame, [750, 810], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Video 1: Waking Up */}
      {frame < wakingUpEnd && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: frame < wakingUpEnd ? 1 : 0,
          }}
        >
          <Video src="videos/waking-up.mp4" style={{ width: "100%", height: "100%" }} />
          {/* Overlay text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: 10,
              opacity: interpolate(frame, [180, 240], [0, 0.9], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                color: "#ff8c00",
                margin: 0,
                fontWeight: "bold",
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              Wake Up to Quality
            </h2>
          </div>
        </div>
      )}

      {/* Video 2: Drinking Coffee */}
      {frame >= wakingUpEnd && frame < drinkinCoffeeEnd && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 1,
          }}
        >
          <Video
            src="videos/drinking-coffee.mp4"
            style={{ width: "100%", height: "100%" }}
            startFrom={frame - wakingUpEnd}
          />
          {/* Overlay text */}
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              zIndex: 10,
              opacity: interpolate(frame, [420, 480], [0, 0.9], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                color: "#ff8c00",
                margin: 0,
                fontWeight: "bold",
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              Taste the Difference
            </h2>
          </div>
        </div>
      )}

      {/* Video 3: Reading Newspaper */}
      {frame >= drinkinCoffeeEnd && frame < readingNewspaperEnd && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 1,
          }}
        >
          <Video
            src="videos/reading-newspaper.mp4"
            style={{ width: "100%", height: "100%" }}
            startFrom={frame - drinkinCoffeeEnd}
          />
          {/* Overlay text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: 10,
              opacity: interpolate(frame, [660, 750], [0, 0.9], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                color: "#ff8c00",
                margin: 0,
                fontWeight: "bold",
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              Your Daily Essential
            </h2>
          </div>
        </div>
      )}

      {/* CTA Outro */}
      {frame >= readingNewspaperEnd && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#1a1a1a",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: 1,
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

          {/* CTA Content */}
          <div style={{ opacity: ctaOpacity, transform: `scale(${ctaScale})`, zIndex: 10 }}>
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                margin: 0,
                color: "#ffffff",
                textShadow: "0 4px 20px rgba(255, 140, 0, 0.5)",
                letterSpacing: "-2px",
                marginBottom: "20px",
              }}
            >
              BREW
            </h1>
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "300",
                margin: 0,
                color: "#ff8c00",
                textShadow: "0 2px 10px rgba(255, 140, 0, 0.6)",
                letterSpacing: "4px",
                marginBottom: "40px",
              }}
            >
              PERFECTION
            </h2>
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
      )}
    </div>
  );
};
