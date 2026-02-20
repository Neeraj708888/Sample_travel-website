import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Featured Travel Packages | Best Tour Deals",
    description:
        "Explore our featured travel packages with best price guarantee. Discover Goa, Manali, Dubai, Bali and more with customized travel plans.",
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
        <section className="bg-gray-50 min-h-screen py-20 px-6">

            {/* Hero */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Featured Travel Packages
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Handpicked travel packages designed for unforgettable experiences at the best prices.
                </p>
            </div>

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {packages.map((pkg) => (
                    <div
                        key={pkg.slug}
                        className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                    >
                        {/* Image */}
                        <div className="relative h-64">
                            <Image
                                src={pkg.image}
                                alt={pkg.title}
                                fill
                                className="object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* Price Badge */}
                            <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow-md">
                                {pkg.price}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                {pkg.title}
                            </h2>

                            <p className="text-gray-500 text-sm mb-2">
                                📍 {pkg.location}
                            </p>

                            <p className="text-gray-600 text-sm mb-6">
                                🗓 {pkg.duration}
                            </p>

                            <Link
                                href={`/packages/${pkg.slug}`}
                                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Ready to Start Your Journey?
                </h3>
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition"
                >
                    Contact Us
                </Link>
            </div>

        </section>
    );
}
