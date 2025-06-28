import { useState, useEffect } from "react";
import "./DoodleOverlay.css";

const doodles = [
  // Abstract flowing lines
  {
    paths: [
      "M100,200 Q300,50 500,200 T900,200",
      "M150,300 Q400,150 650,300 T950,300",
      "M200,400 C300,250 600,550 800,400",
    ],
    color: "#FF6B6B",
  },
  // Geometric spiral
  {
    paths: [
      "M400,300 Q450,250 500,300 Q550,350 500,400 Q450,450 400,400 Q350,350 400,300",
      "M400,300 Q480,220 560,300 Q640,380 560,460 Q480,540 400,460 Q320,380 400,300",
      "M500,200 L600,300 L500,400 L400,300 Z",
    ],
    color: "#4ECDC4",
  },
  // Organic blob shapes
  {
    paths: [
      "M300,200 Q400,100 500,200 Q600,300 500,400 Q400,500 300,400 Q200,300 300,200",
      "M600,250 Q700,150 800,250 Q900,350 800,450 Q700,550 600,450 Q500,350 600,250",
      "M450,350 Q500,300 550,350 Q600,400 550,450 Q500,500 450,450 Q400,400 450,350",
    ],
    color: "#45B7D1",
  },
  // Scribbled portrait-like
  {
    paths: [
      "M400,150 Q450,100 500,150 Q550,200 500,250 Q450,300 400,250 Q350,200 400,150",
      "M380,180 Q390,170 400,180",
      "M480,180 Q490,170 500,180",
      "M440,220 Q450,230 460,220",
      "M350,300 Q400,280 450,300 Q500,320 550,300",
    ],
    color: "#96CEB4",
  },
  // Abstract mountain landscape
  {
    paths: [
      "M0,400 L200,200 L400,300 L600,150 L800,250 L1000,200 L1200,400",
      "M100,450 Q300,350 500,450 Q700,350 900,450",
      "M200,500 C400,400 600,600 800,500",
    ],
    color: "#FFEAA7",
  },
];

export function DoodleOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDoodle, setCurrentDoodle] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const scheduleNextDoodle = () => {
      // Random interval between 30 seconds to 2 minutes
      const randomDelay = Math.random() * (120000 - 30000) + 30000;

      setTimeout(() => {
        // Pick random doodle
        setCurrentDoodle(Math.floor(Math.random() * doodles.length));
        setIsVisible(true);
        setIsDrawing(true);

        // Hide after 10 seconds
        setTimeout(() => {
          setIsVisible(false);
          setIsDrawing(false);
          // Schedule next doodle
          scheduleNextDoodle();
        }, 10000);
      }, randomDelay);
    };

    // Initial delay before first doodle (10-30 seconds)
    const initialDelay = Math.random() * 20000 + 10000;
    setTimeout(() => {
      scheduleNextDoodle();
    }, initialDelay);
  }, []);

  if (!isVisible) return null;

  const doodle = doodles[currentDoodle];

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 1200 800"
        className="absolute inset-0"
        style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))" }}
      >
        {doodle.paths.map((path, index) => (
          <path
            key={index}
            d={path}
            fill="none"
            stroke={doodle.color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isDrawing ? "animate-draw" : ""}
            style={{
              strokeDasharray: "1000",
              strokeDashoffset: isDrawing ? "0" : "1000",
              animation: isDrawing
                ? `drawPath 5s ease-in-out ${index * 0.5}s forwards`
                : "none",
            }}
          />
        ))}

        {/* Add some decorative dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1200}
            cy={Math.random() * 800}
            r="4"
            fill={doodle.color}
            className={isDrawing ? "animate-pulse" : ""}
            style={{
              opacity: 0,
              animation: isDrawing
                ? `fadeInDot 0.5s ease-in-out ${2 + i * 0.2}s forwards`
                : "none",
            }}
          />
        ))}
      </svg>

      {/* Subtle signature */}
      <div className="absolute bottom-8 right-8 text-xs text-gray-400 font-mono opacity-50">
        ~ digital doodle ~
      </div>
    </div>
  );
}
