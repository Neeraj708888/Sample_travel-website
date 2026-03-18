"use client";

import GlobalServiceSearch from "../GlobalServiceSearch";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcum";

type EventSearchProps = {
    breadcrumbItems: {
        label: string
        href: string
    }[],
    title: string
}

export function EventSearch({ breadcrumbItems, title }: EventSearchProps) {
    console.log("Title :", title);
    return (
        <>
            <section className="relative py-3 mt-16 text-white overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 opacity-95"></div>

                <div className="relative max-w-8xl mx-auto text-center px-4">
                    {/* H1 - SEO Optimized */}
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                        {title} Services in Delhi
                    </h1>

                    {/* H2 */}
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-200 py-3">
                        Luxury Wedding Planning, Corporate Events & Exclusive Celebrations
                    </h2>

                    {/* SEO Paragraph */}
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto py-2 leading-relaxed">
                        We specialize in luxury wedding planning, corporate event
                        management, destination celebrations, and private premium
                        experiences across India. Our expert planners create unforgettable
                        events tailored perfectly to your vision and brand.
                    </p>

                    {/* Global Search (High Intent Users) */}
                    <div className="py-1">
                        <GlobalServiceSearch />
                    </div>

                    {/* 3D Card Slide */}
                    {/* <Event3DSlider /> */}

                    {/* High Conversion CTA */}
                    <div className="flex flex-col sm:flex-row justify-center py-3 gap-6">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition transform hover:scale-105 shadow-xl shadow-yellow-500/20"
                        >
                            Get Free Event Consultation
                        </Link>

                        <Link
                            href="/portfolio"
                            className="px-8 py-4 border border-white/20 hover:border-yellow-500 text-white font-semibold rounded-full transition"
                        >
                            View Our Portfolio
                        </Link>
                    </div>

                    {/* Trust Badge */}
                    {/* <p className="mt-10 text-sm text-gray-500">
                        Trusted by 500+ clients across India • 5★ Rated Event Planners
                    </p> */}

                    {/* ✅ Breadcrumb Added Here */}
                    <div>
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>
            </section>
        </>
    );
}