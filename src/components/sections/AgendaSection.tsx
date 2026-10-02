import React, { useState } from "react";
import { motion } from "framer-motion";

interface AgendaItem {
  id: string;
  time: string;
  timeBadgeBg: string;
  stageTag: string;
  introduction: string;
  description: string;
  image: string;
  badgeTextColor?: string;
}

const EXPO_SCHEDULE: AgendaItem[] = [
  {
    id: "01",
    time: "09:00 - 10:30",
    timeBadgeBg: "var(--color-primary)",
    badgeTextColor: "#ffffff",
    stageTag: "MAIN AUDITORIUM // OPENING",
    introduction: "Opening Keynote & EventSphere Platform Unveiling",
    description: "Welcome address on modernizing multi-industry trade shows through unified registration and real-time floor plans.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "02",
    time: "11:00 - 13:00",
    timeBadgeBg: "var(--color-purple-mimosa)",
    badgeTextColor: "#ffffff",
    stageTag: "EXHIBIT HALL // BOOTH DEMOS",
    introduction: "Exhibitor Product Showcases & Interactive Floor Walk",
    description: "Commercial exhibitors demonstrate products across reserved booth zones with instant digital lead retrieval.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "03",
    time: "14:30 - 16:30",
    timeBadgeBg: "var(--color-cerulean)",
    badgeTextColor: "#ffffff",
    stageTag: "CONFERENCE ROOM B // WORKSHOP",
    introduction: "Panel: Scalable Architecture for Global Expos",
    description: "Industry veterans and organizers analyze concurrent user throughput, automated reporting, and role-based permissions.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "04",
    time: "18:00 - 21:00",
    timeBadgeBg: "var(--color-kiwi)",
    badgeTextColor: "var(--color-dark)",
    stageTag: "EXECUTIVE LOUNGE // NETWORKING",
    introduction: "B2B Matchmaking Gala & Exhibitor Awards",
    description: "Direct collaboration between registered attendees, exhibitors, and venue organizers over cocktails.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
  },
];

export const AgendaSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="agenda"
      style={{
        backgroundColor: "transparent",
        padding: "100px clamp(20px, 5vw, 64px) 140px clamp(20px, 5vw, 64px)",
        position: "relative",
        zIndex: 2,
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <h2
            className="style-display"
            style={{
              fontSize: "clamp(52px, 7.5vw, 104px)",
              color: "var(--color-dark)",
              lineHeight: 0.92,
              margin: 0,
              letterSpacing: 1.5,
            }}
          >
            EXPO &#123; SCHEDULE &#125; 2025
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", borderTop: "2.5px solid var(--color-dark)" }}>
          {EXPO_SCHEDULE.map((slot) => {
            const isHovered = hoveredId === slot.id;

            return (
              <motion.div
                key={slot.id}
                onMouseEnter={() => setHoveredId(slot.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setHoveredId(isHovered ? null : slot.id)}
                animate={{
                  backgroundColor: isHovered ? "rgba(255, 255, 255, 0.45)" : "transparent",
                  boxShadow: isHovered ? "4px 4px 0px var(--color-dark)" : "0px 0px 0px transparent",
                  y: isHovered ? -4 : 0,
                }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
                style={{
                  padding: "28px clamp(12px, 2.5vw, 24px)",
                  borderBottom: "2.5px solid var(--color-dark)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 24,
                  flexWrap: "wrap",
                  position: "relative",
                  borderRadius: 4,
                  transition: "background-color 0.2s ease",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: "0 0 200px" }}>
                  <motion.div
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: slot.timeBadgeBg,
                      color: slot.badgeTextColor || "#fff",
                      border: "2px solid var(--color-dark)",
                      boxShadow: "2px 2px 0px var(--color-dark)",
                      padding: "4px 12px",
                      borderRadius: 4,
                      width: "fit-content",
                    }}
                  >
                    <span className="style-display" style={{ fontSize: 24, letterSpacing: 0.5 }}>
                      {slot.time}
                    </span>
                  </motion.div>

                  <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 11, fontWeight: 800, color: "var(--color-dark)", opacity: 0.75 }}>
                    {slot.stageTag}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    width: isHovered ? 230 : 0,
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    rotate: isHovered ? -2.5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  style={{
                    height: 140,
                    overflow: "hidden",
                    position: "relative",
                    flexShrink: 0,
                    border: isHovered ? "2.5px solid var(--color-dark)" : "none",
                    boxShadow: isHovered ? "4px 4px 0px var(--color-dark)" : "none",
                    backgroundColor: "var(--color-dark)",
                  }}
                  className="agenda-hover-image"
                >
                  <div style={{ position: "absolute", top: 6, left: 6, width: 8, height: 8, borderTop: "2px solid #fff", borderLeft: "2px solid #fff", zIndex: 10 }} />
                  <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderTop: "2px solid #fff", borderRight: "2px solid #fff", zIndex: 10 }} />
                  <div style={{ position: "absolute", bottom: 6, left: 6, width: 8, height: 8, borderBottom: "2px solid #fff", borderLeft: "2px solid #fff", zIndex: 10 }} />
                  <div style={{ position: "absolute", bottom: 6, right: 6, width: 8, height: 8, borderBottom: "2px solid #fff", borderRight: "2px solid #fff", zIndex: 10 }} />

                  <img
                    src={slot.image}
                    alt={slot.introduction}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{ x: isHovered ? 8 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: 6 }}
                >
                  <h3
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "clamp(20px, 2.2vw, 28px)",
                      fontWeight: 700,
                      color: "var(--color-dark)",
                      lineHeight: 1.25,
                      margin: 0,
                    }}
                  >
                    {slot.introduction}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "var(--color-dark)",
                      opacity: 0.85,
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {slot.description}
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: isHovered ? -45 : 0,
                    backgroundColor: isHovered ? "var(--color-dark)" : "transparent",
                    color: isHovered ? "#ffffff" : "var(--color-dark)",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid var(--color-dark)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
