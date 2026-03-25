import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ATAVO — Elevate Your Business Online",
  description:
    "Modern websites, SEO, apps & automation for UK businesses. Built by an entrepreneur like you. 7-day delivery from £499.",
  openGraph: {
    title: "ATAVO — Elevate Your Business Online",
    description: "Modern websites, SEO, apps & automation for UK businesses.",
    url: "https://atavo.co.uk",
    siteName: "ATAVO",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-white">
        {children}
      </body>
    </html>
  );
}
