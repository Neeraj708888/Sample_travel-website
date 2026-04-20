import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Featured Event Experiences | Corporate, Wedding & Luxury Events",
    description:
        "Explore our featured event experiences including corporate events, weddings, product launches and brand promotions. Delivering premium event management services across India.",
};

const events = [
    {
        title: "Luxury Wedding Experience",
        slug: "luxury-wedding-events",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552",
        location: "Destination Weddings | India & Abroad",
        services: "Decoration, Planning, Entertainment",
    },
    {
        title: "Corporate Event Solutions",
        slug: "corporate-events",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
        location: "Delhi, Mumbai, Bangalore",
        services: "Conference, Seminars, Annual Meets",
    },
    {
        title: "Product Launch Events",
        slug: "product-launch-events",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
        location: "Pan India",
        services: "Brand Launch, Media Coverage",
    },
    {
        title: "Exhibition & Trade Shows",
        slug: "exhibition-events",
        image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
        location: "Major Expo Cities",
        services: "Booth Design, Fabrication",
    },
    {
        title: "Brand Promotion Activities",
        slug: "brand-promotions",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        location: "Retail & Outdoor Locations",
        services: "Activation, Sampling Campaigns",
    },
    {
        title: "Conference & Seminar Management",
        slug: "conference-events",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
        location: "Hotels & Convention Centers",
        services: "AV Setup, Guest Management",
    },
];

export default function FeaturedEvents() {
    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 px-6">

            {/* Hero */}
            <header className="text-center mb-20">
                <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Featured Event Experiences
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Discover our premium event management experiences designed for corporate brands, weddings and high-impact promotions.
                </p>
            </header>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                {events.map((event) => (
                    <div
                        key={event.slug}
                        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3"
                    >
                        {/* Image */}
                        <div className="relative h-72 w-full">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-110 transition duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

                            {/* Tag */}
                            <div className="absolute top-5 left-5 z-20 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                Featured
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 relative z-20">
                            <h2 className="text-2xl font-bold mb-3">
                                {event.title}
                            </h2>

                            <p className="text-gray-400 text-sm mb-2">
                                📍 {event.location}
                            </p>

                            <p className="text-gray-400 text-sm mb-6">
                                🎯 {event.services}
                            </p>

                            <Link
                                href={`/events/${event.slug}`}
                                className="inline-block w-full text-center py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition font-semibold shadow-lg"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* SEO Content */}
            <div className="max-w-4xl mx-auto mt-24 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Premium Event Management Company in India
                </h2>
                <p className="text-gray-400 leading-relaxed">
                    We deliver world-class event experiences including corporate events, luxury weddings, product launches and brand promotions.
                    Our expert team ensures creative execution, seamless planning and high-impact results for every event.
                </p>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <h3 className="text-3xl font-bold mb-6">
                    Let’s Create Your Next Big Event
                </h3>
                <Link
                    href="/contact"
                    className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition font-semibold shadow-2xl"
                >
                    Get Free Consultation
                </Link>
            </div>

        </section>
    );
}