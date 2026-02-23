import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us | Ananta Group - Luxury Travel & Event Experts",
    description:
        "Discover Ananta Group – a premium luxury travel and event management company delivering world-class curated experiences, destination weddings, and exclusive travel services.",
    keywords: [
        "Ananta Group",
        "Luxury Travel Company",
        "Event Management Company",
        "Destination Wedding Planners",
        "Premium Travel Packages",
    ],
};

export default function AboutPage() {
    return (
        <main className="text-gray-900">

            {/* ===== Hero Section ===== */}
            <section className="relative h-[75vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                        About Ananta Group
                    </h1>
                    <p className="text-lg md:text-xl opacity-90">
                        Redefining luxury travel and premium event experiences with elegance, precision and excellence.
                    </p>
                </div>
            </section>

            {/* ===== Our Story Section ===== */}
            <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our Story
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        Ananta Group was founded with a vision to deliver premium travel and event experiences crafted with sophistication and detail. We specialize in curated travel packages, destination weddings, corporate events, and exclusive luxury celebrations.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Our commitment to excellence, creativity, and seamless execution makes us a trusted partner for clients seeking unforgettable experiences.
                    </p>
                </div>

                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="Ananta Group Team"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* ===== Vision & Mission ===== */}
            <section className="bg-black text-white py-28 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

                    <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/20 transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4">
                            Our Vision
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            To become a globally recognized luxury travel and event management brand delivering refined, curated and world-class experiences.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/20 transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            To design seamless, elegant and unforgettable journeys through innovation, personalized service and exceptional attention to detail.
                        </p>
                    </div>

                </div>
            </section>

            {/* ===== Why Choose Us ===== */}
            <section className="max-w-6xl mx-auto px-6 py-28 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Why Choose Ananta Group?
                </h2>

                <div className="grid md:grid-cols-3 gap-10 mt-12">

                    <div className="p-8 rounded-3xl shadow-lg border hover:shadow-2xl transition duration-300">
                        <h4 className="text-xl font-semibold mb-4">Luxury Expertise</h4>
                        <p className="text-gray-600">
                            Years of experience in premium travel planning and luxury event management.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl shadow-lg border hover:shadow-2xl transition duration-300">
                        <h4 className="text-xl font-semibold mb-4">Personalized Service</h4>
                        <p className="text-gray-600">
                            Tailor-made solutions crafted according to your preferences and vision.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl shadow-lg border hover:shadow-2xl transition duration-300">
                        <h4 className="text-xl font-semibold mb-4">Seamless Execution</h4>
                        <p className="text-gray-600">
                            From planning to delivery, every detail is handled with precision and care.
                        </p>
                    </div>

                </div>
            </section>

            {/* ===== Premium CTA Section ===== */}
            <section className="bg-gray-100 py-24 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Let’s Create Something Extraordinary
                </h2>

                <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                    Partner with Ananta Group to experience travel and events reimagined with luxury and perfection.
                </p>

                <Link
                    href="/contact"
                    className="px-10 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300"
                >
                    Get In Touch
                </Link>
            </section>

        </main>
    );
}