import React, { useRef, useState } from "react";

export const VideoIntermissionSection: React.FC = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section style={{
      width: "100%",
      height: "70vh",
      minHeight: 460,
      position: "relative",
      backgroundColor: "#000",
      borderTop: "3px solid var(--color-dark)",
      borderBottom: "3px solid var(--color-dark)",
      overflow: "hidden",
    }}>
      {/* Video Loop from Framer asset specification */}
      <video
        ref={videoRef}
        src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "contrast(1.1) brightness(0.9)",
        }}
      />

      {/* CRT Scanline Overlay */}
      <div className="scanlines" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Overlay Badge & Sound Controller */}
      <div style={{
        position: "absolute",
        bottom: 32,
        left: 32,
        right: 32,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 5
      }}>
        <div style={{
          backgroundColor: "rgba(35, 30, 37, 0.85)",
          color: "var(--color-light)",
          border: "2px solid var(--color-light)",
          padding: "8px 16px",
          borderRadius: 8,
          boxShadow: "3px 3px 0px var(--color-primary)"
        }}>
          <span className="style-p6" style={{ color: "var(--color-kiwi)" }}>● LIVE STAGE BROADCAST</span>
          <p className="style-p4" style={{ color: "#fff", margin: 0 }}>4K Immersive Visual Stream</p>
        </div>

        <button
          onClick={toggleSound}
          style={{
            backgroundColor: muted ? "var(--color-light)" : "var(--color-primary)",
            color: muted ? "var(--color-dark)" : "var(--color-light)",
            border: "2px solid var(--color-dark)",
            boxShadow: "3px 3px 0px var(--color-dark)",
            borderRadius: 30,
            padding: "10px 20px",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {muted ? "🔇 UNMUTE AUDIO" : "🔊 SOUND ON"}
        </button>
      </div>
    </section>
  );
};