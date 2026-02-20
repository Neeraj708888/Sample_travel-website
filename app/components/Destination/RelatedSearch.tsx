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
        <section className="px-10 py-8">
            <h2 className="text-2xl font-bold mb-4">Related Searches</h2>

            <div className="flex flex-wrap gap-3">
                {related.map((item) => (
                    <button
                        key={item}
                        onClick={() => handleClick(item)}
                        className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-300"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </section>
    );
}
