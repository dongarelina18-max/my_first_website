import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${profile.name} | Computer Science Student & Front-End Developer`,
  description: profile.summary,
  openGraph: { title: `${profile.name} | Portfolio`, description: profile.summary, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
