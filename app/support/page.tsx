"use client";

import Script from "next/script";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function SupportPage() {
    return (
        <>
            {/* SEO Schema */}
            <Script
                id="support-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        name: "Customer Support - Ananta Group",
                        url: "https://www.anantagroup.co.in/support",
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+91-9876543210",
                            contactType: "customer support",
                            availableLanguage: ["English", "Hindi"],
                        },
                    }),
                }}
            />

            <div className="bg-gradient-to-b from-gray-950 to-black text-white">

                {/* Hero Section */}
                <section className="py-24 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-20">
                        Premium Travel Support
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We're here 24/7 to assist you with bookings, cancellations,
                        travel queries, and personalized trip planning.
                    </p>
                </section>

                {/* Quick Contact Options */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Call */}
                        <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:border-yellow-500 transition backdrop-blur-xl">
                            <Phone className="mb-6 text-yellow-400" size={32} />
                            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                            <p className="text-gray-400 mb-4">Talk to our travel experts instantly.</p>
                            <a href="tel:+919876543210" className="text-yellow-400 hover:underline">
                                +91 98765 43210
                            </a>
                        </div>

                        {/* Email */}
                        <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:border-yellow-500 transition backdrop-blur-xl">
                            <Mail className="mb-6 text-yellow-400" size={32} />
                            <h3 className="text-xl font-semibold mb-3">Email Support</h3>
                            <p className="text-gray-400 mb-4">Send us your queries anytime.</p>
                            <a href="mailto:support@anantagroup.co.in" className="text-yellow-400 hover:underline">
                                support@anantagroup.co.in
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:border-yellow-500 transition backdrop-blur-xl">
                            <MessageCircle className="mb-6 text-yellow-400" size={32} />
                            <h3 className="text-xl font-semibold mb-3">WhatsApp</h3>
                            <p className="text-gray-400 mb-4">Quick booking & instant chat support.</p>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                className="text-yellow-400 hover:underline"
                            >
                                Chat Now
                            </a>
                        </div>

                    </div>
                </section>

                {/* Contact Form */}
                <section className="max-w-4xl mx-auto px-6 py-20">
                    <div className="bg-white/5 p-12 rounded-2xl border border-white/10 backdrop-blur-xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Send Us a Message
                        </h2>

                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 rounded-lg bg-black border border-white/10 focus:border-yellow-500 outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 rounded-lg bg-black border border-white/10 focus:border-yellow-500 outline-none"
                            />

                            <textarea
                                rows={5}
                                placeholder="How can we help you?"
                                className="w-full p-4 rounded-lg bg-black border border-white/10 focus:border-yellow-500 outline-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="font-semibold text-lg mb-2">
                                How do I modify my booking?
                            </h3>
                            <p className="text-gray-400">
                                You can modify your booking by contacting our support team via call or email.
                            </p>
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="font-semibold text-lg mb-2">
                                Do you offer refunds?
                            </h3>
                            <p className="text-gray-400">
                                Refunds depend on the package and cancellation policy.
                            </p>
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="font-semibold text-lg mb-2">
                                Is customer support available 24/7?
                            </h3>
                            <p className="text-gray-400">
                                Yes, our travel assistance team is available 24/7.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
