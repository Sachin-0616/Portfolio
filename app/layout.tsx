import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingDockDemo } from "@/components/floating";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachin — Full Stack Developer",
  description:
    "Full Stack Developer specialized in React 19, Next.js App Router, TypeScript, and high-performance frontend experiences. Building pixel-perfect UIs with Tailwind CSS, Framer Motion, and GSAP.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Frontend Engineer",
    "UI Developer",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
  ],
  authors: [{ name: "Sachin" }],
  openGraph: {
    title: "Sachin — Full Stack Developer",
    description:
      "Building blazing-fast, pixel-perfect digital experiences with React, Next.js, and modern frontend tooling.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin — Full Stack Developer",
    description:
      "Building blazing-fast, pixel-perfect digital experiences with React, Next.js, and modern frontend tooling.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* Page content */}
        <main className="relative z-10">{children}</main>

        {/* Top floating nav */}
        <FloatingDockDemo />
      </body>
    </html>
  );
}
