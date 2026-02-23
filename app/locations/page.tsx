import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Location | Ananta Group - Luxury Travel & Event Company",
    description:
        "Visit Ananta Group – a premium luxury travel and event management company. Discover our office location, contact details, and personalized consultation services.",
    keywords: [
        "Ananta Group Location",
        "Luxury Travel Company Near Me",
        "Event Management Company Office",
        "Destination Wedding Planners Location",
        "Premium Travel Agency Address",
    ],
};

export default function LocationPage() {
    return (
        <main className="text-gray-900">

            {/* ===== Hero Section ===== */}
            <section className="relative h-[65vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/75"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                        Visit Our Office
                    </h1>
                    <p className="text-lg md:text-xl opacity-90">
                        Experience luxury consultation and personalized service at Ananta Group.
                    </p>
                </div>
            </section>

            {/* ===== Location Details Section ===== */}
            <section className="bg-gray-50 max-w-6xl mx-auto px-6 py-28 mt-18 border-amber-200 border-l-4 grid md:grid-cols-2 gap-16 items-center">

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our Headquarters
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        Ananta Group is proudly located in the heart of the city, offering personalized luxury travel consultations and premium event planning services.
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <p><strong>Address:</strong> Plot No - 2, Street No - 7, 1st Floor, Street No - 7, A-Block, West Sant Nagar Burari, New Delhi, India</p>
                        <p><strong>Phone:</strong> +91 98765 43210</p>
                        <p><strong>Email:</strong> info@anantagroup.com</p>
                        <p><strong>Working Hours:</strong> Monday – Saturday | 10:00 AM – 7:00 PM</p>
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                        width="100%"
                        height="400"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[400px]"
                    ></iframe>
                </div>

            </section>

            {/* ===== Why Visit Us Section ===== */}
            <section className="py-28 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Why Visit Ananta Group?
                </h2>

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 mt-12">

                    <div className="p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Personalized Consultation</h3>
                        <p className="text-gray-300">
                            One-on-one luxury travel and event planning sessions tailored to your vision.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Premium Service Experience</h3>
                        <p className="text-gray-300">
                            Experience elegance, professionalism, and attention to detail from our experts.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Strategic City Location</h3>
                        <p className="text-gray-300">
                            Conveniently accessible from major business hubs and residential areas.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}