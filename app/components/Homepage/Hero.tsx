"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Hero() {
    const router = useRouter();

    const handleExploreEvents = () => {
        router.push("/events");
    };

    return (
        <section className="relative h-[95vh]  mt-16 flex items-center justify-center overflow-hidden py-24">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-110"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622')",
                }}
            />

            {/* Dark Luxury Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

            {/* Golden Glow Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15),_transparent_60%)]" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl">

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                    Crafting Extraordinary Events That Define Elegance
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-10">
                    Luxury weddings, corporate galas, destination celebrations,
                    brand launches, and exclusive private events — curated with
                    precision, creativity, and unmatched sophistication.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">

                    <button
                        onClick={handleExploreEvents}
                        className="px-10 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold shadow-2xl hover:scale-105 transition duration-300"
                    >
                        Explore Our Events
                    </button>

                    <Link
                        href="/contact"
                        className="px-10 py-4 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition duration-300"
                    >
                        Plan Your Dream Event
                    </Link>

                </div>
            </div>
        </section>
    );
}
