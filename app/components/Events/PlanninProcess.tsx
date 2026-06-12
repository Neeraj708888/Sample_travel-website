// app/components/Events/PlanningProcess.tsx
"use client"

import { useEffect, useState } from "react"

/* ============================================================
   TYPES
============================================================ */
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

interface Props {
    data?: ProcessData | null
    pageId?: string
    pageTitle?: string
}

/* ============================================================
   API CALL HOOK
============================================================ */
function usePlanningData(
    initialData: ProcessData | null | undefined,
    pageId?: string,
    pageTitle?: string
) {
    const [data, setData] = useState<ProcessData | null>(initialData ?? null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (initialData?.steps?.length) return
        if (!pageId || !pageTitle) return

        async function fetchAndGenerate() {
            setLoading(true)
            setError(null)

            try {
                const res = await fetch("/api/admin/sections/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        pageId,
                        sectionKey: "planningProcess",
                        pageTitle,
                    }),
                })

                const json = await res.json()
                if (!json.success) throw new Error(json.message)

                setData(json.data)
            } catch (err: any) {
                setError(err.message ?? "Generation failed")
            } finally {
                setLoading(false)
            }
        }

        fetchAndGenerate()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return { data, loading, error }
}

/* ============================================================
   LOADING SKELETON
============================================================ */
function PlanningProcessSkeleton() {
    return (
        <section className="relative bg-[#111] py-20 px-4 overflow-hidden">
            <div className="relative max-w-5xl mx-auto">
                <div className="text-center mb-16 space-y-3">
                    <div className="h-3 w-20 bg-white/5 rounded-full mx-auto animate-pulse" />
                    <div className="h-8 w-80 bg-white/5 rounded-xl mx-auto animate-pulse" />
                    <div className="h-4 w-52 bg-white/5 rounded-lg mx-auto animate-pulse" />
                </div>
                <div className="space-y-8">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-6">
                            <div className="flex-1">
                                <div
                                    className={`bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 
                                                max-w-sm space-y-2 animate-pulse
                                                ${i % 2 === 0 ? "ml-auto" : "mr-auto"}`}
                                >
                                    <div className="h-4 w-3/4 bg-white/5 rounded" />
                                    <div className="h-3 w-full bg-white/5 rounded" />
                                </div>
                            </div>
                            <div className="w-14 h-14 rounded-full bg-white/5 flex-shrink-0 animate-pulse" />
                            <div className="flex-1 hidden lg:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ============================================================
   MAIN COMPONENT — UI UNTOUCHED
============================================================ */
export default function PlanningProcess({ data: initialData, pageId, pageTitle }: Props) {

    const { data, loading, error } = usePlanningData(initialData, pageId, pageTitle)

    if (loading) return <PlanningProcessSkeleton />
    if (error || !data?.steps?.length) return null

    // ── Original UI — bilkul touch nahi kiya ──────────────────
    return (
        <section className="relative py-16 overflow-hidden">

            {/* Heading */}
            <div className="text-center mb-12 bg-[#0a0a0a] w-full px-5 py-6">
                <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                    Our Process
                </p>
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-16 h-[2px] bg-yellow-500"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-16 h-[2px] bg-yellow-500"></div>
                </div>

                {/* ✅ DB se title */}
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    {data.heading}
                </h2>

                {/* ✅ DB se shortDesc */}
                {data.subheading && (
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        {data.subheading}
                    </p>
                )}

            </div>

            {/* Vertical center line — desktop only */}
            <div className="absolute left-1/2 top-[160px] bottom-16 w-px bg-gradient-to-b
                            from-[#c9a96e]/30 via-[#c9a96e]/10 to-transparent
                            hidden lg:block -translate-x-1/2" />

            <div className="relative max-w-5xl mx-auto">
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
                                        className={`inline-block bg-gray-600 border border-white/[0.08]
                                                    rounded-2xl p-6 hover:border-[#c9a96e]/30
                                                    hover:bg-[#c9a96e] transition-all duration-300
                                                    max-w-sm ${isEven ? "lg:ml-auto" : "lg:mr-auto"}`}
                                    >
                                        <h3 className="text-white font-semibold text-base mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-300 hover:text-gray-800 text-sm leading-relaxed hover:px-2">
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