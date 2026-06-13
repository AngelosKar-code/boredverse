"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VolumeX, PenTool, Send } from "lucide-react";
import { playHoverSound, playClickSound, playScreamSuckSound } from "@/utils/audio";

export default function InteractiveSandbox() {
  const [activeTab, setActiveTab] = useState<"scream" | "paint">("scream");

  // --- VOID SCREAMER STATE ---
  const [thoughtInput, setThoughtInput] = useState("");
  const [screamedThoughts, setScreamedThoughts] = useState<
    { id: string; text: string; x: number; y: number }[]
  >([]);
  const [voidStats, setVoidStats] = useState(0);

  // --- GLOW PAINTER STATE ---
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [paintColor, setPaintColor] = useState("hsl(180, 100%, 50%)"); // default Cyan
  const [isDrawing, setIsDrawing] = useState(false);

  // --- 1. VOID SCREAMER LOGIC ---
  const handleScreamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!thoughtInput.trim()) return;

    const newScream = {
      id: Math.random().toString(),
      text: thoughtInput,
      x: 100 + Math.random() * 200, // random offset
      y: 100 + Math.random() * 100,
    };

    playScreamSuckSound();
    setScreamedThoughts((prev) => [...prev, newScream]);
    setVoidStats((prev) => prev + 1);
    setThoughtInput("");

    // Automatically remove after animation completes (1.5 seconds)
    setTimeout(() => {
      setScreamedThoughts((prev) =>
        prev.filter((t) => t.id !== newScream.id)
      );
    }, 1500);
  };

  // --- 2. GLOW PAINTER LOGIC ---
  useEffect(() => {
    if (activeTab !== "paint") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Black background
      ctx.fillStyle = "#070714";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Fade loop to create glowing trails
    let animationFrameId: number;
    const fade = () => {
      ctx.fillStyle = "rgba(7, 7, 20, 0.08)"; // small alpha creates tail
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      animationFrameId = requestAnimationFrame(fade);
    };
    fade();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTab]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.strokeStyle = paintColor;
    ctx.shadowBlur = 15;
    ctx.shadowColor = paintColor;

    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#070714";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <section className="sandbox-wrapper">
      {/* Title */}
      <div className="sandbox-header-group">
        <h2 className="sandbox-title">IN-PAGE SANDBOX</h2>
        <p className="sandbox-subtitle">
          Don't want to leave BoredVerse yet? Play with our built-in stress busters.
        </p>
      </div>

      {/* Main Glass Panel */}
      <div className="glass-panel sandbox-glass-card">
        {/* Navigation Tabs */}
        <div className="sandbox-tab-bar">
          <button
            onClick={() => {
              playClickSound();
              setActiveTab("scream");
            }}
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            className={`sandbox-tab-button ${
              activeTab === "scream" ? "active-scream" : ""
            }`}
          >
            <VolumeX style={{ width: 16, height: 16 }} />
            THE VOID SCREAMER
          </button>
          <button
            onClick={() => {
              playClickSound();
              setActiveTab("paint");
            }}
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            className={`sandbox-tab-button ${
              activeTab === "paint" ? "active-paint" : ""
            }`}
          >
            <PenTool style={{ width: 16, height: 16 }} />
            GLOW PAINTER
          </button>
        </div>

        {/* Tab 1: Void Screamer */}
        {activeTab === "scream" && (
          <div className="sandbox-inner-split">
            {/* Left: Interactive Scream Box */}
            <div className="sandbox-split-left">
              <div>
                <h3 className="sandbox-heading-style scream-color">
                  Scream Your Worries Away
                </h3>
                <p className="sandbox-info-body">
                  Type your frustrations, boring chores, or annoyances into the box. Hit enter, and watch them get sucked into the black hole and dissolved into cosmic dust forever.
                </p>
              </div>

              <form onSubmit={handleScreamSubmit} className="scream-form-wrapper">
                <input
                  type="text"
                  value={thoughtInput}
                  onChange={(e) => setThoughtInput(e.target.value)}
                  placeholder="Type your boring thought..."
                  maxLength={60}
                  data-cursor="pointer"
                  className="scream-input-field"
                />
                <button
                  type="submit"
                  data-cursor="pointer"
                  className="scream-send-btn"
                >
                  <Send style={{ width: 18, height: 18 }} />
                </button>
              </form>

              <div className="scream-stats-bar">
                <span>CONVERSIONS COMPLETED:</span>
                <span className="stats-magenta-count">
                  {voidStats} THOUGHTS VAPORIZED
                </span>
              </div>
            </div>

            {/* Right: The Visual Void Canvas */}
            <div className="sandbox-split-right">
              {/* Black Hole Core */}
              <div className="vortex-core">
                <div className="vortex-spinning-border" />
              </div>

              {/* Pulsing visual waves */}
              <div className="vortex-ripple-1" />
              <div className="vortex-ripple-2" />

              {/* Animated screamed thoughts */}
              <AnimatePresence>
                {screamedThoughts.map((thought) => (
                  <motion.div
                    key={thought.id}
                    initial={{ scale: 1, opacity: 1, rotate: 0 }}
                    animate={{
                      scale: [1, 0.8, 0.3, 0],
                      opacity: [1, 0.9, 0.5, 0],
                      rotate: [0, 90, 180, 270],
                      x: [thought.x - 150, (thought.x - 150) * 0.4, 0],
                      y: [thought.y - 150, (thought.y - 150) * 0.4, 0],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      color: "hsl(328, 100%, 70%)",
                      whiteSpace: "nowrap",
                      zIndex: 20,
                      pointerEvents: "none",
                      filter: "drop-shadow(0 0 8px rgba(236,72,153,0.5))",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    {thought.text}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Static overlay text */}
              <span className="vortex-label">
                THE GREAT VOID OF CATHARSIS
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Glow Painter */}
        {activeTab === "paint" && (
          <div className="paint-body-container">
            {/* Top Toolbar */}
            <div className="paint-toolbar-header">
              <div className="paint-swatch-group">
                <span className="paint-swatch-label">
                  SELECT GLOW COLOR:
                </span>
                <div className="paint-buttons-row">
                  <button
                    onClick={() => {
                      playClickSound();
                      setPaintColor("hsl(180, 100%, 50%)");
                    }}
                    onMouseEnter={playHoverSound}
                    data-cursor="pointer"
                    style={{
                      backgroundColor: "hsl(180, 100%, 50%)",
                      boxShadow: paintColor === "hsl(180, 100%, 50%)" ? "0 0 10px hsl(180,100%,50%)" : "none",
                    }}
                    className={`paint-color-dot ${
                      paintColor === "hsl(180, 100%, 50%)" ? "active-swatch" : ""
                    }`}
                  />
                  <button
                    onClick={() => {
                      playClickSound();
                      setPaintColor("hsl(328, 100%, 59%)");
                    }}
                    onMouseEnter={playHoverSound}
                    data-cursor="pointer"
                    style={{
                      backgroundColor: "hsl(328, 100%, 59%)",
                      boxShadow: paintColor === "hsl(328, 100%, 59%)" ? "0 0 10px hsl(328,100%,59%)" : "none",
                    }}
                    className={`paint-color-dot ${
                      paintColor === "hsl(328, 100%, 59%)" ? "active-swatch" : ""
                    }`}
                  />
                  <button
                    onClick={() => {
                      playClickSound();
                      setPaintColor("hsl(270, 95%, 65%)");
                    }}
                    onMouseEnter={playHoverSound}
                    data-cursor="pointer"
                    style={{
                      backgroundColor: "hsl(270, 95%, 65%)",
                      boxShadow: paintColor === "hsl(270, 95%, 65%)" ? "0 0 10px hsl(270,95%,65%)" : "none",
                    }}
                    className={`paint-color-dot ${
                      paintColor === "hsl(270, 95%, 65%)" ? "active-swatch" : ""
                    }`}
                  />
                  <button
                    onClick={() => {
                      playClickSound();
                      setPaintColor("hsl(40, 100%, 50%)");
                    }}
                    onMouseEnter={playHoverSound}
                    data-cursor="pointer"
                    style={{
                      backgroundColor: "hsl(40, 100%, 50%)",
                      boxShadow: paintColor === "hsl(40, 100%, 50%)" ? "0 0 10px hsl(40,100%,50%)" : "none",
                    }}
                    className={`paint-color-dot ${
                      paintColor === "hsl(40, 100%, 50%)" ? "active-swatch" : ""
                    }`}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    playClickSound();
                    clearCanvas();
                  }}
                  onMouseEnter={playHoverSound}
                  data-cursor="pointer"
                  className="clear-painter-btn"
                >
                  RESET CANVAS
                </button>
              </div>
            </div>

            {/* Canvas Area */}
            <div className="painter-canvas-wrapper">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                data-cursor="scratch"
                className="painter-canvas"
              />
              <div className="painter-tooltip">
                DRAG MOUSE TO DRAW GLOWING TRAILS
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
