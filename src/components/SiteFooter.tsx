"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { playHoverSound, playClickSound } from "@/utils/audio";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function SiteFooter() {
  return (
    <footer
      className="glass-panel"
      style={{
        marginTop: "80px",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "none",
        borderRadius: "24px 24px 0 0",
        backgroundColor: "rgba(7, 7, 20, 0.4)",
        padding: "40px 24px 24px 24px",
      }}
    >
      <div className="footer-flex-row">
        {/* Logo and Info */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "4px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/logo.png"
              alt="Angelos Karampalasis logo"
              width={32}
              height={32}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <a
              href="https://portfolio-angelos-kar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              data-cursor="pointer"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "0.15em",
                color: "#ffffff",
                textDecoration: "none",
                display: "block",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "var(--accent-cyan)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              ANGELOS KARAMPALASIS
            </a>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "9px",
                color: "var(--text-muted)",
                marginTop: "2px",
                letterSpacing: "0.05em",
              }}
            >
              CREATOR & DEVELOPER
            </div>
          </div>
        </div>

        {/* Links and email */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {/* Social Icons */}
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="https://www.facebook.com/aggelos.karabalasis"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              data-cursor="pointer"
              className="card-warp-anchor"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                padding: 0,
                color: "#ffffff",
                "--accent-color": "var(--accent-cyan)"
              } as React.CSSProperties}
              aria-label="Facebook"
            >
              <FacebookIcon style={{ width: 18, height: 18 }} />
            </a>
            <a
              href="https://www.instagram.com/agg_kr/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              data-cursor="pointer"
              className="card-warp-anchor"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                padding: 0,
                color: "#ffffff",
                "--accent-color": "var(--accent-magenta)"
              } as React.CSSProperties}
              aria-label="Instagram"
            >
              <InstagramIcon style={{ width: 18, height: 18 }} />
            </a>
          </div>

          <span className="footer-divider" style={{ width: "1px", height: "14px", backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

          {/* Email button */}
          <a
            href="mailto:aggelos3karabalasis@gmail.com"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            data-cursor="pointer"
            className="card-warp-anchor"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              fontSize: "11px",
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              textDecoration: "none",
              color: "#ffffff",
            }}
          >
            <Mail style={{ width: 14, height: 14, color: "var(--accent-cyan)" }} />
            <span>EMAIL ME</span>
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div
        style={{
          textAlign: "center",
          marginTop: "24px",
          fontFamily: "monospace",
          fontSize: "9px",
          color: "var(--text-muted)",
          letterSpacing: "0.08em",
        }}
      >
        © {new Date().getFullYear()} BOREDVERSE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
