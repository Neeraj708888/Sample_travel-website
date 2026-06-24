// app/components/Events/Testimonials.tsx
"use client"

import { useEffect, useState } from "react"

/* ============================================================
   TYPES
============================================================ */
interface TestimonialItem {
    name: string
    role: string
    rating: number
    review: string
    avatar?: string
}

interface TestimonialsData {
    heading: string
    subheading: string
    items: TestimonialItem[]
}

interface Props {
    data?: TestimonialsData | null
    pageId?: string
    pageTitle?: string
}

/* ============================================================
   API CALL HOOK
============================================================ */
function useTestimonialsData(
    initialData: TestimonialsData | null | undefined,
    pageId?: string,
    pageTitle?: string
) {
    const [data, setData] = useState<TestimonialsData | null>(initialData ?? null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (initialData?.items?.length) return
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
                        sectionKey: "testimonials",
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
function TestimonialsSkeleton() {
    return (
        <section className="relative bg-[#0a0a0a] py-20 px-4 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
            <div className="relative max-w-6xl mx-auto">
                <div className="text-center mb-14 space-y-3">
                    <div className="h-3 w-24 bg-white/5 rounded-full mx-auto animate-pulse" />
                    <div className="h-8 w-72 bg-white/5 rounded-xl mx-auto animate-pulse" />
                    <div className="h-4 w-48 bg-white/5 rounded-lg mx-auto animate-pulse" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[...Array(2)].map((_, col) => (
                        <div key={col} className={`space-y-5 ${col === 1 ? "md:mt-8" : ""}`}>
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 space-y-4 animate-pulse"
                                >
                                    <div className="h-3 w-full bg-white/5 rounded" />
                                    <div className="h-3 w-5/6 bg-white/5 rounded" />
                                    <div className="h-3 w-4/6 bg-white/5 rounded" />
                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="w-11 h-11 rounded-full bg-white/5 flex-shrink-0" />
                                        <div className="space-y-1.5">
                                            <div className="h-3 w-24 bg-white/5 rounded" />
                                            <div className="h-2.5 w-16 bg-white/5 rounded" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
        </section>
    )
}

/* ============================================================
   STAR RATING — original
============================================================ */
function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={star <= rating ? "#c9a96e" : "none"}
                    stroke="#c9a96e"
                    strokeWidth={1.5}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0
                           00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0
                           00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976
                           -2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538
                           -1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57
                           -.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            ))}
        </div>
    )
}

/* ============================================================
   AVATAR FALLBACK — original
============================================================ */
function AvatarFallback({ name }: { name: string }) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()

    const colors = [
        "bg-violet-500", "bg-rose-500", "bg-amber-500",
        "bg-teal-500", "bg-sky-500", "bg-orange-500",
    ]
    const colorIndex = name.charCodeAt(0) % colors.length

    return (
        <div className={`w-11 h-11 rounded-full ${colors[colorIndex]}
                        flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
            {initials}
        </div>
    )
}

/* ============================================================
   TESTIMONIAL CARD — original
============================================================ */
function TestimonialCard({ item }: { item: TestimonialItem }) {
    return (
        <div className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6
                        hover:border-[#c9a96e]/30 hover:bg-white/[0.05] transition-all duration-300">

            {/* Quote mark */}
            <div className="text-[#c9a96e]/20 text-6xl font-serif leading-none mb-2 select-none">
                "
            </div>

            {/* Stars */}
            <StarRating rating={item.rating ?? 5} />

            {/* Review */}
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {item.review}
            </p>

            {/* Divider */}
            <div className="my-4 h-px bg-white/[0.06]" />

            {/* Author */}
            <div className="flex items-center gap-3">
                {item.avatar ? (
                    <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-11 h-11 rounded-full object-cover flex-shrink-0 border border-[#c9a96e]/20"
                    />
                ) : (
                    <AvatarFallback name={item.name} />
                )}
                <div>
                    <p className="text-white text-sm font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
            </div>
        </div>
    )
}

/* ============================================================
   MAIN COMPONENT — UI UNTOUCHED
============================================================ */
export default function Testimonials({ data: initialData, pageId, pageTitle }: Props) {

    const { data, loading, error } = useTestimonialsData(initialData, pageId, pageTitle)

    if (loading) return <TestimonialsSkeleton />
    if (error || !data?.items?.length) return null

    // ── Original UI — bilkul touch nahi kiya ──────────────────
    const col1 = data.items.filter((_, i) => i % 2 === 0)
    const col2 = data.items.filter((_, i) => i % 2 !== 0)

    return (
        <section className="relative bg-[#0a0a0a] py-16 px-4 overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
                            bg-[#c9a96e]/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Gold top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                        Client Stories
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

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-5">
                        {col1.map((item, i) => (
                            <TestimonialCard key={i} item={item} />
                        ))}
                    </div>
                    <div className="space-y-5 md:mt-8">
                        {col2.map((item, i) => (
                            <TestimonialCard key={i} item={item} />
                        ))}
                    </div>
                </div>

                {/* Overall rating bar */}
                <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4
                                border border-white/[0.07] rounded-2xl p-6 bg-white/[0.02]">
                    <div className="text-center sm:text-left">
                        <p className="text-4xl font-bold text-white">
                            {(
                                data.items.reduce((sum, t) => sum + (t.rating || 5), 0) /
                                data.items.length
                            ).toFixed(1)}
                            <span className="text-[#c9a96e] text-2xl">/5</span>
                        </p>
                        <p className="text-gray-400 text-sm mt-1">Average Rating</p>
                    </div>

                    <div className="hidden sm:block w-px h-12 bg-white/10" />

                    <div className="text-center sm:text-left">
                        <p className="text-4xl font-bold text-white">
                            {data.items.length}
                            <span className="text-[#c9a96e] text-2xl">+</span>
                        </p>
                        <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
                    </div>

                    <div className="hidden sm:block w-px h-12 bg-white/10" />

                    <div className="flex items-center gap-1.5">
                        <StarRating rating={5} />
                        <span className="text-gray-400 text-sm ml-1">Verified Reviews</span>
                    </div>
                </div>
            </div>

            {/* Gold bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
        </section>
    )
}