import Script from "next/script";

export function FAQSection() {
    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What services do you offer?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We offer luxury wedding planning, corporate event management, private celebrations, and destination event planning across India.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide destination wedding services?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we specialize in premium destination weddings in Jaipur, Goa, Udaipur, and international locations.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How much does event planning cost?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Costs depend on scale, venue, and customization. Contact us for a personalized quotation.",
                                },
                            },
                        ],
                    }),
                }}
            />

            <section className="py-20 bg-black text-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-8">
                        {[
                            {
                                q: "What services do you offer?",
                                a: "We offer luxury wedding planning, corporate events, and private celebrations across India.",
                            },
                            {
                                q: "Do you provide destination weddings?",
                                a: "Yes, we plan premium destination weddings in Jaipur, Goa, Udaipur & more.",
                            },
                            {
                                q: "How much does event planning cost?",
                                a: "Pricing depends on scale & customization. Contact us for detailed quote.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-md">
                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                    {item.q}
                                </h3>
                                <p className="text-gray-400">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}