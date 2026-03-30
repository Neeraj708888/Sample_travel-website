import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import EnquiryPopup from "./components/EnquiryFormPopup";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.anantahospitality.com"
  ),
  title: "Luxury Event Management Delhi | Weddings & Corporate Events",
  description:
    "Top event management company in Delhi since 1991. 1000+ luxury weddings, corporate events & brand launches executed. Get a free consultation today!",
  alternates: {
    canonical: "/",
  },

  verification: {
    google: "tXvNKQDIWxK9iS3JTUNlhZ1KryKDbylqAmXmXkQqZ98",
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
        <meta name="google-site-verification" content="tXvNKQDIWxK9iS3JTUNlhZ1KryKDbylqAmXmXkQqZ98" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Navbar Added */}
        <Navbar />
        {/* ✅ Padding because navbar is fixed  remove class- className="pt-20"*/}
        <main>
          {children}
          <EnquiryPopup />
        </main>
        {/* Footer Added */}
        <Footer />
      </body>
    </html>
  );
}
