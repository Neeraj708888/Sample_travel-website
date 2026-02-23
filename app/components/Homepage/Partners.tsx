import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Global Travel Partners | Luxury Airline & Hotel Collaborations",
    description:
        "Discover our trusted airline, hotel and global travel partnerships delivering seamless premium travel experiences worldwide.",
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
        <section className="relative bg-black text-white py-24 px-6 overflow-hidden">

            {/* Subtle Luxury Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-black to-yellow-900/10 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent mb-6">
                        Our Trusted Global Partners
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Collaborating with world-class airlines, luxury hotels and global
                        travel brands to deliver seamless elite experiences.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-28">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative p-[1px] rounded-3xl bg-gradient-to-r from-yellow-500/40 via-amber-300/20 to-yellow-500/40 hover:from-yellow-400 hover:to-yellow-600 transition duration-500"
                        >
                            <div className="bg-zinc-900 rounded-3xl p-10 text-center backdrop-blur-xl border border-white/10 group-hover:border-yellow-500 transition duration-500">

                                <div className="relative h-20 mb-6 grayscale group-hover:grayscale-0 transition duration-500">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <h2 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                                    {partner.name}
                                </h2>

                                <p className="text-sm text-gray-400">
                                    {partner.category}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Premium CTA Section */}
                <div className="bg-gradient-to-r from-yellow-500/20 via-amber-400/10 to-yellow-500/20 border border-yellow-500/30 rounded-3xl max-w-6xl mx-auto py-20 px-12 text-center shadow-2xl mb-28 backdrop-blur-xl">

                    <h2 className="text-4xl font-bold mb-6 text-yellow-400">
                        Strong Partnerships. Seamless Luxury Travel.
                    </h2>

                    <p className="max-w-3xl mx-auto mb-10 text-gray-300">
                        Our strategic alliances ensure priority bookings, exclusive
                        upgrades, and personalized premium services for every traveler.
                    </p>

                    <Link
                        href="/contact"
                        className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold rounded-full hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Become A Partner
                    </Link>
                </div>

                {/* Premium Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    {[
                        { value: "50+", label: "Global Partners" },
                        { value: "30+", label: "Airline Tie-Ups" },
                        { value: "100+", label: "Hotel Collaborations" },
                        { value: "24/7", label: "Elite Support" },
                    ].map((stat, index) => (
                        <div key={index} className="group">
                            <h3 className="text-4xl font-extrabold text-yellow-400 group-hover:scale-110 transition duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm mt-3 tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
