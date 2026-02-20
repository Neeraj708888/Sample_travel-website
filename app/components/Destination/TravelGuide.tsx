"use client";

import { useRouter } from "next/navigation";

const guides = [
    {
        title: "Best Time to Visit Manali",
        slug: "best-time-to-visit-manali",
    },
    {
        title: "Top 10 Things to Do in Goa",
        slug: "top-10-things-to-do-in-goa",
    },
    {
        title: "Jaipur Travel Guide 2025",
        slug: "jaipur-travel-guide-2025",
    },
];

export default function TravelGuides() {
    const router = useRouter();

    return (
        <section className="relative py-24 px-6 bg-gradient-to-b from-gray-950 to-black text-white">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Expert Travel Guides & Insights
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Discover in-depth travel guides crafted to help you plan the
                        perfect journey. From seasonal tips to hidden experiences,
                        explore curated insights for smarter travel decisions.
                    </p>
                </div>

                {/* Guide Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {guides.map((guide) => (
                        <div
                            key={guide.slug}
                            onClick={() => router.push(`/destinations/${guide.slug}`)}
                            className="group cursor-pointer relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-yellow-500 transition-all duration-500 shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2"
                        >
                            <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition">
                                {guide.title}
                            </h3>

                            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                                Complete premium travel insights including best time to visit,
                                attractions, itinerary suggestions, and expert travel tips.
                            </p>

                            <div className="mt-6 text-yellow-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                                Read Full Guide →
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
