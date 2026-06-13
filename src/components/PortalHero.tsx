"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, Tv, ArrowDown, Volume2, VolumeX } from "lucide-react";
import confetti from "canvas-confetti";
import { boredSites } from "@/data/sites";
import {
  playHoverSound,
  playClickSound,
  playWarpChargeSound,
  playWarpBoomSound,
  getSoundEnabled,
  setSoundEnabled,
} from "@/utils/audio";

export default function PortalHero() {
  const [isWarping, setIsWarping] = useState(false);
  const [warpProgress, setWarpProgress] = useState(0);
  const [warpStatus, setWarpStatus] = useState("");
  const [time, setTime] = useState("");
  const [soundOn, setSoundOn] = useState(true);

  // Sync sound setting on load
  useEffect(() => {
    setSoundOn(getSoundEnabled());
  }, []);

  // Live clock in the navbar
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Warp sequence simulator
  const startTeleportation = () => {
    if (isWarping) return;
    setIsWarping(true);
    setWarpProgress(0);
    setWarpStatus("CALIBRATING GRAVITATIONAL SENSORS...");

    // Start warp synth sound
    playWarpChargeSound(2.5);

    const selectRandomSite = () => {
      const randomIndex = Math.floor(Math.random() * boredSites.length);
      return boredSites[randomIndex];
    };

    // Progression of status logs
    const statusLogs = [
      { progress: 15, text: "ROUTING NEURAL CODES..." },
      { progress: 40, text: "STABILIZING WORMHOLE VECTOR..." },
      { progress: 65, text: "WARPING SPACE-TIME CODES..." },
      { progress: 85, text: "DISPATCHING QUANTUM PARTICLES..." },
      { progress: 100, text: "WARPED!" },
    ];

    let currentLogIndex = 0;
    const intervalTime = 25; // total 2.5 seconds
    const interval = setInterval(() => {
      setWarpProgress((prev) => {
        const nextProgress = prev + 1;
        
        if (
          currentLogIndex < statusLogs.length &&
          nextProgress >= statusLogs[currentLogIndex].progress
        ) {
          setWarpStatus(statusLogs[currentLogIndex].text);
          currentLogIndex++;
        }

        if (nextProgress >= 100) {
          clearInterval(interval);
          
          // Play portal boom sound
          playWarpBoomSound();

          // Fire Confetti explosion!
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.5 },
            colors: ["#ff1f8f", "#00ffff", "#a855f7", "#eab308"],
          });

          // Open random website
          const destSite = selectRandomSite();
          setTimeout(() => {
            window.open(destSite.url, "_blank");
            setIsWarping(false);
          }, 400);

          return 100;
        }
        return nextProgress;
      });
    }, intervalTime);
  };

  const handleScrollToDirectory = () => {
    playClickSound();
    const el = document.getElementById("website-directory");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSound = () => {
    const nextVal = !soundOn;
    setSoundOn(nextVal);
    setSoundEnabled(nextVal);
    if (nextVal) {
      // Small feedback click when turning on
      setTimeout(() => playClickSound(), 50);
    }
  };

  return (
    <div className="page-wrapper">
      {/* 1. Background Visual Grid and Spheres */}
      <div className="grid-bg" />
      <div
        className="bg-glow-sphere"
        style={{
          width: 400,
          height: 400,
          backgroundColor: "hsl(270, 95%, 65%)",
          top: -100,
          left: -100,
        }}
      />
      <div
        className="bg-glow-sphere"
        style={{
          width: 500,
          height: 500,
          backgroundColor: "hsl(328, 100%, 59%)",
          bottom: "10%",
          right: -200,
        }}
      />

      {/* 2. Top Navigation Bar */}
      <header className="app-header">
        <div className="logo-container">
          <Sparkles
            style={{ width: 20, height: 20, color: "var(--accent-magenta)" }}
            className="animate-pulse"
          />
          <span className="logo-text">
            BORED<span className="logo-highlight">VERSE</span>
          </span>
        </div>
        <div className="header-info-wrapper">
          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
              borderRadius: "8px",
              transition: "background-color 0.2s",
              outline: "none",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255, 255, 255, 0.05)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            }}
          >
            {soundOn ? (
              <Volume2 style={{ width: 18, height: 18 }} />
            ) : (
              <VolumeX style={{ width: 18, height: 18, color: "var(--text-muted)" }} />
            )}
          </button>

          <div className="online-counter-badge">
            <span className="pulse-ping-dot" />
            <span>{boredSites.length} PORTALS ONLINE</span>
          </div>
          <div className="clock-display">
            {time || "00:00:00"}
          </div>
        </div>
      </header>

      {/* 3. Hero Center Area */}
      <main className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-main-group"
        >
          {/* Neon Badge */}
          <div className="hero-neon-badge">
            <Compass
              style={{ width: 14, height: 14 }}
              className="animate-spin"
            />
            YOUR SPACE-TIME ESCAPE INTERFACE
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            BORED OUT OF YOUR MIND? <br />
            <span className="title-gradient-span">
              PRESS THE PORTAL
            </span>
          </h1>

          {/* Subheading */}
          <p className="hero-subtitle">
            If you are bored, just press the button below to warp to a random, weirdly satisfying corner of the internet. Or scroll down to explore the archive.
          </p>

          {/* Giant Portal Button Container */}
          <div className="portal-rings-outer">
            {/* Ambient pulsing neon backing */}
            <div className="portal-pulse-glow" />

            {/* Orbiting Rings */}
            <div className="portal-dashed-orbit" />
            <div className="portal-inner-orbit" />
            <div className="portal-cyan-spinner" />

            {/* Actual Giant Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={playHoverSound}
              onClick={() => {
                playClickSound();
                startTeleportation();
              }}
              data-cursor="portal"
              className="portal-clickable-btn"
            >
              {/* Internal Swirling Gradient */}
              <div className="portal-swirl" />

              <Tv className="portal-vector-icon" />
              <span className="portal-label-top">
                LAUNCH
              </span>
              <span className="portal-label-bold">
                PORTAL
              </span>
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* 4. Scroll Indicator Footer */}
      <footer className="hero-footer">
        <button
          onClick={handleScrollToDirectory}
          data-cursor="pointer"
          className="hero-footer-btn"
        >
          <span>EXPLORE ARCHIVE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="down-arrow-svg" />
          </motion.div>
        </button>
      </footer>

      {/* 5. Teleportation / Warp Speed Overlay */}
      <AnimatePresence>
        {isWarping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="warp-overlay-screen"
          >
            {/* Warp Particles Field */}
            <div style={{ position: "absolute", inset: 0 }}>
              {Array.from({ length: 45 }).map((_, index) => {
                const angle = Math.random() * Math.PI * 2;
                const distance = 400 + Math.random() * 800;
                const xEnd = `${Math.cos(angle) * distance}px`;
                const yEnd = `${Math.sin(angle) * distance}px`;
                const size = Math.random() * 2 + 1;
                const speed = 0.8 + Math.random() * 1.2;

                return (
                  <div
                    key={index}
                    className="warp-star"
                    style={
                      {
                        "--x-start": "0px",
                        "--y-start": "0px",
                        "--x-end": xEnd,
                        "--y-end": yEnd,
                        "--warp-speed": `${speed}s`,
                        width: `${size}px`,
                        height: `${size}px`,
                        left: "50%",
                        top: "50%",
                      } as React.CSSProperties
                    }
                  />
                );
              })}
            </div>

            {/* Glowing Warp Center Ring */}
            <div
              style={{
                position: "absolute",
                width: 600,
                height: 600,
                borderRadius: "50%",
                border: "2px solid rgba(168, 85, 247, 0.2)",
                filter: "blur(20px)",
                opacity: 0.45,
              }}
              className="animate-ping"
            />

            {/* Status Texts & Progress Bar */}
            <div className="warp-overlay-content">
              {/* Neon Swirling HUD */}
              <div className="warp-loader-ring">
                <div className="warp-loader-dot" />
              </div>

              <div className="warp-status-header">
                WARPING INSTANCE...
              </div>

              <div className="warp-status-detail">
                {warpStatus}
              </div>

              {/* Progress Container */}
              <div className="warp-progress-track">
                <motion.div
                  style={{ width: `${warpProgress}%` }}
                  className="warp-progress-thumb"
                />
              </div>

              <div className="warp-progress-percent">
                COORDINATES STOCKED: {warpProgress}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
