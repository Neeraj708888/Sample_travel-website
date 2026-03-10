import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Our Portfolio | Event Management Company",
    description:
        "Discover our portfolio of corporate events, conferences, product launches, and weddings organized with excellence.",
};

const projects = [
    {
        title: "Corporate Leadership Summit",
        image: "/portfolio/corporate.jpg",
        category: "Corporate Event",
    },
    {
        title: "Annual Tech Conference",
        image: "/portfolio/conference.jpg",
        category: "Conference",
    },
    {
        title: "Luxury Wedding Celebration",
        image: "/portfolio/wedding.jpg",
        category: "Wedding",
    },
    {
        title: "Product Launch Event",
        image: "/portfolio/product.jpg",
        category: "Product Launch",
    },
];

export default function PortfolioPage() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-16">

            {/* HERO */}
            <section className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4">
                    Our Event Portfolio
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our successful events including corporate conferences,
                    product launches, exhibitions, and luxury celebrations crafted
                    with creativity and precision.
                </p>
            </section>

            {/* PORTFOLIO GRID */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                    >
                        <div className="relative h-64">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition"
                            />
                        </div>

                        <div className="p-6">
                            <p className="text-sm text-yellow-500 font-semibold mb-2">
                                {project.category}
                            </p>

                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <Link
                                href="/contact"
                                className="text-sm font-medium text-blue-600 hover:underline"
                            >
                                Plan Similar Event →
                            </Link>
                        </div>
                    </div>
                ))}

            </section>

            {/* CTA */}
            <section className="mt-20 bg-black text-white rounded-xl p-12 text-center">

                <h2 className="text-3xl font-bold mb-4">
                    Let’s Create Your Next Event
                </h2>

                <p className="mb-6 text-gray-300">
                    From corporate conferences to grand weddings, our team ensures
                    every event is unforgettable.
                </p>

                <Link
                    href="/contact"
                    className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
                >
                    Get Free Consultation
                </Link>

            </section>

        </main>
    );
}