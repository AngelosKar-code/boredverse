"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { BoredSite } from "@/data/sites";
import { playHoverSound, playClickSound } from "@/utils/audio";

interface WebsiteCardProps {
  site: BoredSite;
}

export default function WebsiteCard({ site }: WebsiteCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Resolve Lucide icon dynamically from string name
  const IconComponent = (Icons as any)[site.iconName] || Icons.HelpCircle;

  // Star rating rendering helper
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Icons.Star
        key={i}
        style={{ width: 12, height: 12 }}
        className={
          i < rating
            ? "star-active"
            : "star-inactive"
        }
      />
    ));
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
        rotateX: -2,
        rotateY: 2,
        transition: { duration: 0.25 },
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        playHoverSound();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-panel group"
      style={
        {
          height: 300,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          "--border-card-glow": site.accentColor,
        } as React.CSSProperties
      }
    >
      {/* Background Hover glow accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isHovered ? 0.08 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          filter: "blur(24px)",
          background: `radial-gradient(circle at center, ${site.accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* 1. Header with Icon and Category */}
      <div className="card-header">
        {/* Transparent Modern Glowing Icon */}
        <div
          className="card-icon-wrapper"
          style={{
            color: site.accentColor,
            boxShadow: isHovered ? `0 0 10px ${site.accentColor}30` : "none",
          }}
        >
          <IconComponent style={{ width: 22, height: 22 }} />
        </div>

        {/* Category tag */}
        <span
          className="card-category-badge"
          style={{
            borderColor: `${site.accentColor}30`,
            color: site.accentColor,
            backgroundColor: `${site.accentColor}08`,
          }}
        >
          {site.category}
        </span>
      </div>

      {/* 2. Body: Title and Description */}
      <div className="card-details-section">
        <h3 className="card-title-text">
          {site.name}
        </h3>
        <p className="card-body-description">
          {site.description}
        </p>

        {/* Cool Fact or instructions */}
        <p className="card-fact-display">
          {site.coolFact}
        </p>
      </div>

      {/* 3. Footer: Time-Waste Rating & Launch */}
      <div className="card-action-bar">
        <div className="card-waste-labels">
          <span className="card-waste-title">
            TIME WASTED
          </span>
          <div className="card-rating-stars-row">
            {renderStars(site.timeWasteRating)}
          </div>
        </div>

        {/* Launch button */}
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          data-cursor="view"
          className="card-warp-anchor shimmer-btn"
          style={
            {
              "--accent-color": site.accentColor,
            } as React.CSSProperties
          }
        >
          WARP
          <Icons.ExternalLink style={{ width: 14, height: 14 }} />
        </a>
      </div>

      <style jsx>{`
        :global(.star-active) {
          color: hsl(40, 100%, 50%);
          fill: hsl(40, 100%, 50%);
        }
        :global(.star-inactive) {
          color: var(--text-muted);
          fill: transparent;
        }
      `}</style>
    </motion.div>
  );
}
