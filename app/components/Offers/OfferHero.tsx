"use client";
import Image from "next/image";

export default function OfferHero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center text-center">
            <Image
                src="/luxury-travel.jpg"
                alt="Luxury travel deals"
                fill
                className="object-cover brightness-50"
                priority
            />

            <div className="relative z-10 max-w-3xl px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Exclusive Travel Offers
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Save up to 50% on flights, hotels & holiday packages.
                    Limited time premium deals curated for you.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full hover:scale-105 transition">
                    Explore Deals
                </button>
            </div>
        </section>
    );
}
