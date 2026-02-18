import Image from "next/image";
import Link from "next/link";

const packages = [
    {
        id: 1,
        title: "Goa Beach Escape",
        location: "Goa, India",
        price: "₹12,999",
        duration: "3 Nights / 4 Days",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        id: 2,
        title: "Manali Adventure Trip",
        location: "Manali, Himachal",
        price: "₹15,499",
        duration: "4 Nights / 5 Days",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        id: 3,
        title: "Jaipur Royal Tour",
        location: "Jaipur, Rajasthan",
        price: "₹9,999",
        duration: "2 Nights / 3 Days",
        image:
            "https://images.unsplash.com/photo-1599661046827-dacff0c0f09f",
    },
];

export default function PackagesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Explore Our Travel Packages
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                    Handpicked experiences crafted for unforgettable journeys.
                </p>
            </section>

            {/* Packages Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    {pkg.title}
                                </h2>
                                <p className="text-gray-500 text-sm mb-2">
                                    📍 {pkg.location}
                                </p>
                                <p className="text-gray-500 text-sm mb-4">
                                    ⏳ {pkg.duration}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-blue-600">
                                        {pkg.price}
                                    </span>

                                    <Link
                                        href="#"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
