import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Travel Partners | Trusted Airlines, Hotels & Tour Operators",
    description:
        "We proudly collaborate with leading airlines, hotels and global travel partners to deliver premium travel experiences.",
};

const partners = [
    {
        name: "Emirates Airlines",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
        category: "Airline Partner",
    },
    {
        name: "Taj Hotels",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Taj_Hotels_logo.svg",
        category: "Luxury Hotel Partner",
    },
    {
        name: "Marriott International",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Marriott_logo.svg",
        category: "Global Hotel Chain",
    },
    {
        name: "MakeMyTrip",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/MakeMyTrip_Logo.png",
        category: "Travel Platform",
    },
    {
        name: "Air India",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Air_India_logo.svg",
        category: "Airline Partner",
    },
    {
        name: "Radisson Hotels",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Radisson_logo.svg",
        category: "Hotel Partner",
    },
];

export default function Partners() {
    return (
        <section className="bg-gray-50 min-h-screen py-20 px-6">

            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Our Travel Partners
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    We collaborate with trusted global brands to ensure comfort, luxury and reliability for every journey.
                </p>
            </div>

            {/* Partners Grid */}
            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 text-center group"
                    >
                        <div className="relative h-20 mb-6 grayscale group-hover:grayscale-0 transition duration-300">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h2 className="text-lg font-semibold mb-2">
                            {partner.name}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {partner.category}
                        </p>
                    </div>
                ))}
            </div>

            {/* Trust Section */}
            <div className="bg-blue-600 text-white rounded-3xl max-w-6xl mx-auto py-16 px-10 text-center shadow-xl mb-20">
                <h2 className="text-3xl font-bold mb-6">
                    Strong Partnerships. Seamless Travel.
                </h2>
                <p className="max-w-3xl mx-auto mb-8 text-sm md:text-base opacity-90">
                    Our strategic alliances with airlines, hotels and travel service providers
                    allow us to offer exclusive deals, priority bookings and premium services
                    to our customers.
                </p>
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Partner With Us
                </Link>
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
                <div>
                    <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                    <p className="text-gray-600 text-sm mt-2">Global Partners</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-blue-600">30+</h3>
                    <p className="text-gray-600 text-sm mt-2">Airline Tie-Ups</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                    <p className="text-gray-600 text-sm mt-2">Hotel Collaborations</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                    <p className="text-gray-600 text-sm mt-2">Service Support</p>
                </div>
            </div>

        </section>
    );
}
