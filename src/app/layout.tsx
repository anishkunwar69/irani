import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Lora,
  Playfair_Display,
  Quicksand,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1B4D2E',
};

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
    date: false,
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
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#1B4D2E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Add structured data for rich results */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Irani Chiya",
              "image": "https://iranichiya.com/logo.png",
              "priceRange": "$$",
              "servesCuisine": "Tea, Snacks",
              "description": "Experience authentic Irani tea traditions with a modern twist in Kathmandu.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tinkune",
                "addressLocality": "Kathmandu",
                "addressRegion": "Bagmati",
                "postalCode": "44600",
                "addressCountry": "NP"
              },
              "telephone": "+977-9763596372",
              "openingHours": "Mo-Su 06:00-21:00"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${quicksand.variable} ${lora.variable} antialiased bg-[#1B4D2E] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
