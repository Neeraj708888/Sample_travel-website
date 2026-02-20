import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Popular Travel Destinations | Explore Top Places",
    description:
        "Explore the most popular travel destinations including Goa, Manali, Kashmir, Dubai, Bali and more. Book affordable tour packages today.",
};

const destinations = [
    {
        name: "Goa",
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        description: "Beaches, nightlife and unforgettable sunsets.",
    },
    {
        name: "Manali",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        description: "Snowy mountains and romantic valleys.",
    },
    {
        name: "Kashmir",
        image:
            "https://images.unsplash.com/photo-1599940824398-5f3c9a0df35e",
        description: "Paradise on earth with breathtaking views.",
    },
    {
        name: "Dubai",
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        description: "Luxury shopping and desert adventures.",
    },
    {
        name: "Bali",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        description: "Tropical paradise with scenic beaches.",
    },
    {
        name: "Andaman",
        image:
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        description: "Crystal clear waters and island escapes.",
    },
];

export default function PopularDestination() {
    return (
        <section className="bg-gray-50 min-h-screen py-20 px-6">

            {/* Hero */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Explore Popular Destinations
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Discover the most loved travel destinations with customized tour
                    packages and unforgettable experiences.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {destinations.map((destination) => (
                    <Link
                        key={destination.name}
                        href={`/destinations/${destination.name.toLowerCase()}`}
                        className="group relative rounded-3xl overflow-hidden shadow-lg"
                    >
                        <div
                            className="h-80 bg-cover bg-center transform group-hover:scale-110 transition duration-500"
                            style={{ backgroundImage: `url(${destination.image})` }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 p-6 text-white">
                            <h2 className="text-2xl font-bold mb-2">
                                {destination.name}
                            </h2>
                            <p className="text-sm opacity-90">
                                {destination.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Ready To Plan Your Dream Vacation?
                </h3>
                <Link
                    href="/packages"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition shadow-lg"
                >
                    Explore Packages
                </Link>
            </div>

        </section>
    );
}
