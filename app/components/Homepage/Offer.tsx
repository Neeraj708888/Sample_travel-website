"use client";

import Link from "next/link";
import Script from "next/script";

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

export default function Offers() {
    return (
        <>
            {/* ✅ Homepage Featured Offers Schema */}
            <Script
                id="homepage-featured-offers"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        itemListElement: offers.map((offer, index) => ({
                            "@type": "Product",
                            position: index + 1,
                            name: offer.name,
                            offers: {
                                "@type": "Offer",
                                price: offer.price,
                                priceCurrency: offer.currency,
                                availability: "https://schema.org/InStock",
                                url: `https://www.anantagroup.co.in/offers/${offer.slug}`,
                            },
                        })),
                    }),
                }}
            />

            <section className="bg-gradient-to-b from-gray-950 to-black text-white py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="flex justify-between items-center mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                🔥 Exclusive Travel Offers
                            </h2>
                            <p className="text-gray-400 mt-3">
                                Limited-time luxury deals crafted for premium travelers.
                            </p>
                        </div>

                        <Link
                            href="/offers"
                            className="hidden md:inline-block text-yellow-400 hover:underline font-medium"
                        >
                            View All →
                        </Link>
                    </div>

                    {/* Offers Grid */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {offers.map((offer) => (
                            <div
                                key={offer.slug}
                                className="group relative bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 hover:border-yellow-500 transition-all duration-500 shadow-lg hover:shadow-yellow-500/20"
                            >
                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-yellow-400 transition">
                                    {offer.name}
                                </h3>

                                <p className="text-3xl font-bold text-yellow-400 mb-6">
                                    ₹{offer.price}
                                </p>

                                <Link
                                    href={`/offers/${offer.slug}`}
                                    className="inline-block px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
                                >
                                    View Deal
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View All */}
                    <div className="mt-12 text-center md:hidden">
                        <Link
                            href="/offers"
                            className="text-yellow-400 hover:underline"
                        >
                            View All Offers →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
