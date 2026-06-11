// app/components/Events/PlanningProcess.tsx

interface Step {
    step: number
    title: string
    desc: string
}

interface ProcessData {
    heading: string
    subheading: string
    steps: Step[]
}

export default function PlanningProcess({ data }: { data: ProcessData }) {
    if (!data?.steps?.length) return null

    return (
        <section className="relative bg-[#111] py-20 px-4 overflow-hidden">

            {/* Vertical center line — desktop only */}
            <div className="absolute left-1/2 top-[160px] bottom-16 w-px bg-gradient-to-b
                            from-[#c9a96e]/30 via-[#c9a96e]/10 to-transparent
                            hidden lg:block -translate-x-1/2" />

            <div className="relative max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                        Our Process
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

                {/* Steps */}
                <div className="space-y-8 lg:space-y-0">
                    {data.steps.map((step, i) => {
                        const isEven = i % 2 === 0

                        return (
                            <div
                                key={i}
                                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6
                                            ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                                            lg:mb-12`}
                            >
                                {/* Content Box */}
                                <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                                    <div
                                        className={`inline-block bg-white/[0.03] border border-white/[0.08]
                                                    rounded-2xl p-6 hover:border-[#c9a96e]/30
                                                    hover:bg-white/[0.06] transition-all duration-300
                                                    max-w-sm ${isEven ? "lg:ml-auto" : "lg:mr-auto"}`}
                                    >
                                        <h3 className="text-white font-semibold text-base mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Step Badge */}
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border-2 border-[#c9a96e]
                                                    flex flex-col items-center justify-center shadow-lg
                                                    shadow-[#c9a96e]/10">
                                        <span className="text-[10px] text-[#c9a96e] font-medium uppercase tracking-widest leading-none">
                                            Step
                                        </span>
                                        <span className="text-[#c9a96e] font-bold text-lg leading-none">
                                            {step.step}
                                        </span>
                                    </div>
                                </div>

                                {/* Empty right side for zigzag balance */}
                                <div className="flex-1 hidden lg:block" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}