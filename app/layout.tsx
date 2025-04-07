import type { Metadata } from "next";
import "./globals.css";

import { Libre_Caslon_Text, Roboto, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const libreCaslonText = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-caslon-text",
});

const homeUrl =
  "https://lhebnpqypzctccgh.public.blob.vercel-storage.com/bg-hero-verdun";

export const metadata: Metadata = {
  title: "Verdun Business Advisory (Pty) Ltd",
  description:
    "We provide tailored strategies and actionable insights to helpyour business grow, optimize operations, and stay competitive in today’s market.",
  openGraph: {
    title: "Verdun Business Advisory (Pty) Ltd",
    description:
      "We provide tailored strategies and actionable insights to helpyour business grow, optimize operations, and stay competitive in today’s market.",
    url: `https://verdun.co.za`,
    type: "article",
    siteName: "Verdun Business Advisory",
    images: [
      {
        url: homeUrl,
        width: 1200,
        height: 630,
        alt: "home",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${roboto.variable} ${libreCaslonText.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
