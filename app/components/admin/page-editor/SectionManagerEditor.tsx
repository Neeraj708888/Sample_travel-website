"use client"

// app/admin/(protected)/pages/edit/[id]/sections/SectionsManager.tsx

import { useState } from "react"
import { useRouter } from "next/navigation"

// ─── Types ───────────────────────────────────────────────────────────────────
type SectionKey = "whyChoose" | "planningProcess" | "testimonials"

interface WhyChoosePoint { icon: string; title: string; desc: string }
interface PlanningStep { step: number; title: string; desc: string }
interface TestimonialItem { name: string; role: string; rating: number; review: string; avatar: string }

interface WhyChooseData { heading: string; subheading: string; points: WhyChoosePoint[] }
interface PlanningData { heading: string; subheading: string; steps: PlanningStep[] }
interface TestimonialsData { heading: string; subheading: string; items: TestimonialItem[] }

// ─── Sidebar config ───────────────────────────────────────────────────────────
const SIDEBAR = [
    { key: "whyChoose" as SectionKey, label: "Why Choose Us", icon: "⭐", count: (d: any) => d?.points?.length ?? 0 },
    { key: "planningProcess" as SectionKey, label: "Planning Process", icon: "📋", count: (d: any) => d?.steps?.length ?? 0 },
    { key: "testimonials" as SectionKey, label: "Testimonials", icon: "💬", count: (d: any) => d?.items?.length ?? 0 },
]

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
    pageId: string
    pageTitle: string
    pageSlug: string
    initialContent: Record<string, any>
}

// ─── Toast helper ─────────────────────────────────────────────────────────────
function useToast() {
    const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null)
    function show(type: "success" | "error", msg: string) {
        setToast({ type, msg })
        setTimeout(() => setToast(null), 3500)
    }
    return { toast, show }
}

// ─────────────────────────────────────────────────────────────────────────────
export default function SectionsManager({ pageId, pageTitle, pageSlug, initialContent }: Props) {
    const router = useRouter()
    const [active, setActive] = useState<SectionKey>("whyChoose")
    const [content, setContent] = useState<Record<string, any>>(initialContent)
    const [globalGenerating, setGlobalGenerating] = useState(false)
    const { toast, show } = useToast()

    // ── Top-right: Fetch ALL sections with AI ────────────────────────────────
    async function handleFetchAll() {
        setGlobalGenerating(true)
        show("success", "Teeno sections AI se generate ho rahe hain...")
        try {
            const keys: SectionKey[] = ["whyChoose", "planningProcess", "testimonials"]
            const results = await Promise.allSettled(
                keys.map((key) =>
                    fetch("/api/admin/sections/generate", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ pageId, sectionKey: key, pageTitle }),
                    }).then((r) => r.json())
                )
            )
            const updated = { ...content }
            results.forEach((r, i) => {
                if (r.status === "fulfilled" && r.value.success) {
                    updated[keys[i]] = r.value.data
                }
            })
            setContent(updated)
            show("success", "Teeno sections generate aur save ho gaye! ✅")
        } catch (err: any) {
            show("error", err.message ?? "Generation fail ho gayi")
        } finally {
            setGlobalGenerating(false)
        }
    }

    // ── Per-section AI generate ───────────────────────────────────────────────
    async function handleGenerate(key: SectionKey) {
        try {
            const res = await fetch("/api/admin/sections/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pageId, sectionKey: key, pageTitle }),
            })
            const json = await res.json()
            if (!json.success) throw new Error(json.message)
            setContent((prev) => ({ ...prev, [key]: json.data }))
            show("success", `${SIDEBAR.find(s => s.key === key)?.label} generate ho gaya!`)
        } catch (err: any) {
            show("error", err.message)
        }
    }

    // ── Per-section save (manual edits) ──────────────────────────────────────
    async function handleSave(key: SectionKey, data: any) {
        try {
            const res = await fetch(`/api/admin/sections/save`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pageId, sectionKey: key, data }),
            })
            const json = await res.json()
            if (!json.success) throw new Error(json.message)
            setContent((prev) => ({ ...prev, [key]: data }))
            show("success", "Changes save ho gaye!")
        } catch (err: any) {
            show("error", err.message)
        }
    }

    // ── Per-section delete ────────────────────────────────────────────────────
    async function handleDelete(key: SectionKey) {
        if (!confirm(`"${SIDEBAR.find(s => s.key === key)?.label}" delete karna chahte ho?`)) return
        try {
            const res = await fetch(`/api/admin/sections?pageId=${pageId}&sectionKey=${key}`, {
                method: "DELETE",
            })
            const json = await res.json()
            if (!json.success) throw new Error(json.message)
            setContent((prev) => {
                const next = { ...prev }
                delete next[key]
                return next
            })
            show("success", "Section delete ho gaya!")
        } catch (err: any) {
            show("error", err.message)
        }
    }

    const activeData = content[active] ?? null

    return (
        <div className="w-full max-w-6xl mx-auto">

            {/* ── Header ── */}
            <div className="flex items-center gap-3 mb-6">
                <button
                    onClick={() => router.back()}
                    className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition shrink-0"
                >
                    <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-semibold text-gray-800 truncate">Page Sections</h2>
                    <p className="text-xs text-gray-400 font-mono truncate">{pageSlug}</p>
                </div>

                {/* ✅ Top-right AI Fetch All button */}
                <button
                    onClick={handleFetchAll}
                    disabled={globalGenerating}
                    className="flex items-center gap-2 h-10 px-5 rounded-xl bg-[#1a1a1a] text-[#c9a96e] text-sm font-semibold hover:bg-[#c9a96e] hover:text-[#1a1a1a] transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                    {globalGenerating ? (
                        <>
                            <svg className="animate-spin" width="14" height="14" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Generating...
                        </>
                    ) : (
                        <>
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                            </svg>
                            Fetch AI (All)
                        </>
                    )}
                </button>
            </div>

            {/* ── Global Toast ── */}
            {toast && (
                <div className={`mb-5 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${toast.type === "success"
                        ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}>
                    {toast.type === "success"
                        ? <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        : <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 8v4m0 4h.01" /></svg>
                    }
                    {toast.msg}
                </div>
            )}

            <div className="flex gap-5 items-start">

                {/* ── LEFT Sidebar ── */}
                <aside className="w-52 shrink-0 sticky top-6">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 pt-2 pb-1">Sections</p>

                        {SIDEBAR.map((item) => {
                            const isActive = active === item.key
                            const data = content[item.key]
                            const exists = !!data
                            const count = item.count(data)

                            return (
                                <button
                                    key={item.key}
                                    onClick={() => setActive(item.key)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${isActive
                                            ? "bg-[#1a1a1a] text-white shadow-sm"
                                            : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    <span className="text-base shrink-0">{item.icon}</span>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-xs font-semibold truncate ${isActive ? "text-white" : "text-gray-700"}`}>
                                            {item.label}
                                        </p>
                                        <p className="text-[10px] text-gray-400">
                                            {exists ? `${count} items` : "Not generated"}
                                        </p>
                                    </div>
                                    <span className={`w-2 h-2 rounded-full shrink-0 ${exists ? "bg-emerald-400" : isActive ? "bg-gray-500" : "bg-gray-200"}`} />
                                </button>
                            )
                        })}

                        {/* Legend */}
                        <div className="px-3 pt-3 pb-2 border-t border-gray-100 mt-1 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                <span className="text-[10px] text-gray-400">Generated</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-200" />
                                <span className="text-[10px] text-gray-400">Not generated</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* ── RIGHT Panel ── */}
                <main className="flex-1 min-w-0">
                    {active === "whyChoose" && (
                        <WhyChoosePanel
                            data={content.whyChoose ?? null}
                            onGenerate={() => handleGenerate("whyChoose")}
                            onSave={(d) => handleSave("whyChoose", d)}
                            onDelete={() => handleDelete("whyChoose")}
                        />
                    )}
                    {active === "planningProcess" && (
                        <PlanningPanel
                            data={content.planningProcess ?? null}
                            onGenerate={() => handleGenerate("planningProcess")}
                            onSave={(d) => handleSave("planningProcess", d)}
                            onDelete={() => handleDelete("planningProcess")}
                        />
                    )}
                    {active === "testimonials" && (
                        <TestimonialsPanel
                            data={content.testimonials ?? null}
                            onGenerate={() => handleGenerate("testimonials")}
                            onSave={(d) => handleSave("testimonials", d)}
                            onDelete={() => handleDelete("testimonials")}
                        />
                    )}
                </main>
            </div>
        </div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION SHELL — reusable header with CRUD icons + AI generate
// ─────────────────────────────────────────────────────────────────────────────
function SectionShell({
    label, icon, exists, itemCount,
    onGenerate, onDelete,
    children,
}: {
    label: string; icon: string; exists: boolean; itemCount: number
    onGenerate: () => Promise<void>
    onDelete: () => void
    children: React.ReactNode
}) {
    const [generating, setGenerating] = useState(false)

    async function doGenerate() {
        setGenerating(true)
        await onGenerate()
        setGenerating(false)
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/60">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center text-lg">{icon}</div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">{label}</h3>
                        <p className={`text-xs mt-0.5 flex items-center gap-1.5 ${exists ? "text-emerald-600" : "text-gray-400"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full inline-block ${exists ? "bg-emerald-500" : "bg-gray-300"}`} />
                            {exists ? `${itemCount} items saved` : "Not generated yet"}
                        </p>
                    </div>
                </div>

                {/* CRUD icons */}
                <div className="flex items-center gap-2">
                    {/* AI Generate / Re-generate */}
                    <button
                        onClick={doGenerate}
                        disabled={generating}
                        title={exists ? "Re-generate with AI" : "Generate with AI"}
                        className="flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-[#1a1a1a] text-[#c9a96e] text-xs font-semibold hover:bg-[#c9a96e] hover:text-[#1a1a1a] transition-all disabled:opacity-50"
                    >
                        {generating ? (
                            <svg className="animate-spin" width="13" height="13" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                        ) : (
                            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                            </svg>
                        )}
                        {generating ? "Generating..." : exists ? "Re-generate" : "AI Generate"}
                    </button>

                    {/* Delete — only if exists */}
                    {exists && (
                        <button
                            onClick={onDelete}
                            title="Delete section"
                            className="w-9 h-9 flex items-center justify-center rounded-xl border border-red-100 text-red-400 hover:bg-red-50 transition"
                        >
                            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 7.5h12M9.75 7.5v9m4.5-9v9M5.25 7.5l.675 10.125A2.25 2.25 0 008.169 19.5h7.662a2.25 2.25 0 002.244-1.875L18.75 7.5M9 4.5h6a1.5 1.5 0 011.5 1.5v1.5h-9V6A1.5 1.5 0 019 4.5z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">{children}</div>
        </div>
    )
}

// ─── Empty State ─────────────────────────────────────────────────────────────
function EmptyState({ icon, label }: { icon: string; label: string }) {
    return (
        <div className="flex flex-col items-center justify-center py-14 rounded-xl border-2 border-dashed border-gray-200 text-center">
            <span className="text-4xl mb-3">{icon}</span>
            <p className="text-sm font-medium text-gray-500">Koi data nahi hai</p>
            <p className="text-xs text-gray-400 mt-1">"AI Generate" button click karo upar</p>
        </div>
    )
}

// ─── Save Button ─────────────────────────────────────────────────────────────
function SaveBtn({ onSave }: { onSave: () => Promise<void> }) {
    const [saving, setSaving] = useState(false)
    const [saved, setSaved] = useState(false)

    async function handle() {
        setSaving(true)
        await onSave()
        setSaving(false)
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
    }

    return (
        <div className="flex justify-end pt-2">
            <button
                onClick={handle}
                disabled={saving}
                className={`h-9 px-5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 disabled:opacity-50 ${saved ? "bg-emerald-500 text-white" : "bg-[#1a1a1a] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1a1a1a]"
                    }`}
            >
                {saving ? (
                    <><svg className="animate-spin" width="13" height="13" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Saving...</>
                ) : saved ? (
                    <><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Saved!</>
                ) : "Save Changes"}
            </button>
        </div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// PANEL 1 — WHY CHOOSE US
// ─────────────────────────────────────────────────────────────────────────────
function WhyChoosePanel({ data, onGenerate, onSave, onDelete }: {
    data: WhyChooseData | null
    onGenerate: () => Promise<void>
    onSave: (d: WhyChooseData) => Promise<void>
    onDelete: () => void
}) {
    const [local, setLocal] = useState<WhyChooseData>(data ?? { heading: "", subheading: "", points: [] })

    // Sync when AI generates new data
    useState(() => { if (data) setLocal(data) })

    const updatePoint = (i: number, field: keyof WhyChoosePoint, val: string) =>
        setLocal((p) => { const pts = [...p.points]; pts[i] = { ...pts[i], [field]: val }; return { ...p, points: pts } })

    return (
        <SectionShell
            label="Why Choose Us" icon="⭐"
            exists={!!data} itemCount={data?.points?.length ?? 0}
            onGenerate={async () => { await onGenerate(); if (data) setLocal(data) }}
            onDelete={onDelete}
        >
            {!data ? <EmptyState icon="⭐" label="Why Choose Us" /> : (
                <div className="space-y-5">
                    {/* Heading row */}
                    <div className="grid grid-cols-2 gap-3">
                        {(["heading", "subheading"] as const).map((f) => (
                            <div key={f} className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{f}</label>
                                <input type="text" value={local[f]}
                                    onChange={(e) => setLocal((p) => ({ ...p, [f]: e.target.value }))}
                                    className="h-10 rounded-xl border border-gray-200 px-3 text-sm text-gray-700 outline-none focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10 transition" />
                            </div>
                        ))}
                    </div>

                    {/* Points grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {local.points.map((pt, i) => (
                            <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-3.5 space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Point {i + 1}</span>
                                    <button onClick={() => setLocal((p) => ({ ...p, points: p.points.filter((_, x) => x !== i) }))}
                                        className="text-gray-300 hover:text-red-400 transition">
                                        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex gap-2">
                                    <input type="text" value={pt.icon} onChange={(e) => updatePoint(i, "icon", e.target.value)}
                                        placeholder="🎯" className="w-11 h-9 rounded-lg border border-gray-200 text-center text-lg outline-none focus:border-[#c9a96e] bg-white transition" />
                                    <input type="text" value={pt.title} onChange={(e) => updatePoint(i, "title", e.target.value)}
                                        placeholder="Title..." className="flex-1 h-9 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-[#c9a96e] bg-white transition" />
                                </div>
                                <textarea rows={2} value={pt.desc} onChange={(e) => updatePoint(i, "desc", e.target.value)}
                                    placeholder="Description..." className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none resize-none focus:border-[#c9a96e] bg-white transition" />
                            </div>
                        ))}
                        {/* Add point */}
                        <button onClick={() => setLocal((p) => ({ ...p, points: [...p.points, { icon: "", title: "", desc: "" }] }))}
                            className="rounded-xl border-2 border-dashed border-gray-200 min-h-[120px] flex flex-col items-center justify-center gap-1.5 text-gray-400 hover:border-[#c9a96e] hover:text-[#c9a96e] transition text-xs font-medium">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Point
                        </button>
                    </div>
                    <SaveBtn onSave={() => onSave(local)} />
                </div>
            )}
        </SectionShell>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// PANEL 2 — PLANNING PROCESS
// ─────────────────────────────────────────────────────────────────────────────
function PlanningPanel({ data, onGenerate, onSave, onDelete }: {
    data: PlanningData | null
    onGenerate: () => Promise<void>
    onSave: (d: PlanningData) => Promise<void>
    onDelete: () => void
}) {
    const [local, setLocal] = useState<PlanningData>(data ?? { heading: "", subheading: "", steps: [] })

    const updateStep = (i: number, field: keyof PlanningStep, val: string) =>
        setLocal((p) => { const steps = [...p.steps]; steps[i] = { ...steps[i], [field]: val }; return { ...p, steps } })

    return (
        <SectionShell
            label="Planning Process" icon="📋"
            exists={!!data} itemCount={data?.steps?.length ?? 0}
            onGenerate={onGenerate} onDelete={onDelete}
        >
            {!data ? <EmptyState icon="📋" label="Planning Process" /> : (
                <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-3">
                        {(["heading", "subheading"] as const).map((f) => (
                            <div key={f} className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{f}</label>
                                <input type="text" value={local[f]}
                                    onChange={(e) => setLocal((p) => ({ ...p, [f]: e.target.value }))}
                                    className="h-10 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10 transition" />
                            </div>
                        ))}
                    </div>

                    {/* Steps timeline */}
                    <div className="space-y-2.5">
                        {local.steps.map((step, i) => (
                            <div key={i} className="flex gap-3 items-start">
                                <div className="flex flex-col items-center gap-1 shrink-0">
                                    <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] text-[#c9a96e] text-xs font-bold flex items-center justify-center">{step.step}</div>
                                    {i < local.steps.length - 1 && <div className="w-px h-5 bg-gray-200" />}
                                </div>
                                <div className="flex-1 rounded-xl border border-gray-100 bg-gray-50 p-3 space-y-2">
                                    <div className="flex gap-2 items-center">
                                        <input type="text" value={step.title} onChange={(e) => updateStep(i, "title", e.target.value)}
                                            placeholder="Step title..."
                                            className="flex-1 h-8 rounded-lg border border-gray-200 px-3 text-sm font-semibold outline-none focus:border-[#c9a96e] bg-white transition" />
                                        <button onClick={() => setLocal((p) => ({
                                            ...p, steps: p.steps.filter((_, x) => x !== i).map((s, x) => ({ ...s, step: x + 1 }))
                                        }))} className="text-gray-300 hover:text-red-400 transition shrink-0">
                                            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <input type="text" value={step.desc} onChange={(e) => updateStep(i, "desc", e.target.value)}
                                        placeholder="Description..."
                                        className="w-full h-8 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-[#c9a96e] bg-white transition" />
                                </div>
                            </div>
                        ))}
                        <button onClick={() => setLocal((p) => ({ ...p, steps: [...p.steps, { step: p.steps.length + 1, title: "", desc: "" }] }))}
                            className="w-full rounded-xl border-2 border-dashed border-gray-200 py-2.5 flex items-center justify-center gap-2 text-gray-400 hover:border-[#c9a96e] hover:text-[#c9a96e] transition text-xs font-medium">
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Step
                        </button>
                    </div>
                    <SaveBtn onSave={() => onSave(local)} />
                </div>
            )}
        </SectionShell>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// PANEL 3 — TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
function TestimonialsPanel({ data, onGenerate, onSave, onDelete }: {
    data: TestimonialsData | null
    onGenerate: () => Promise<void>
    onSave: (d: TestimonialsData) => Promise<void>
    onDelete: () => void
}) {
    const [local, setLocal] = useState<TestimonialsData>(data ?? { heading: "", subheading: "", items: [] })

    const updateItem = (i: number, field: keyof TestimonialItem, val: string | number) =>
        setLocal((p) => { const items = [...p.items]; items[i] = { ...items[i], [field]: val }; return { ...p, items } })

    return (
        <SectionShell
            label="Testimonials" icon="💬"
            exists={!!data} itemCount={data?.items?.length ?? 0}
            onGenerate={onGenerate} onDelete={onDelete}
        >
            {!data ? <EmptyState icon="💬" label="Testimonials" /> : (
                <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-3">
                        {(["heading", "subheading"] as const).map((f) => (
                            <div key={f} className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{f}</label>
                                <input type="text" value={local[f]}
                                    onChange={(e) => setLocal((p) => ({ ...p, [f]: e.target.value }))}
                                    className="h-10 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10 transition" />
                            </div>
                        ))}
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {local.items.map((item, i) => (
                            <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-3.5 space-y-2.5">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                        <div className="w-8 h-8 rounded-full bg-[#c9a96e]/20 text-[#c9a96e] font-bold text-sm flex items-center justify-center shrink-0">
                                            {item.name ? item.name[0].toUpperCase() : "?"}
                                        </div>
                                        <div className="flex-1 min-w-0 space-y-0.5">
                                            <input type="text" value={item.name} onChange={(e) => updateItem(i, "name", e.target.value)}
                                                placeholder="Client name" className="w-full h-7 rounded-lg border border-transparent px-2 text-sm font-semibold text-gray-700 outline-none focus:border-gray-200 bg-transparent transition" />
                                            <input type="text" value={item.role} onChange={(e) => updateItem(i, "role", e.target.value)}
                                                placeholder="Role, Company" className="w-full h-6 rounded-lg border border-transparent px-2 text-xs text-gray-400 outline-none focus:border-gray-200 bg-transparent transition" />
                                        </div>
                                    </div>
                                    <button onClick={() => setLocal((p) => ({ ...p, items: p.items.filter((_, x) => x !== i) }))}
                                        className="text-gray-300 hover:text-red-400 transition shrink-0">
                                        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <button key={s} type="button" onClick={() => updateItem(i, "rating", s)}
                                            className={`text-lg transition ${s <= item.rating ? "text-[#c9a96e]" : "text-gray-200"}`}>★</button>
                                    ))}
                                </div>

                                <textarea rows={3} value={item.review} onChange={(e) => updateItem(i, "review", e.target.value)}
                                    placeholder="Client review..." className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none resize-none focus:border-[#c9a96e] bg-white transition" />
                            </div>
                        ))}

                        {/* Add */}
                        <button onClick={() => setLocal((p) => ({ ...p, items: [...p.items, { name: "", role: "", rating: 5, review: "", avatar: "" }] }))}
                            className="rounded-xl border-2 border-dashed border-gray-200 min-h-[180px] flex flex-col items-center justify-center gap-1.5 text-gray-400 hover:border-[#c9a96e] hover:text-[#c9a96e] transition text-xs font-medium">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Testimonial
                        </button>
                    </div>
                    <SaveBtn onSave={() => onSave(local)} />
                </div>
            )}
        </SectionShell>
    )
}