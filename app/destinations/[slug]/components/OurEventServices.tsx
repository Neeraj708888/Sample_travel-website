export default function OurEventServices() {
    const services = [
        "Corporate Events",
        "Wedding Planning",
        "Religious Tours",
        "Luxury Private Tours",
        "Adventure Trips",
        "Custom Group Packages",
    ]

    return (
        <section className="py-20 bg-gray-50 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-14">
                    Our Event & Travel Services
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition"
                        >
                            <h3 className="font-semibold text-lg">{service}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}