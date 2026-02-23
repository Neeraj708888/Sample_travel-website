import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Luxury Travel & Event Blog | Ananta Group",
    description:
        "Explore luxury travel insights, destination wedding trends, premium event inspirations, and curated experiences by Ananta Group.",
    keywords: [
        "Luxury Travel Blog",
        "Destination Wedding Blog",
        "Premium Event Planning Tips",
        "Ananta Group Blog",
        "Luxury Experiences",
    ],
};

const blogs = [
    {
        id: 1,
        title: "Top 5 Luxury Destinations for 2026",
        description:
            "Discover the most exclusive global destinations redefining luxury travel experiences.",
        image:
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
        slug: "/blog/luxury-destinations-2026",
    },
    {
        id: 2,
        title: "How to Plan a Dream Destination Wedding",
        description:
            "Everything you need to know to create a seamless and unforgettable luxury wedding.",
        image:
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
        slug: "/blog/destination-wedding-guide",
    },
    {
        id: 3,
        title: "Luxury Corporate Events That Impress",
        description:
            "Crafting premium corporate gatherings that elevate brand presence and experience.",
        image:
            "https://images.unsplash.com/photo-1515169067868-5387ec356754",
        slug: "/blog/luxury-corporate-events",
    },
];

export default function BlogPage() {
    return (
        <main className="text-gray-900">

            {/* ===== Hero Section ===== */}
            <section className="relative h-[70vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')] bg-cover bg-center py-24 px-6 mt-16">
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                        Luxury Insights & Inspirations
                    </h1>
                    <p className="text-lg md:text-xl opacity-90">
                        Discover premium travel stories, wedding inspirations, and expert event planning insights.
                    </p>
                </div>
            </section>

            {/* ===== Blog Grid ===== */}
            <section className="max-w-7xl mx-auto px-6 py-28 bg-white">
                <div className="grid md:grid-cols-3 gap-12">

                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="group rounded-3xl overflow-hidden shadow-lg border hover:shadow-2xl transition duration-500"
                        >
                            <div className="relative h-72">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            <div className="p-8">
                                <h2 className="text-xl font-semibold mb-4 group-hover:text-black transition">
                                    {blog.title}
                                </h2>

                                <p className="text-gray-600 mb-6">
                                    {blog.description}
                                </p>

                                <Link
                                    href={blog.slug}
                                    className="inline-block text-sm font-semibold tracking-wide border-b border-black hover:opacity-70 transition"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </article>
                    ))}

                </div>
            </section>

            {/* ===== CTA Section ===== */}
            <section className="py-28 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Stay Inspired with Luxury Experiences
                </h2>

                <p className="max-w-2xl mx-auto text-gray-700 mb-10">
                    Explore curated insights from Ananta Group and elevate your travel and event experiences.
                </p>

                <Link
                    href="/contact"
                    className="px-10 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300"
                >
                    Start Your Journey
                </Link>
            </section>

        </main>
    );
}