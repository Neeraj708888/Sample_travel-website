import Script from "next/script";
import type { Metadata } from "next";
import './globals.css'
import { Geist, Geist_Mono } from "next/font/google";
import AuthkeyWidget from "./components/Common/WhatsappWidget";


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
        {/* ✅ Padding because navbar is fixed  remove class- className="pt-20"*/}
        <main>
          {children}
          {/* <Script
            src="https://console.authkey.io/js/main.js"
            id="authkey-chat-widget"
            strategy="afterInteractive"
            widget-id="552aef89-ff19-4ddb-8209-2ff77a51301c"
          /> */}
          <AuthkeyWidget />
        </main>

      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import './globals.css'
// import { Geist, Geist_Mono } from "next/font/google";
// import LayoutSwitcher from "./components/LayoutSwitcher";
// import EnquiryPopup from "./components/EnquiryFormPopup";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Website",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <LayoutSwitcher>
//           {children}
//         </LayoutSwitcher>

//         <EnquiryPopup />
//       </body>
//     </html>
//   );
// }
