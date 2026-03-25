import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATAVO — Elevate Your Business Online",
  description:
    "Modern websites, SEO, Apps & Automation for UK businesses. Build a strong online presence with ATAVO.",
  keywords: "web design UK, SEO, apps, automation, online presence, ATAVO",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
