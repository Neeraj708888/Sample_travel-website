// app/components/Events/WhyChooseUs.tsx

interface Point {
    icon: string
    title: string
    desc: string
}

interface WhyChooseData {
    heading: string
    subheading: string
    points: Point[]
}

export default function WhyChoose({ data }: { data: WhyChooseData }) {
    if (!data?.points?.length) return null

    return (
        <section className="relative bg-[#0f0f0f] py-20 px-4 overflow-hidden">

            {/* Background dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, #c9a96e 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Gold top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                        Why Choose Us
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                        {data.heading}
                    </h2>
                    {data.subheading && (
                        <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">
                            {data.subheading}
                        </p>
                    )}
                </div>

                {/* Points Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.points.map((point, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/[0.03] border border-white/[0.07]
                                       rounded-2xl p-6 hover:border-[#c9a96e]/40
                                       hover:bg-white/[0.06] transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20
                                            flex items-center justify-center text-2xl mb-4
                                            group-hover:bg-[#c9a96e]/20 transition-all duration-300">
                                {point.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-semibold text-base mb-2">
                                {point.title}
                            </h3>

                            {/* Desc */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {point.desc}
                            </p>

                            {/* Hover bottom accent */}
                            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r
                                            from-transparent via-[#c9a96e]/0 to-transparent
                                            group-hover:via-[#c9a96e]/40 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Gold bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
        </section>
    )
}