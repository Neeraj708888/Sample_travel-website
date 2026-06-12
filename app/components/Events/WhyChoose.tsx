// app/components/Events/WhyChooseUs.tsx
"use client"

import { useEffect, useState } from "react"

/* ============================================================
   TYPES
============================================================ */
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

interface Props {
    data?: WhyChooseData | null   // page.tsx se aayega — null hone par API call hogi
    pageId?: string               // DB page ID — API call ke liye zaroori
    pageTitle?: string            // AI generation ke liye title
}

/* ============================================================
   API CALL HOOK
============================================================ */
function useWhyChooseData(
    initialData: WhyChooseData | null | undefined,
    pageId?: string,
    pageTitle?: string
) {
    const [data, setData] = useState<WhyChooseData | null>(initialData ?? null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // Data already hai — API call mat karo
        if (initialData?.points?.length) return
        // pageId nahi hai — generate nahi kar sakte
        if (!pageId || !pageTitle) return

        async function fetchAndGenerate() {
            setLoading(true)
            setError(null)

            try {
                // Step 1: Pehle check karo DB mein hai ya nahi
                const statusRes = await fetch(
                    `/api/admin/sections/status?pageId=${pageId}`
                )
                const statusJson = await statusRes.json()

                if (statusJson?.sections?.whyChoose?.exists) {
                    // DB mein hai — page data refresh karo (re-fetch)
                    // Already page.tsx se null aaya matlab DB mein bhi nahi tha
                    // Toh generate karo
                }

                // Step 2: Generate + Save
                const res = await fetch("/api/admin/sections/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        pageId,
                        sectionKey: "whyChoose",
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
   LOADING SKELETON — UI jaisi hi dark theme
============================================================ */
function WhyChooseSkeleton() {
    return (
        <section className="relative bg-[#0f0f0f] py-20 px-4 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
            <div className="relative max-w-6xl mx-auto">
                <div className="text-center mb-14 space-y-3">
                    <div className="h-3 w-24 bg-white/5 rounded-full mx-auto animate-pulse" />
                    <div className="h-8 w-96 bg-white/5 rounded-xl mx-auto animate-pulse" />
                    <div className="h-4 w-64 bg-white/5 rounded-lg mx-auto animate-pulse" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 space-y-3 animate-pulse"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5" />
                            <div className="h-4 w-3/4 bg-white/5 rounded" />
                            <div className="h-3 w-full bg-white/5 rounded" />
                            <div className="h-3 w-5/6 bg-white/5 rounded" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
        </section>
    )
}

/* ============================================================
   MAIN COMPONENT — UI UNTOUCHED
============================================================ */
export default function WhyChooseUs({ data: initialData, pageId, pageTitle }: Props) {

    const { data, loading, error } = useWhyChooseData(initialData, pageId, pageTitle)

    // Loading state
    if (loading) return <WhyChooseSkeleton />

    // Error state — silent fail, section skip ho jaega
    if (error || !data?.points?.length) return null

    // ── Original UI — bilkul touch nahi kiya ──────────────────
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

            <div className="relative max-w-7xl mx-auto">


                {/* HEADER */}
                <div className="text-center mb-12">
                    <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                        Why Choose Us
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