"use client";

import { useRouter } from "next/navigation";

const trending = [
    { name: "Manali", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg" },
    { name: "Goa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSj3RULDA688B1Z7-QdclNQImcCiFMQV1PTA&s" },
    { name: "Jaipur", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKyz2jubRc5OqvvsDlosQPIdtqd75V5ZBQQ&s" },
    // { name: "Jaipur", image: "/images/jaipur.jpg" }, useful for SEO 
];

export default function TrendingPlaces() {
    const router = useRouter();

    const openDestination = (name: string) => {
        const slug = name.toLowerCase();
        router.push(`/destinations/${slug}`);
    };

    return (
        <section className="px-10 py-8">
            <h2 className="text-2xl font-bold mb-6">Top Trending Places</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {trending.map((place) => (
                    <div
                        key={place.name}
                        onClick={() => openDestination(place.name)}
                        className="cursor-pointer border rounded overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <img
                            src={place.image}
                            alt={place.name}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4 font-semibold">
                            {place.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
