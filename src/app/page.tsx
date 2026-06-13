import CustomCursor from "@/components/CustomCursor";
import PortalHero from "@/components/PortalHero";
import WebsiteGrid from "@/components/WebsiteGrid";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-dark)] overflow-hidden">
      {/* 1. Global Custom Mouse Cursor Trailer */}
      <CustomCursor />

      {/* 2. Hero Section & Space Portal Launcher */}
      <PortalHero />

      {/* 3. Curated Portal Directory Grid */}
      <WebsiteGrid />

      {/* 4. Creator Credits Footer */}
      <SiteFooter />
    </main>
  );
}
