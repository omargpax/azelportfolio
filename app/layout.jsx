import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import LinesBackground from "@/components/LinesBackground";

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
  metadataBase: new URL('https://omargpax.vercel.app'),
  manifest: '/manifest.json',
  title: " Developer Portfolio | @omargpax",
  description: "I'm passionate about art and music. Oh and I'm also a developer. So, if you want to share something, here I am. God bless you ☕. Personal projects, ideas and more about @omargpax as a developer",
  author: "Omar A. Guerrero",
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Developer Portfolio | @omargpax",
    description: "Peruvian developer specializing in modern web technologies. Check out my projects and let's collaborate!",
    url: "https://omargpax.vercel.app",
    siteName: "Omargpax Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Omargpax Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio | @omargpax",
    description: "Check out my developer portfolio with projects at the intersection of code, art and music",
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
        <LinesBackground />
        <Header/>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
