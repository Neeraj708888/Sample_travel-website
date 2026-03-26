import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.anantahospitality.com"),

    title: "24/7 Travel Support Delhi | Ananta Hospitality",

    description:
        "Need help with travel or events? Contact Ananta Hospitality for instant 24/7 support in Delhi.",

    keywords: [
        "travel support Delhi",
        "event support company Delhi",
        "Ananta Hospitality contact",
        "tour booking help India",
        "travel assistance Delhi",
        "24/7 customer support travel",
        "luxury travel support India",
        "event management support Delhi"
    ],

    alternates: {
        canonical: "/support",
    },

    openGraph: {
        title: "24/7 Travel Support Delhi | Ananta Hospitality",
        description:
            "Need help with travel or events? Contact Ananta Hospitality for instant 24/7 support in Delhi.",
        url: "https://www.anantahospitality.com/support",
        siteName: "Ananta Hospitality",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "24/7 Travel Support Delhi | Ananta Hospitality",
        description:
            "Instant help for bookings, cancellations and luxury travel queries. Available 24/7.",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};