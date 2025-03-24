import Link from "next/link";
import { Metadata } from "next";

// Add viewport export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Page Not Found | Irani Chiya",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1B4D2E] px-4 text-center">
      <div className="mx-auto max-w-md space-y-6">
        <h1 className="text-4xl font-bold text-[#C7962D] font-lora">Page Not Found</h1>
        <p className="text-lg text-white/80 font-quicksand">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-[#C7962D] px-6 py-3 text-white transition-all hover:bg-[#C7962D]/80"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 