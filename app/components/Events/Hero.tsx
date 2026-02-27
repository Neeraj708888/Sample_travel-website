"use client";

import Script from "next/script";
import Breadcrumb from "../Common/Breadcum";
import GlobalServiceSearch from "../GlobalServiceSearch";
import Link from "next/link";
import Event3DSlider from "./Event3DSlider";

export default function EventSearch() {
    return (
        <>
            {/* ✅ Structured Data for SEO */}
            <Script
                id="event-structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EventPlanner",
                        name: "Premium Event Management Company in Delhi",
                        description:
                            "Luxury wedding planning, corporate events, and private celebrations in Delhi and across India.",
                        areaServed: {
                            "@type": "Place",
                            name: "Delhi, India",
                        },
                        serviceType: [
                            "Wedding Planning",
                            "Corporate Events",
                            "Private Celebrations",
                        ],
                    }),
                }}
            />

            <section className="relative py-16 text-white overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 opacity-95"></div>

                <div className="relative max-w-6xl mx-auto text-center px-6">

                    {/* Breadcrumb */}
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Events", href: "/events" },
                        ]}
                    />

                    {/* H1 - SEO Optimized */}
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                        Premium Event Management Company in Delhi
                    </h1>

                    {/* H2 */}
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6">
                        Luxury Wedding Planning, Corporate Events & Exclusive Celebrations
                    </h2>

                    {/* SEO Paragraph */}
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
                        We specialize in luxury wedding planning, corporate event
                        management, destination celebrations, and private premium
                        experiences across India. Our expert planners create unforgettable
                        events tailored perfectly to your vision and brand.
                    </p>

                    {/* Global Search (High Intent Users) */}
                    <div className="mb-16">
                        <GlobalServiceSearch />
                    </div>

                    {/* 3D Card Slide */}
                    <Event3DSlider />

                    {/* High Conversion CTA */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition transform hover:scale-105 shadow-xl shadow-yellow-500/20"
                        >
                            Get Free Event Consultation
                        </Link>

                        <Link
                            href="/portfolio"
                            className="px-10 py-4 border border-white/20 hover:border-yellow-500 text-white font-semibold rounded-full transition"
                        >
                            View Our Portfolio
                        </Link>
                    </div>

                    {/* Trust Badge */}
                    <p className="mt-10 text-sm text-gray-500">
                        Trusted by 500+ clients across India • 5★ Rated Event Planners
                    </p>
                </div>
            </section>
        </>
    );
}