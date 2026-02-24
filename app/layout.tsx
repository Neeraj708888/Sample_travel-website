import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxury Event Management Company in India | Weddings, Corporate & Private Events",
  description:
    "Premium event management company specializing in luxury weddings, corporate events, brand launches, and destination celebrations. Bespoke planning, flawless execution, unforgettable experiences.",
  alternates: {
    canonical: "https://yourdomain.com/",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Navbar Added */}
        <Navbar />
        {/* ✅ Padding because navbar is fixed  remove class- className="pt-20"*/}
        <main>
          {children}
        </main>
        {/* Footer Added */}
        <Footer />
      </body>
    </html>
  );
}
