"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Hero() {
    const router = useRouter();

    const handleExplorePackages = () => {
        router.push("/packages");
    };

    return (
        <section className="relative h-[95vh] flex items-center justify-center overflow-hidden py-24">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-110"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
                }}
            />

            {/* Dark Luxury Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

            {/* Glow Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.15),_transparent_60%)]" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl">

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent animate-fadeIn">
                    Explore The World With Elegance
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-10">
                    Discover curated luxury destinations, bespoke travel packages,
                    and unforgettable experiences crafted just for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">

                    {/* Primary Button */}
                    <button
                        onClick={handleExplorePackages}
                        className="px-10 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold shadow-2xl hover:scale-105 transition duration-300"
                    >
                        Explore Packages
                    </button>

                    {/* Secondary Button */}
                    <Link
                        href="/contact"
                        className="px-10 py-4 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition duration-300"
                    >
                        Plan Custom Trip
                    </Link>

                </div>

            </div>

        </section>
    );
}
