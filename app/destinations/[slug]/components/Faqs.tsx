"use client"

export default function Highlights({ destination }: any) {
    if (!destination.highlights?.length) return null

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
                    Why Visit {destination.name}?
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destination.highlights.map((item: string, i: number) => (
                        <div
                            key={i}
                            className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-500 border border-gray-100"
                        >
                            <div className="w-14 h-14 flex items-center justify-center bg-orange-100 text-orange-600 rounded-2xl mb-6 text-xl font-bold">
                                {i + 1}
                            </div>

                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}