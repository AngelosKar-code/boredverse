import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BoredVerse | Curing Boredom, One Portal at a Time",
  description: "Find the ultimate interactive, fun, and time-wasting websites on the internet. Launch random portals, play built-in sandbox games, and search curated lists of cure-boredom projects.",
  keywords: ["fun websites", "cure boredom", "time waster", "window swap", "internet games", "interactive art", "bored button", "neal.fun", "useless web"],
  authors: [{ name: "BoredVerse Team" }],
};

export const viewport: Viewport = {
  themeColor: "#070714",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
