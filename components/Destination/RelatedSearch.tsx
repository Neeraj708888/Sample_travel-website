"use client";

import { useRouter } from "next/navigation";

const related = [
    "Manali Trip",
    "Goa Beaches",
    "Shimla Tour",
    "Kerala Backwaters",
    "Leh Ladakh Road Trip",
];

export default function RelatedSearch() {
    const router = useRouter();

    const handleClick = (item: string) => {
        const slug = item.toLowerCase().replace(/\s+/g, "-");
        router.push(`/destinations/${slug}`);
    };

    return (
        <section className="relative py-20 px-6 bg-gradient-to-b from-gray-950 to-black text-white">
            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Explore More Travel Inspirations
                </h2>

                {/* Sub Text */}
                <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                    Discover trending travel destinations and curated journeys loved by
                    premium travelers across India.
                </p>

                {/* Related Chips */}
                <div className="flex flex-wrap justify-center gap-4">
                    {related.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className="group relative px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
                        >
                            <span className="relative z-10 group-hover:text-yellow-400 transition">
                                {item}
                            </span>

                            {/* Glow Effect */}
                            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-yellow-500/10 transition duration-300"></span>
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}
