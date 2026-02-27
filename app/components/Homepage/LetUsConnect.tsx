import Script from "next/script";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
    title: "Let's Connect With Us | Luxury Travel Planners",
    description:
        "Connect with our luxury travel planners for customized tours, destination weddings, corporate retreats and unforgettable travel experiences.",
};

export default function ConnectPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Your Travel Company",
        url: "https://yourdomain.com/connect",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9999999999",
            contactType: "customer service",
            areaServed: "IN",
        },
    };

    return (
        <>
            {/* HERO SECTION */}
            <section className="relative py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]"></div>

                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                        Let's Connect With Us
                    </h1>

                    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                        Planning your next luxury escape? Destination wedding? Corporate
                        retreat? Our expert travel planners are ready to craft unforgettable experiences.
                    </p>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                    {/* CONTACT INFO */}
                    <div className="space-y-8">
                        <div className="bg-black p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500">
                            <div className="flex items-center gap-4">
                                <Phone className="text-orange-500" />
                                <div>
                                    <h3 className="font-semibold text-lg">Call Us</h3>
                                    <p className="text-gray-600">+91 99999 99999</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-950 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500">
                            <div className="flex items-center gap-4">
                                <Mail className="text-orange-500" />
                                <div>
                                    <h3 className="font-semibold text-lg">Email Us</h3>
                                    <p className="text-gray-600">info@yourdomain.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-pink-950 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500">
                            <div className="flex items-center gap-4">
                                <MapPin className="text-orange-500" />
                                <div>
                                    <h3 className="font-semibold text-lg">Visit Office</h3>
                                    <p className="text-gray-600">New Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="bg-red-900 p-10 rounded-3xl shadow-2xl">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">
                            Send Us a Message
                        </h2>

                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            />

                            <textarea
                                rows={4}
                                placeholder="Tell us about your travel plan..."
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:scale-105 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* WHATSAPP CTA */}
            <section className="py-16 bg-black text-white text-center">
                <h2 className="text-3xl font-bold">
                    Prefer Instant Chat?
                </h2>
                <p className="mt-3 text-gray-400">
                    Connect with our travel experts instantly on WhatsApp.
                </p>

                <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    className="inline-block mt-6 px-8 py-4 bg-green-500 rounded-full text-white font-semibold hover:scale-110 transition duration-300"
                >
                    Chat on WhatsApp
                </a>
            </section>

            <Script
                id="connect-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    );
}