import type { Metadata } from "next";
import { Lora, Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${quicksand.variable} ${lora.variable} antialiased bg-[#1B4D2E] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
