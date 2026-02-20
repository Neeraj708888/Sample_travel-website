"use client";

import { useRouter } from "next/navigation";


export default function Hero() {
    const router = useRouter();

    const handleExplorePackages = () => {
        router.push("/packages");
    }
    return (
        <section className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Explore The World With Us
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Discover amazing destinations, travel packages and event services tailored for your perfect journey.
                </p>
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition" onClick={handleExplorePackages}>
                    Explore Packages
                </button>
            </div>

        </section>
    );
}
