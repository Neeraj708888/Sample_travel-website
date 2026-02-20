import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Featured Luxury Travel Packages | Ananta Group",
    description:
        "Explore our premium handpicked travel packages. Discover Goa, Manali, Dubai, Bali and more with luxury experiences and best price guarantee.",
};

const packages = [
    {
        title: "Goa Beach Escape",
        slug: "goa-beach-escape",
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        location: "Goa, India",
        duration: "4 Days / 3 Nights",
        price: "₹14,999",
    },
    {
        title: "Manali Snow Adventure",
        slug: "manali-snow-adventure",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        location: "Manali, India",
        duration: "5 Days / 4 Nights",
        price: "₹18,999",
    },
    {
        title: "Dubai Luxury Tour",
        slug: "dubai-luxury-tour",
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        location: "Dubai, UAE",
        duration: "6 Days / 5 Nights",
        price: "₹59,999",
    },
    {
        title: "Bali Honeymoon Special",
        slug: "bali-honeymoon-special",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        location: "Bali, Indonesia",
        duration: "5 Days / 4 Nights",
        price: "₹49,999",
    },
];

export default function FeaturedPackages() {
    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen py-24 px-6">

            {/* Hero */}
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Featured Travel Experiences
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Curated luxury travel packages crafted for unforgettable journeys.
                </p>
            </div>

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

                {packages.map((pkg) => (
                    <div
                        key={pkg.slug}
                        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3"
                    >
                        {/* Image */}
                        <div className="relative h-72 overflow-hidden">
                            <Image
                                src={pkg.image}
                                alt={pkg.title}
                                fill
                                className="object-cover group-hover:scale-110 transition duration-700"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                            {/* Price Badge */}
                            <div className="absolute top-5 left-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-1 rounded-full text-sm font-semibold shadow-lg">
                                {pkg.price}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-3">
                                {pkg.title}
                            </h2>

                            <p className="text-gray-400 text-sm mb-2">
                                📍 {pkg.location}
                            </p>

                            <p className="text-gray-400 text-sm mb-6">
                                🗓 {pkg.duration}
                            </p>

                            <Link
                                href={`/packages/${pkg.slug}`}
                                className="inline-block w-full text-center py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition font-semibold shadow-lg"
                            >
                                View Package
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Premium CTA Section */}
            <div className="mt-28 text-center">
                <h3 className="text-4xl font-bold mb-6">
                    Begin Your Luxury Journey Today
                </h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Let our travel experts craft a personalized experience tailored just for you.
                </p>

                <Link
                    href="/contact"
                    className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition font-semibold shadow-2xl"
                >
                    Plan My Trip
                </Link>
            </div>

        </section>
    );
}
