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
            {/* ✅ Enhanced SEO Schema */}
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

            <section className="relative bg-black text-white py-24 px-6 overflow-hidden">

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-black to-yellow-900/10 pointer-events-none" />

                <div className="relative max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-20 gap-6">

                        <div>
                            <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
                                Exclusive Luxury Offers
                            </h2>

                            <p className="text-gray-400 mt-4 max-w-xl text-lg">
                                Limited-time curated travel experiences designed for elite travelers.
                            </p>
                        </div>

                        <Link
                            href="/offers"
                            className="hidden md:inline-block px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
                        >
                            View All Offers →
                        </Link>

                    </div>

                    {/* Offers Grid */}
                    <div className="grid md:grid-cols-2 gap-12">

                        {offers.map((offer) => (
                            <div
                                key={offer.slug}
                                className="group relative p-[1px] rounded-3xl bg-gradient-to-r from-yellow-500/50 via-amber-400/30 to-yellow-500/50 hover:from-yellow-400 hover:to-yellow-600 transition duration-500"
                            >
                                <div className="bg-zinc-900 rounded-3xl p-12 backdrop-blur-xl border border-white/10 group-hover:border-yellow-500 transition duration-500 relative overflow-hidden">

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-white/30 to-transparent transition duration-700" />

                                    <h3 className="text-3xl font-bold mb-6 group-hover:text-yellow-400 transition">
                                        {offer.name}
                                    </h3>

                                    <p className="text-4xl font-extrabold text-yellow-400 mb-8 tracking-wide">
                                        ₹{offer.price}
                                    </p>

                                    <Link
                                        href={`/offers/${offer.slug}`}
                                        className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold rounded-full hover:scale-105 transition duration-300 shadow-xl"
                                    >
                                        Explore Offer
                                    </Link>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Mobile View All */}
                    <div className="mt-16 text-center md:hidden">
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
