"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, EyeOff } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { boredSites } from "@/data/sites";
import WebsiteCard from "./WebsiteCard";
import { playHoverSound, playClickSound } from "@/utils/audio";

export default function WebsiteGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Register GSAP plugins
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Simple GSAP entrance fade for the header text when scrolled into view
      gsap.fromTo(
        ".grid-header-fade",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#website-directory",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  // Filtering logic
  const filteredSites = useMemo(() => {
    return boredSites.filter((site) => {
      const matchesSearch =
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.coolFact.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        selectedCategory === "all" || site.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredSites.length / ITEMS_PER_PAGE);

  const paginatedSites = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSites.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredSites, currentPage]);

  const categories = [
    { id: "all", name: "ALL PORTALS" },
    { id: "games", name: "GAMES & PUZZLES" },
    { id: "creative", name: "CREATIVE & ART" },
    { id: "explore", name: "EXPLORATION" },
    { id: "weird", name: "BIZARRE & ODD" },
  ];

  return (
    <section
      id="website-directory"
      ref={sectionRef}
      className="archive-wrapper"
    >
      {/* Header section */}
      <div className="grid-header-fade archive-header">
        <h2 className="archive-title">
          THE BOREDOM ARCHIVE
        </h2>
        <p className="archive-subtitle">
          Search, filter, and discover all curated portals. Each site is checked for pure interactive engagement.
        </p>
      </div>

      {/* Filter and Search Bar Section */}
      <div className="archive-controls-flex">
        {/* Category Tabs */}
        <div className="filter-tags-row">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playClickSound();
                setSelectedCategory(cat.id);
              }}
              onMouseEnter={playHoverSound}
              data-cursor="pointer"
              className={`filter-tag-btn ${
                selectedCategory === cat.id ? "tag-active" : ""
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="search-field-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={playClickSound}
            onMouseEnter={playHoverSound}
            placeholder="Search portal name or keyword..."
            data-cursor="pointer"
            className="search-field-input"
          />
          <Search className="search-input-svg" />
        </div>
      </div>

      {/* Results grid */}
      <motion.div layout className="archive-grid">
        <AnimatePresence mode="popLayout">
          {paginatedSites.map((site) => (
            <motion.div
              key={site.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            >
              <WebsiteCard site={site} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No results state */}
      {filteredSites.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="empty-results-box"
        >
          <div className="empty-results-circle">
            <EyeOff style={{ width: 24, height: 24 }} />
          </div>
          <h3 className="empty-results-heading">
            No Portals Found
          </h3>
          <p className="empty-results-desc">
            We couldn't find anything matching your search term. Try checking another category.
          </p>
        </motion.div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginTop: "48px",
          }}
        >
          <button
            disabled={currentPage === 1}
            onClick={() => {
              playClickSound();
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              document.getElementById("website-directory")?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            className="card-warp-anchor"
            style={{
              padding: "8px 16px",
              opacity: currentPage === 1 ? 0.35 : 1,
              pointerEvents: currentPage === 1 ? "none" : "auto",
            }}
          >
            PREV
          </button>
          
          <div
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "var(--text-secondary)",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "8px 14px",
              borderRadius: "8px",
            }}
          >
            PAGE {currentPage} OF {totalPages}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => {
              playClickSound();
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              document.getElementById("website-directory")?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            className="card-warp-anchor"
            style={{
              padding: "8px 16px",
              opacity: currentPage === totalPages ? 0.35 : 1,
              pointerEvents: currentPage === totalPages ? "none" : "auto",
            }}
          >
            NEXT
          </button>
        </div>
      )}
    </section>
  );
}
