import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Why Choose Us | Trusted Travel Agency",
    description:
        "Discover why thousands of travelers trust us for customized tour packages, affordable pricing, expert support and unforgettable travel experiences.",
};

const features = [
    {
        title: "Best Price Guarantee",
        description:
            "We offer competitive pricing with no hidden charges and flexible travel packages.",
        icon: "💰",
    },
    {
        title: "Customized Tour Packages",
        description:
            "Tailor-made travel plans designed according to your budget and preferences.",
        icon: "🧳",
    },
    {
        title: "24/7 Customer Support",
        description:
            "Dedicated travel experts available anytime to assist you during your journey.",
        icon: "📞",
    },
    {
        title: "Trusted by Thousands",
        description:
            "Happy customers across multiple destinations with 5-star experiences.",
        icon: "⭐",
    },
    {
        title: "Secure & Easy Booking",
        description:
            "Safe payment methods and smooth booking process with instant confirmations.",
        icon: "🔒",
    },
    {
        title: "Experienced Travel Experts",
        description:
            "Professional team with years of experience in planning dream vacations.",
        icon: "🌍",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-50 min-h-screen py-20 px-6">

            {/* Hero */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Why Choose Us
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    We are committed to delivering unforgettable travel experiences
                    with exceptional service and unbeatable value.
                </p>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
                    >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h2 className="text-2xl font-semibold mb-3">
                            {feature.title}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Stats Section */}
            <div className="bg-blue-600 text-white rounded-3xl max-w-6xl mx-auto py-14 px-8 grid grid-cols-2 md:grid-cols-4 text-center mb-20 shadow-xl">
                <div>
                    <h3 className="text-3xl font-bold">10K+</h3>
                    <p className="text-sm mt-2">Happy Travelers</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">50+</h3>
                    <p className="text-sm mt-2">Destinations</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">8+</h3>
                    <p className="text-sm mt-2">Years Experience</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">24/7</h3>
                    <p className="text-sm mt-2">Support</p>
                </div>
            </div>

            {/* Process Section */}
            <div className="max-w-5xl mx-auto text-center mb-20">
                <h2 className="text-3xl font-bold mb-10 text-gray-800">
                    How We Make Your Trip Perfect
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-500">1. Plan</h3>
                        <p className="text-gray-600 text-sm">
                            Share your travel ideas and preferences with us.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-500">2. Customize</h3>
                        <p className="text-gray-600 text-sm">
                            We create a personalized itinerary tailored to you.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-500">3. Enjoy</h3>
                        <p className="text-gray-600 text-sm">
                            Travel stress-free while we handle everything.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Ready To Start Your Journey?
                </h3>
                <Link
                    href="/packages"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition"
                >
                    Explore Packages
                </Link>
            </div>

        </section>
    );
}
