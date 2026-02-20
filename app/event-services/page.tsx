import Image from "next/image";
import Link from "next/link";

const services = [
    {
        id: 1,
        title: "Wedding Planning",
        description:
            "Complete wedding management including venue, decoration, catering & entertainment.",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
        id: 2,
        title: "Corporate Events",
        description:
            "Professional corporate meetings, conferences, and brand launch events.",
        image:
            "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
    },
    {
        id: 3,
        title: "Birthday Parties",
        description:
            "Creative birthday themes, decoration, catering, and entertainment.",
        image:
            "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    },
    {
        id: 4,
        title: "Concert & Live Shows",
        description:
            "Stage setup, sound systems, lighting, artist management & crowd control.",
        image:
            "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    },
];

export default function EventServicesPage() {
    return (
        <main className="min-h-screen">

            {/* ===== Luxury Hero Section ===== */}
            <section className="relative h-[75vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865')] bg-cover bg-center">

                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

                <div className="relative z-10 text-center text-white px-6 mt-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                        Luxury Event Services
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                        We curate extraordinary experiences with elegance, perfection and world-class execution.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300"
                    >
                        Plan Your Event
                    </Link>
                </div>
            </section>

            {/* ===== Premium Services Section ===== */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Signature Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Elegant planning. Flawless execution. Memorable celebrations.
                    </p>
                </div>

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100"
                        >
                            <div className="relative w-full h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                            </div>

                            <div className="p-8">
                                <h2 className="text-xl font-semibold mb-4 group-hover:text-gray-900 transition">
                                    {service.title}
                                </h2>

                                <p className="text-gray-800 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <Link
                                    href="/contact"
                                    className="text-black inline-block px-6 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300"
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== Royal CTA Section ===== */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Let’s Create Something Extraordinary
                </h2>

                <p className="max-w-2xl mx-auto mb-10 text-gray-700">
                    From intimate gatherings to grand celebrations — we transform your vision into a masterpiece.
                </p>

                <Link
                    href="/contact"
                    className="px-10 py-3 text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300"
                >
                    Contact Us Today
                </Link>
            </section>

        </main>
    );
}
