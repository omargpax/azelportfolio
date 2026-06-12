import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import SeasonalBackground from "@/components/SeasonalBackground";

//components
import Header from "@/components/Header";

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
  metadataBase: new URL('https://omargpax.dev'),
  manifest: '/manifest.json',
  title: "Omar Guerrero | Backend Developer & Data Engineer",
  description:
    "Backend Developer specializing in Java, Spring Boot, and data systems. " +
    "Building REST APIs and data pipelines that drive real decisions. " +
    "Based in Trujillo, Peru. Available for remote roles.",
  author: "Omar A. Guerrero",
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
   openGraph: {
    title: "Omar Guerrero | Backend Developer & Data Engineer",
    description:
      "Java · Spring Boot · Python · SQL. " +
      "Building systems that process data into decisions.",
    url: "https://omargpax.dev",
    images: [{ url: "/preview.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Guerrero | Backend Developer & Data Engineer",
    description:
      "Java · Spring Boot · Python · SQL. " +
      "Building systems that process data into decisions.",
    creator: "@omargpax",
    images: ["/preview.png"],
  },
  keywords: [
    "omargpax",
    "omar guerrero",
    "Full Stack Developer",
    "Java Developer",
    "Peruvian developer",
    "Developer Portfolio",
    "Web Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    ".Net Developer",
    "Creative Coder",
  ].join(', '),
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased pt-[80px] md:pt-[120px] xl:pt-[150px]`}
      >
        <SeasonalBackground />
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
