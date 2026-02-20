import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Exclusive Travel Offers & Deals | Ananta Group",
    description:
        "Grab premium travel deals on Maldives, Dubai, Bali & more. Limited time luxury travel offers with best price guarantee.",
    keywords: [
        "travel offers India",
        "holiday deals",
        "Maldives package offer",
        "Dubai travel deal",
        "cheap luxury vacations",
    ],
    openGraph: {
        title: "Premium Travel Offers & Holiday Deals",
        description:
            "Explore exclusive luxury travel packages at unbeatable prices.",
        url: "https://www.anantagroup.co.in/offers",
        siteName: "Ananta Group",
        type: "website",
    },
};

const offers = [
    {
        name: "Maldives Luxury Escape",
        price: "79999",
        currency: "INR",
        slug: "maldives-luxury-escape",
    },
    {
        name: "Dubai Desert Experience",
        price: "45999",
        currency: "INR",
        slug: "dubai-desert-experience",
    },
];

export default function OffersPage() {
    return (
        <>
            {/* JSON-LD Schema */}
            <Script
                id="offers-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        itemListElement: offers.map((offer, index) => ({
                            "@type": "Offer",
                            position: index + 1,
                            name: offer.name,
                            price: offer.price,
                            priceCurrency: offer.currency,
                            availability: "https://schema.org/InStock",
                            url: `https://www.anantagroup.co.in/offers/${offer.slug}`,
                        })),
                    }),
                }}
            />

            <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">
                        Exclusive Travel Offers & Deals
                    </h1>
                    <p className="text-gray-400 mb-16 text-lg">
                        Discover premium holiday packages at unbeatable prices.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        {offers.map((offer) => (
                            <div
                                key={offer.slug}
                                className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-500 shadow-xl"
                            >
                                <h2 className="text-2xl font-semibold mb-4">
                                    {offer.name}
                                </h2>
                                <p className="text-3xl font-bold text-yellow-400 mb-6">
                                    ₹{offer.price}
                                </p>
                                <a
                                    href={`/offers/${offer.slug}`}
                                    className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
                                >
                                    View Deal
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
