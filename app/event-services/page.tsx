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
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Event Services
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                    We create unforgettable experiences — from weddings to corporate events.
                </p>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-3">
                                    {service.title}
                                </h2>

                                <p className="text-gray-600 text-sm mb-5">
                                    {service.description}
                                </p>

                                <Link
                                    href="#"
                                    className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-16 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Let’s Plan Your Next Event!
                </h2>
                <p className="text-gray-600 mb-6">
                    Contact us today and let’s create something amazing together.
                </p>

                <button className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition">
                    Contact Us
                </button>
            </section>
        </main>
    );
}
