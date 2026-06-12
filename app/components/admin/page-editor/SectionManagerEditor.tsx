// app/admin/(protected)/pages/edit/[id]/page-editor/SectionEditor.tsx
"use client"

import { useState } from "react"

/* ============================================================
   TYPES
============================================================ */
type SectionKey = "whyChoose" | "planningProcess" | "testimonials"

interface SectionMeta {
    key: SectionKey
    label: string
    icon: React.ReactNode
    color: string        // tailwind bg color for icon box
    iconColor: string    // stroke color
}

interface Props {
    form: any
    setForm: (fn: (prev: any) => any) => void
    pageTitle: string
    pageId: string | number | undefined
}

/* ============================================================
   SECTION REGISTRY — ek jagah se saare sections manage
============================================================ */
const SECTIONS: SectionMeta[] = [
    {
        key: "whyChoose",
        label: "Why Choose Us",
        color: "bg-violet-50",
        iconColor: "#7c3aed",
        icon: (
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#7c3aed" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        key: "planningProcess",
        label: "Planning Process",
        color: "bg-orange-50",
        iconColor: "#ea580c",
        icon: (
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#ea580c" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
    },
    {
        key: "testimonials",
        label: "Testimonials",
        color: "bg-yellow-50",
        iconColor: "#d97706",
        icon: (
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#d97706" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
    },
]

/* ============================================================
   AI FETCH BUTTON
============================================================ */
function AIFetchButton({
    sectionKey,
    pageTitle,
    pageId,
    onGenerated,
}: {
    sectionKey: SectionKey
    pageTitle: string
    pageId: string | number | undefined
    onGenerated: (data: any) => void
}) {
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState<string | null>(null)

    async function handleFetch() {
        if (!pageTitle || !pageId) {
            setErr("pageId / pageTitle missing")
            return
        }
        setLoading(true)
        setErr(null)

        try {
            const res = await fetch("/api/admin/sections/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pageId: String(pageId), sectionKey, pageTitle }),
            })
            const json = await res.json()
            if (!json.success) throw new Error(json.message)
            onGenerated(json.data)
        } catch (e: any) {
            setErr(e.message ?? "Failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-end gap-1">
            <button
                type="button"
                onClick={handleFetch}
                disabled={loading}
                title="Fetch AI"
                className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-violet-50 border border-violet-200
                           text-violet-700 text-xs font-medium hover:bg-violet-100 transition disabled:opacity-50"
            >
                {loading ? (
                    <>
                        <svg className="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Generating...
                    </>
                ) : (
                    <>
                        {/* Sparkle icon */}
                        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                        Fetch AI
                    </>
                )}
            </button>
            {err && <p className="text-xs text-red-500 max-w-[180px] text-right">{err}</p>}
        </div>
    )
}

/* ============================================================
   ICONS
============================================================ */
const EditIcon = () => (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
    </svg>
)
const DeleteIcon = () => (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 7.5h12M9.75 7.5v9m4.5-9v9M5.25 7.5l.675 10.125A2.25 2.25 0 008.169 19.5h7.662a2.25 2.25 0 002.244-1.875L18.75 7.5" />
    </svg>
)
const AddIcon = () => (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
)
const CheckIcon = () => (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
)
const CloseIcon = () => (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
)

/* ============================================================
   SHARED: INLINE TEXT INPUT
============================================================ */
function InlineInput({
    label, value, onChange, placeholder, textarea = false,
}: {
    label: string; value: string; onChange: (v: string) => void
    placeholder?: string; textarea?: boolean
}) {
    const base = "w-full rounded-xl border text-black border-gray-200 px-3 text-sm outline-none focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10 transition"
    return (
        <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</label>
            {textarea ? (
                <textarea
                    rows={2}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`${base} py-2 resize-none`}
                />
            ) : (
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`${base} h-10`}
                />
            )}
        </div>
    )
}

/* ============================================================
   SECTION CARD WRAPPER
============================================================ */
function SectionCard({
    meta, exists, children, onClear, pageTitle, pageId, onGenerated,
}: {
    meta: SectionMeta
    exists: boolean
    children: React.ReactNode
    onClear: () => void
    pageTitle: string
    pageId: string | number | undefined
    onGenerated: (data: any) => void
}) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            {/* ── Card Header ── */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-lg ${meta.color} flex items-center justify-center`}>
                        {meta.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700">{meta.label}</h3>

                    {/* Exists badge */}
                    {exists ? (
                        <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 border border-green-100 rounded-full px-2 py-0.5">
                            <CheckIcon /> Saved
                        </span>
                    ) : (
                        <span className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-2 py-0.5">
                            Empty
                        </span>
                    )}
                </div>

                {/* Right side actions */}
                <div className="flex items-center gap-2">

                    {/* AI Fetch — top right */}
                    <AIFetchButton
                        sectionKey={meta.key}
                        pageTitle={pageTitle}
                        pageId={pageId}
                        onGenerated={onGenerated}
                    />

                    {/* Clear */}
                    {exists && (
                        <button
                            type="button"
                            onClick={onClear}
                            title="Clear section"
                            className="flex items-center gap-1 h-8 px-3 rounded-lg text-red-500 bg-red-50 border border-red-100
                                       text-xs font-medium hover:bg-red-100 transition"
                        >
                            <DeleteIcon /> Clear
                        </button>
                    )}

                    {/* Collapse toggle */}
                    <button
                        type="button"
                        onClick={() => setCollapsed(c => !c)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200
                                   text-gray-400 hover:bg-gray-50 transition"
                    >
                        <svg
                            width="14" height="14" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth={2}
                            className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* ── Card Body ── */}
            {!collapsed && (
                <div className="p-6 space-y-5">
                    {children}
                </div>
            )}
        </div>
    )
}

/* ============================================================
   WHY CHOOSE US EDITOR
============================================================ */
function WhyChooseEditor({
    form, setForm, pageTitle, pageId,
}: Props) {

    const data = form.content?.whyChoose || { heading: "", subheading: "", points: [] }
    const exists = !!(data.heading || data.points?.length)

    // Editing state: index of point being edited, or null
    const [editingIdx, setEditingIdx] = useState<number | null>(null)
    const [draft, setDraft] = useState({ icon: "", title: "", desc: "" })

    function updateRoot(key: string, val: string) {
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, whyChoose: { ...data, [key]: val } },
        }))
    }

    function startEdit(i: number) {
        setEditingIdx(i)
        setDraft({ ...data.points[i] })
    }

    function saveEdit() {
        if (editingIdx === null) return
        const pts = [...data.points]
        pts[editingIdx] = { ...draft }
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, whyChoose: { ...data, points: pts } },
        }))
        setEditingIdx(null)
    }

    function deletePoint(i: number) {
        const pts = data.points.filter((_: any, idx: number) => idx !== i)
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, whyChoose: { ...data, points: pts } },
        }))
    }

    function addPoint() {
        const pts = [...data.points, { icon: "✅", title: "", desc: "" }]
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, whyChoose: { ...data, points: pts } },
        }))
        setEditingIdx(pts.length - 1)
        setDraft({ icon: "✅", title: "", desc: "" })
    }

    function onGenerated(generated: any) {
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, whyChoose: generated },
        }))
    }

    function onClear() {
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, whyChoose: { heading: "", subheading: "", points: [] } },
        }))
    }

    const meta = SECTIONS.find(s => s.key === "whyChoose")!

    return (
        <SectionCard
            meta={meta} exists={exists}
            onClear={onClear} pageTitle={pageTitle}
            pageId={pageId} onGenerated={onGenerated}
        >
            {/* Heading + Subheading */}
            <InlineInput label="Heading" value={data.heading} onChange={v => updateRoot("heading", v)} placeholder="Why Choose Us for..." />
            <InlineInput label="Subheading" value={data.subheading} onChange={v => updateRoot("subheading", v)} placeholder="One line tagline" />

            {/* Points List */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Points ({data.points.length})
                    </label>
                    <button
                        type="button" onClick={addPoint}
                        className="flex items-center gap-1 h-7 px-3 rounded-lg border border-dashed border-gray-300
                                   text-xs text-gray-500 hover:border-[#c9a96e] hover:text-[#c9a96e] transition"
                    >
                        <AddIcon /> Add
                    </button>
                </div>

                {data.points.map((pt: any, i: number) => (
                    <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">

                        {/* Collapsed row */}
                        {editingIdx !== i ? (
                            <div className="flex items-center gap-3 px-4 py-3">
                                <span className="text-xl w-7 text-center flex-shrink-0">{pt.icon}</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-700 truncate">{pt.title || <span className="text-gray-400 italic">Untitled</span>}</p>
                                    <p className="text-xs text-gray-400 truncate">{pt.desc}</p>
                                </div>
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <button type="button" onClick={() => startEdit(i)}
                                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#c9a96e] hover:border-[#c9a96e] transition">
                                        <EditIcon />
                                    </button>
                                    <button type="button" onClick={() => deletePoint(i)}
                                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 transition">
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Expanded edit form */
                            <div className="p-4 space-y-3 bg-white border-t border-[#c9a96e]/20">
                                <div className="grid grid-cols-12 gap-2">
                                    <input
                                        value={draft.icon}
                                        onChange={e => setDraft(d => ({ ...d, icon: e.target.value }))}
                                        placeholder="✅"
                                        className="col-span-2 h-10 text-black rounded-xl border border-gray-200 px-2 text-center text-xl outline-none focus:border-[#c9a96e]"
                                    />
                                    <input
                                        value={draft.title}
                                        onChange={e => setDraft(d => ({ ...d, title: e.target.value }))}
                                        placeholder="Point title"
                                        className="col-span-10 h-10 text-black rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-[#c9a96e]"
                                    />
                                </div>
                                <textarea
                                    rows={6}
                                    value={draft.desc}
                                    onChange={e => setDraft(d => ({ ...d, desc: e.target.value }))}
                                    placeholder="Short description..."
                                    className="w-full text-black rounded-xl border text-gray-800 border-gray-200 px-3 py-2 text-sm outline-none resize-none focus:border-[#c9a96e]"
                                />
                                <div className="flex gap-2 justify-end">
                                    <button type="button" onClick={() => setEditingIdx(null)}
                                        className="flex items-center gap-1 h-8 px-3 rounded-lg border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 transition">
                                        <CloseIcon /> Cancel
                                    </button>
                                    <button type="button" onClick={saveEdit}
                                        className="flex items-center gap-1 h-8 px-3 rounded-lg bg-[#1a1a1a] text-[#c9a96e] text-xs font-medium hover:bg-[#c9a96e] hover:text-[#1a1a1a] transition">
                                        <CheckIcon /> Save
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </SectionCard>
    )
}

/* ============================================================
   PLANNING PROCESS EDITOR
============================================================ */
function PlanningProcessEditor({
    form, setForm, pageTitle, pageId,
}: Props) {

    const data = form.content?.planningProcess || { heading: "", subheading: "", steps: [] }
    const exists = !!(data.heading || data.steps?.length)

    const [editingIdx, setEditingIdx] = useState<number | null>(null)
    const [draft, setDraft] = useState({ step: 1, title: "", desc: "" })

    function updateRoot(key: string, val: string) {
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, planningProcess: { ...data, [key]: val } },
        }))
    }

    function startEdit(i: number) {
        setEditingIdx(i)
        setDraft({ ...data.steps[i] })
    }

    function saveEdit() {
        if (editingIdx === null) return
        const steps = [...data.steps]
        steps[editingIdx] = { ...draft }
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, planningProcess: { ...data, steps } },
        }))
        setEditingIdx(null)
    }

    function deleteStep(i: number) {
        const steps = data.steps
            .filter((_: any, idx: number) => idx !== i)
            .map((s: any, idx: number) => ({ ...s, step: idx + 1 }))
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, planningProcess: { ...data, steps } },
        }))
    }

    function addStep() {
        const steps = [...data.steps, { step: data.steps.length + 1, title: "", desc: "" }]
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, planningProcess: { ...data, steps } },
        }))
        setEditingIdx(steps.length - 1)
        setDraft({ step: steps.length, title: "", desc: "" })
    }

    function onGenerated(generated: any) {
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, planningProcess: generated },
        }))
    }

    function onClear() {
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, planningProcess: { heading: "", subheading: "", steps: [] } },
        }))
    }

    const meta = SECTIONS.find(s => s.key === "planningProcess")!

    return (
        <SectionCard
            meta={meta} exists={exists}
            onClear={onClear} pageTitle={pageTitle}
            pageId={pageId} onGenerated={onGenerated}
        >
            <InlineInput label="Heading" value={data.heading} onChange={v => updateRoot("heading", v)} placeholder="Our Planning Process" />
            <InlineInput label="Subheading" value={data.subheading} onChange={v => updateRoot("subheading", v)} placeholder="From planning to execution" />

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Steps ({data.steps.length})
                    </label>
                    <button
                        type="button" onClick={addStep}
                        className="flex items-center gap-1 h-7 px-3 rounded-lg border border-dashed border-gray-300
                                   text-xs text-gray-500 hover:border-[#c9a96e] hover:text-[#c9a96e] transition"
                    >
                        <AddIcon /> Add
                    </button>
                </div>

                {data.steps.map((st: any, i: number) => (
                    <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                        {editingIdx !== i ? (
                            <div className="flex items-center gap-3 px-4 py-3">
                                <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 text-xs font-bold
                                                 flex items-center justify-center flex-shrink-0">
                                    {st.step}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-700 truncate">{st.title || <span className="text-gray-400 italic">Untitled</span>}</p>
                                    <p className="text-xs text-gray-400 truncate">{st.desc}</p>
                                </div>
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <button type="button" onClick={() => startEdit(i)}
                                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#c9a96e] hover:border-[#c9a96e] transition">
                                        <EditIcon />
                                    </button>
                                    <button type="button" onClick={() => deleteStep(i)}
                                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 transition">
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-4 space-y-3 bg-white border-t border-[#c9a96e]/20">
                                <input
                                    value={draft.title}
                                    onChange={e => setDraft(d => ({ ...d, title: e.target.value }))}
                                    placeholder="Step title"
                                    className="w-full h-10 rounded-xl text-black border border-gray-200 px-3 text-sm outline-none focus:border-[#c9a96e]"
                                />
                                <textarea
                                    rows={10}
                                    value={draft.desc}
                                    onChange={e => setDraft(d => ({ ...d, desc: e.target.value }))}
                                    placeholder="What happens in this step..."
                                    className="w-full text-black rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none resize-none focus:border-[#c9a96e]"
                                />
                                <div className="flex gap-2 justify-end">
                                    <button type="button" onClick={() => setEditingIdx(null)}
                                        className="flex items-center gap-1 h-8 px-3 rounded-lg border border-gray-200 text-xs text-gray-800 hover:bg-gray-50 transition">
                                        <CloseIcon /> Cancel
                                    </button>
                                    <button type="button" onClick={saveEdit}
                                        className="flex items-center gap-1 h-8 px-3 rounded-lg bg-[#1a1a1a] text-[#c9a96e] text-xs font-medium hover:bg-[#c9a96e] hover:text-[#1a1a1a] transition">
                                        <CheckIcon /> Save
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </SectionCard>
    )
}

/* ============================================================
   TESTIMONIALS EDITOR
============================================================ */
function TestimonialsEditor({
    form, setForm, pageTitle, pageId,
}: Props) {

    const data = form.content?.testimonials || { heading: "", subheading: "", items: [] }
    const exists = !!(data.heading || data.items?.length)

    const [editingIdx, setEditingIdx] = useState<number | null>(null)
    const [draft, setDraft] = useState({ name: "", role: "", rating: 5, review: "", avatar: "" })

    function updateRoot(key: string, val: string) {
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, testimonials: { ...data, [key]: val } },
        }))
    }

    function startEdit(i: number) {
        setEditingIdx(i)
        setDraft({ ...data.items[i] })
    }

    function saveEdit() {
        if (editingIdx === null) return
        const items = [...data.items]
        items[editingIdx] = { ...draft }
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, testimonials: { ...data, items } },
        }))
        setEditingIdx(null)
    }

    function deleteItem(i: number) {
        const items = data.items.filter((_: any, idx: number) => idx !== i)
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, testimonials: { ...data, items } },
        }))
    }

    function addItem() {
        const newItem = { name: "", role: "", rating: 5, review: "", avatar: "" }
        const items = [...data.items, newItem]
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, testimonials: { ...data, items } },
        }))
        setEditingIdx(items.length - 1)
        setDraft(newItem)
    }

    function onGenerated(generated: any) {
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, testimonials: generated },
        }))
    }

    function onClear() {
        setForm((p: any) => ({
            ...p,
            content: { ...p.content, testimonials: { heading: "", subheading: "", items: [] } },
        }))
    }

    const meta = SECTIONS.find(s => s.key === "testimonials")!

    return (
        <SectionCard
            meta={meta} exists={exists}
            onClear={onClear} pageTitle={pageTitle}
            pageId={pageId} onGenerated={onGenerated}
        >
            <InlineInput label="Heading" value={data.heading} onChange={v => updateRoot("heading", v)} placeholder="What Our Clients Say" />
            <InlineInput label="Subheading" value={data.subheading} onChange={v => updateRoot("subheading", v)} placeholder="Real stories from real clients" />

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Reviews ({data.items.length})
                    </label>
                    <button
                        type="button" onClick={addItem}
                        className="flex items-center gap-1 h-7 px-3 rounded-lg border border-dashed border-gray-300
                                   text-xs text-gray-500 hover:border-[#c9a96e] hover:text-[#c9a96e] transition"
                    >
                        <AddIcon /> Add
                    </button>
                </div>

                {data.items.map((it: any, i: number) => (
                    <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                        {editingIdx !== i ? (
                            <div className="flex items-center gap-3 px-4 py-3">
                                {/* Avatar initials */}
                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 text-xs font-bold
                                                flex items-center justify-center flex-shrink-0">
                                    {it.name ? it.name.split(" ").map((n: string) => n[0]).slice(0, 2).join("").toUpperCase() : "?"}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-700 truncate">{it.name || <span className="text-gray-400 italic">No name</span>}</p>
                                    <p className="text-xs text-gray-400 truncate">{it.role} — {"★".repeat(it.rating ?? 5)}</p>
                                </div>
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <button type="button" onClick={() => startEdit(i)}
                                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#c9a96e] hover:border-[#c9a96e] transition">
                                        <EditIcon />
                                    </button>
                                    <button type="button" onClick={() => deleteItem(i)}
                                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 transition">
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-4 space-y-3 bg-white border-t border-[#c9a96e]/20">
                                <div className="grid grid-cols-2 gap-2">
                                    <input value={draft.name} onChange={e => setDraft(d => ({ ...d, name: e.target.value }))}
                                        placeholder="Client name"
                                        className="h-10 rounded-xl text-black border border-gray-200 px-3 text-sm outline-none focus:border-[#c9a96e]" />
                                    <input value={draft.role} onChange={e => setDraft(d => ({ ...d, role: e.target.value }))}
                                        placeholder="Role / Company"
                                        className="h-10 rounded-xl text-black border border-gray-200 px-3 text-sm outline-none focus:border-[#c9a96e]" />
                                </div>

                                {/* Star rating picker */}
                                <div className="flex items-center gap-1">
                                    <span className="text-xs text-gray-400 mr-1">Rating:</span>
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <button key={s} type="button" onClick={() => setDraft(d => ({ ...d, rating: s }))}>
                                            <svg width="18" height="18" viewBox="0 0 24 24"
                                                fill={s <= draft.rating ? "#f59e0b" : "none"}
                                                stroke="#f59e0b" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>

                                <textarea rows={7} value={draft.review}
                                    onChange={e => setDraft(d => ({ ...d, review: e.target.value }))}
                                    placeholder="Client review text..."
                                    className="w-full rounded-xl border text-black border-gray-200 px-3 py-2 text-sm outline-none resize-none focus:border-[#c9a96e]" />

                                <div className="flex gap-2 justify-end">
                                    <button type="button" onClick={() => setEditingIdx(null)}
                                        className="flex items-center gap-1 h-8 px-3 rounded-lg border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 transition">
                                        <CloseIcon /> Cancel
                                    </button>
                                    <button type="button" onClick={saveEdit}
                                        className="flex items-center gap-1 h-8 px-3 rounded-lg bg-[#1a1a1a] text-[#c9a96e] text-xs font-medium hover:bg-[#c9a96e] hover:text-[#1a1a1a] transition">
                                        <CheckIcon /> Save
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </SectionCard>
    )
}

/* ============================================================
   MAIN EXPORT — SectionEditor
   EditPageForm mein ek hi component import karo
============================================================ */
export default function SectionEditor({ form, setForm, pageTitle, pageId }: Props) {
    return (
        <div className="space-y-6">
            <WhyChooseEditor form={form} setForm={setForm} pageTitle={pageTitle} pageId={pageId} />
            <PlanningProcessEditor form={form} setForm={setForm} pageTitle={pageTitle} pageId={pageId} />
            <TestimonialsEditor form={form} setForm={setForm} pageTitle={pageTitle} pageId={pageId} />
        </div>
    )
}