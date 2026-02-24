export default function Testimonials() {
    const reviews = [
        {
            name: "Rahul Sharma",
            text: "Amazing travel experience. Everything was perfectly managed!",
        },
        {
            name: "Priya Verma",
            text: "Best tour operators. Highly recommend their services.",
        },
        {
            name: "Amit Singh",
            text: "Very professional team and affordable pricing.",
        },
    ]

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-14">
                    What Our Travelers Say
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <p className="text-gray-600 mb-6">“{review.text}”</p>
                            <h4 className="font-semibold">{review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}