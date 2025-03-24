import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Lora,
  Playfair_Display,
  Quicksand,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iranichiya.com"),
  title: {
    default: "Irani Chiya | Premium Tea Experience in Nepal",
    template: "%s | Irani Chiya",
  },
  description:
    "Experience authentic Irani tea traditions with a modern twist. Premium tea blends, cozy ambiance, and a unique culinary journey in the heart of Kathmandu.",
  keywords: [
    "Irani Chiya",
    "premium tea",
    "tea house",
    "Kathmandu",
    "Nepal",
    "authentic tea",
    "Badda's Chiya",
    "tea culture",
  ],
  authors: [{ name: "Irani Chiya" }],
  creator: "Irani Chiya",
  publisher: "Irani Chiya",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iranichiya.com",
    title: "Irani Chiya | Premium Tea Experience in Nepal",
    description:
      "Experience authentic Irani tea traditions with a modern twist. Premium tea blends, cozy ambiance, and a unique culinary journey in the heart of Kathmandu.",
    siteName: "Irani Chiya",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Irani Chiya - Premium Tea Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Irani Chiya | Premium Tea Experience in Nepal",
    description:
      "Experience authentic Irani tea traditions with a modern twist in the heart of Kathmandu.",
    images: ["/twitter-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${quicksand.variable} ${lora.variable} antialiased bg-[#1B4D2E] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
