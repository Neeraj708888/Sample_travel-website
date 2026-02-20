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
        <section className="min-h-screen py-24 px-6">

            {/* Hero */}
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                    Why Choose Us
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    We are committed to delivering unforgettable travel experiences
                    with exceptional service, personalized planning and unmatched value.
                </p>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mb-28">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group p-10 rounded-3xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition duration-300"
                    >
                        <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">
                            {feature.icon}
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-gray-900">
                            {feature.title}
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-28">

                {[
                    { value: "10K+", label: "Happy Travelers" },
                    { value: "50+", label: "Destinations" },
                    { value: "8+", label: "Years Experience" },
                    { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300"
                    >
                        <h3 className="text-4xl font-extrabold text-blue-600">
                            {stat.value}
                        </h3>
                        <p className="text-gray-600 text-sm mt-3 tracking-wide">
                            {stat.label}
                        </p>
                    </div>
                ))}

            </div>

            {/* Process Section */}
            <div className="max-w-5xl mx-auto text-center mb-28">
                <h2 className="text-4xl font-bold mb-16 text-gray-900">
                    How We Make Your Trip Perfect
                </h2>

                <div className="grid md:grid-cols-3 gap-12">

                    {[
                        {
                            step: "01",
                            title: "Plan",
                            desc: "Share your travel ideas and preferences with our experts.",
                        },
                        {
                            step: "02",
                            title: "Customize",
                            desc: "We craft a personalized itinerary tailored to your needs.",
                        },
                        {
                            step: "03",
                            title: "Enjoy",
                            desc: "Travel stress-free while we manage everything for you.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="text-6xl font-extrabold text-gray-100 mb-6">
                                {item.step}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-8">
                    Ready To Start Your Journey?
                </h3>

                <Link
                    href="/packages"
                    className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:scale-105 transition duration-300 font-semibold"
                >
                    Explore Packages
                </Link>
            </div>

        </section>
    );
}
