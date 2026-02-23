import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Success Stories | Ananta Group Luxury Experiences",
    description:
        "Explore the success stories of Ananta Group featuring luxury destination weddings, premium travel experiences, and high-end corporate events.",
    keywords: [
        "Ananta Group Success Stories",
        "Luxury Wedding Case Study",
        "Premium Travel Experiences",
        "Corporate Event Success Story",
        "Client Testimonials Luxury Events",
    ],
};

const stories = [
    {
        id: 1,
        title: "Royal Destination Wedding in Udaipur",
        description:
            "A grand 3-day luxury wedding experience crafted with elegance, heritage venues, and flawless execution.",
        image:
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    },
    {
        id: 2,
        title: "Exclusive Maldives Travel Experience",
        description:
            "Curated ultra-luxury honeymoon escape with private villas and personalized concierge service.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        id: 3,
        title: "High-End Corporate Leadership Summit",
        description:
            "Premium corporate event with luxury hospitality, strategic branding, and seamless coordination.",
        image:
            "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    },
];

export default function SuccessStoriesPage() {
    return (
        <main className="bg-white text-gray-900">

            {/* ===== Hero Section ===== */}
            <section className="relative h-[70vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/75"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                        Our Success Stories
                    </h1>
                    <p className="text-lg md:text-xl opacity-90">
                        Delivering extraordinary luxury experiences that exceed expectations.
                    </p>
                </div>
            </section>

            {/* ===== Stories Grid Section ===== */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-3 gap-12">

                    {stories.map((story) => (
                        <article
                            key={story.id}
                            className="group rounded-3xl overflow-hidden shadow-lg border hover:shadow-2xl transition duration-500"
                        >
                            <div className="relative h-72">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            <div className="p-8">
                                <h2 className="text-xl font-semibold mb-4">
                                    {story.title}
                                </h2>

                                <p className="text-gray-600 mb-6">
                                    {story.description}
                                </p>

                                <Link
                                    href="/contact"
                                    className="inline-block text-sm font-semibold tracking-wide border-b border-black hover:opacity-70 transition"
                                >
                                    Plan Your Experience →
                                </Link>
                            </div>
                        </article>
                    ))}

                </div>
            </section>

            {/* ===== Client Testimonial Section ===== */}
            <section className="bg-black text-white py-28 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    What Our Clients Say
                </h2>

                <div className="max-w-4xl mx-auto space-y-12">

                    <blockquote className="text-lg md:text-xl italic text-gray-300">
                        “Ananta Group turned our dream wedding into a royal reality. Every detail was executed with perfection and elegance.”
                        <div className="mt-4 font-semibold text-white">
                            — Luxury Wedding Client
                        </div>
                    </blockquote>

                    <blockquote className="text-lg md:text-xl italic text-gray-300">
                        “Exceptional planning and premium hospitality. Our corporate summit was executed flawlessly.”
                        <div className="mt-4 font-semibold text-white">
                            — Corporate Partner
                        </div>
                    </blockquote>

                </div>
            </section>

            {/* ===== CTA Section ===== */}
            <section className="bg-gray-100 py-28 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Let’s Create Your Success Story
                </h2>

                <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                    Partner with Ananta Group to design a luxury experience that becomes your next milestone achievement.
                </p>

                <Link
                    href="/contact"
                    className="px-10 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300"
                >
                    Get Started
                </Link>
            </section>

        </main>
    );
}