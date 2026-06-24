"use client";

import { useRouter } from "next/navigation";

const trending = [
    {
        name: "Manali",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg",
    },
    {
        name: "Goa",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSj3RULDA688B1Z7-QdclNQImcCiFMQV1PTA&s",
    },
    {
        name: "Jaipur",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKyz2jubRc5OqvvsDlosQPIdtqd75V5ZBQQ&s",
    },
];

export default function TrendingPlaces() {
    const router = useRouter();

    const openDestination = (name: string) => {
        const slug = name.toLowerCase().replace(/\s+/g, "-");
        router.push(`/destinations/${slug}`);
    };

    return (
        <section className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Top Trending Travel Destinations
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Explore India's most sought-after destinations curated for
                        luxury travelers. Discover breathtaking landscapes, heritage
                        cities, and unforgettable experiences.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {trending.map((place) => (
                        <div
                            key={place.name}
                            onClick={() => openDestination(place.name)}
                            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-yellow-500 transition-all duration-500 shadow-lg hover:shadow-yellow-500/20"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={place.image}
                                    alt={`Travel to ${place.name} - Luxury Destination in India`}
                                    className="h-64 w-full object-cover transform group-hover:scale-110 transition duration-700"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>

                            {/* Text */}
                            <div className="absolute bottom-6 left-6 z-10">
                                <h3 className="text-2xl font-semibold group-hover:text-yellow-400 transition">
                                    {place.name}
                                </h3>
                                <p className="text-sm text-gray-300 mt-1">
                                    Explore curated premium packages
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
