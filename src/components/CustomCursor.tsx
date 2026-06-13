"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<string>("default");
  const [isVisible, setIsVisible] = useState(false);

  // Mouse Coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Springs for Cursor Trail (Outer Ring)
  const springConfig = { stiffness: 250, damping: 28, mass: 0.8 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor if device supports hover (desktop/laptops)
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasHover) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Listen to global mouse events to detect hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const interactiveEl = target.closest("[data-cursor]");
      if (interactiveEl) {
        const type = interactiveEl.getAttribute("data-cursor");
        setCursorType(type || "pointer");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  // Render cursor designs based on current state
  const getCursorStyles = () => {
    switch (cursorType) {
      case "pointer":
        return {
          width: 48,
          height: 48,
          backgroundColor: "hsla(328, 100%, 59%, 0.15)",
          borderColor: "hsl(328, 100%, 59%)",
          borderWidth: "1.5px",
          boxShadow: "0 0 15px hsla(328, 100%, 59%, 0.4)",
        };
      case "portal":
        return {
          width: 90,
          height: 90,
          backgroundColor: "hsla(270, 95%, 65%, 0.2)",
          borderColor: "hsl(270, 95%, 65%)",
          borderWidth: "2px",
          borderStyle: "dashed",
          boxShadow: "0 0 25px hsla(270, 95%, 65%, 0.5)",
        };
      case "view":
        return {
          width: 70,
          height: 70,
          backgroundColor: "hsla(180, 100%, 50%, 0.15)",
          borderColor: "hsl(180, 100%, 50%)",
          borderWidth: "1.5px",
          boxShadow: "0 0 20px hsla(180, 100%, 50%, 0.4)",
        };
      case "scratch":
        return {
          width: 36,
          height: 36,
          backgroundColor: "hsla(40, 100%, 50%, 0.2)",
          borderColor: "hsl(40, 100%, 50%)",
          borderWidth: "2px",
          boxShadow: "0 0 15px hsla(40, 100%, 50%, 0.4)",
        };
      default:
        return {
          width: 22,
          height: 22,
          backgroundColor: "transparent",
          borderColor: "hsla(0, 0%, 100%, 0.6)",
          borderWidth: "1.5px",
          boxShadow: "none",
        };
    }
  };

  const cursorStyles = getCursorStyles();

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9999,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "center center",
          ...cursorStyles,
        }}
        animate={{
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Texts inside custom expanded cursors */}
        {cursorType === "portal" && (
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "1px",
              color: "hsl(270, 95%, 65%)",
              textShadow: "0 0 8px hsla(270, 95%, 65%, 0.5)",
              animation: "spin-reverse 15s linear infinite",
            }}
          >
            WARP
          </span>
        )}
        {cursorType === "view" && (
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              color: "hsl(180, 100%, 50%)",
              textShadow: "0 0 8px hsla(180, 100%, 50%, 0.5)",
            }}
          >
            LAUNCH
          </span>
        )}
      </motion.div>

      {/* Inner Fast Dot */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          backgroundColor:
            cursorType === "portal"
              ? "hsl(270, 95%, 65%)"
              : cursorType === "pointer"
              ? "hsl(328, 100%, 59%)"
              : cursorType === "view"
              ? "hsl(180, 100%, 50%)"
              : "hsl(0, 0%, 100%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
        }}
        animate={{
          scale: cursorType === "default" ? 1 : 0.4,
        }}
      />

      <style jsx global>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </>
  );
}
