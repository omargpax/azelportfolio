import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

//components
import Header from "@/components/Header";
import SEO from "@/components/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  manifest: '/manifest.json',
  title: "Developer Portfolio | @omargpax",
  description: "Personal projects, ideas and more about @omargpax as a developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased pt-[80px] md:pt-[120px] xl:pt-[150px]`}
      >
        <SEO />
        <Header/>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
