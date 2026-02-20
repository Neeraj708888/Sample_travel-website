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
        <main className="min-h-screen">

            {/* ===== Luxury Hero Section ===== */}
            <section className="relative h-[70vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1')] bg-cover bg-center">

                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                        Luxury Travel Packages
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                        Curated destinations designed for unforgettable journeys and refined experiences.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300"
                    >
                        Customize Your Trip
                    </Link>
                </div>
            </section>

            {/* ===== Premium Packages Section ===== */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Destinations
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore handpicked experiences crafted with comfort, elegance and adventure.
                    </p>
                </div>

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="group bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100"
                        >
                            <div className="relative w-full h-72 overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition text-gray-800"></div>
                            </div>

                            <div className="p-8">
                                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                                    {pkg.title}
                                </h2>

                                <p className="text-gray-500 text-sm mb-2">
                                    📍 {pkg.location}
                                </p>

                                <p className="text-gray-500 text-sm mb-4">
                                    ⏳ {pkg.duration}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-black">
                                        {pkg.price}
                                    </span>

                                    <Link
                                        href="/contact"
                                        className="px-5 py-2 border text-gray-800 border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== Royal CTA Section ===== */}
            <section className="text-black py-24 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Begin Your Luxury Journey Today
                </h2>

                <p className="max-w-2xl mx-auto mb-10 text-gray-400">
                    Experience travel like never before with curated stays, seamless planning and unforgettable moments.
                </p>

                <Link
                    href="/contact"
                    className="px-10 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300"
                >
                    Get a Custom Quote
                </Link>
            </section>

        </main>
    );
}
