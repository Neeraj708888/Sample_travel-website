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
        <section className="px-10 py-8">
            <h2 className="text-2xl font-bold mb-6">
                Meet Our Travel Guides
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {guides.map((guide) => (
                    <div
                        key={guide.slug}
                        onClick={() => router.push(`/destinations/${guide.slug}`)}
                        className="border p-6 rounded shadow hover:shadow-lg cursor-pointer"
                    >
                        <h3 className="font-semibold">
                            {guide.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Complete AI-generated travel insights.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
