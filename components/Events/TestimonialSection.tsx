export function TestimonialsSection() {
    return (
        <section className="py-16 text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-14 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    What Our Clients Say
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Ritika Sharma",
                            review: "Absolutely flawless wedding planning! Every detail was handled professionally.",
                        },
                        {
                            name: "Amit Verma",
                            review: "Our corporate event was executed beyond expectations. Highly recommended.",
                        },
                        {
                            name: "Neha Kapoor",
                            review: "Premium service and attention to detail made our anniversary unforgettable.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:border-yellow-500 transition"
                        >
                            <p className="text-gray-300 mb-6">“{item.review}”</p>
                            <h4 className="text-yellow-400 font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-500">5★ Rating</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}