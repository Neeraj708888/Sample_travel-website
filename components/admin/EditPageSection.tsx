// app/admin/(protected)/pages/edit/[id]/EditPageForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DynamicCardsEditor from "./page-editor/DynamicCardEditor";
import HeroSectionEditor from "./page-editor/HeroSectionEditor";
import TextInput from "./page-editor/TextInput";
import TextareaField from "./page-editor/TextAreaField";
import SectionEditor from "./page-editor/SectionManagerEditor";
import { PageType } from "@/types/page.types";

// interface PageData {
//     id: string;
//     slug: string;
//     meta_title: string;
//     meta_description: string;
//     meta_keywords: string;
//     faqs: any;
//     content: any;
// }

interface FieldError {
    slug?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    faqs?: string;
    content?: string;
}

// ─── JSON Textarea ─────────────────────────────────────────────────────────
function JsonTextarea({
    label,
    value,
    onChange,
    error,
    hint,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    error?: string;
    hint?: string;
}) {
    const [focused, setFocused] = useState(false);

    // Pretty format on blur
    function handleBlur() {
        setFocused(false);
        try {
            const parsed = JSON.parse(value);
            onChange(JSON.stringify(parsed, null, 2));
        } catch {
            // invalid JSON — as is rakhte hain
        }
    }


    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {label}
            </label>
            {hint && <p className="text-xs text-gray-400 -mt-1">{hint}</p>}
            <div className={`relative rounded-xl border transition-all ${error
                ? "border-red-300 ring-2 ring-red-100"
                : focused
                    ? "border-[#c9a96e] ring-2 ring-[#c9a96e]/10"
                    : "border-gray-200"
                }`}>
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={handleBlur}
                    rows={10}
                    spellCheck={false}
                    className="w-full rounded-xl bg-[#1a1a1a] px-4 py-3 font-mono text-xs text-green-400 leading-relaxed outline-none resize-y"
                    placeholder={`{\n  "key": "value"\n}`}
                />
            </div>
            {error && <p className="text-xs text-red-500 flex items-center gap-1">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 8v4m0 4h.01" /></svg>
                {error}
            </p>}
        </div>
    );
}

// ─── Main Form ──────────────────────────────────────────────────────────────
export default function EditPageSection({ page }: { page: PageType }) {
    const router = useRouter();

    const [form, setForm] = useState({
        slug: page.slug ?? "",
        meta_title: page.meta_title ?? "",
        meta_description: page.meta_description ?? "",
        meta_keywords: page.meta_keywords ?? "",
        // faqs: page.faqs ? JSON.stringify(page.faqs, null, 2) : "[]",
        faqs: Array.isArray(page.faqs) ? page.faqs : [],
        // content: page.content ? JSON.stringify(page.content, null, 2) : "{}",
        content: page.content || {
            hero: {
                h1: "",
                h2: "",
                image: "",
                shortDesc: "",
            },
            eventType: {
                title: "",
                shortDesc: "",
                cards: [],
            },
            eventSolution: {
                title: "",
                shortDesc: "",
                cards: [],
            },
            whyChoose: { heading: "", subheading: "", points: [] },       // 🆕
            planningProcess: { heading: "", subheading: "", steps: [] },  // 🆕
        },
    });

    const content =
        typeof page.content === "string"
            ? JSON.parse(page.content)
            : page.content ?? {}

    const [errors, setErrors] = useState<FieldError>({});
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);

    // ── Validation ────────────────────────────────────────────────────────────
    function validate(): boolean {
        const e: FieldError = {};

        if (!form.slug.trim()) e.slug = "Slug required hai";
        if (!form.meta_title.trim()) e.meta_title = "Meta title required hai";
        if (form.meta_description.length > 160)
            e.meta_description = "Meta description 160 chars se kam honi chahiye";

        setErrors(e);
        return Object.keys(e).length === 0;
    }

    // ── Submit ────────────────────────────────────────────────────────────────
    async function handleSave() {
        if (!validate()) return;

        setSaving(true);
        setToast(null);

        try {
            const res = await fetch(`/api/admin/pages/${page.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    slug: form.slug.trim(),
                    meta_title: form.meta_title.trim(),
                    meta_description: form.meta_description.trim(),
                    meta_keywords: form.meta_keywords.trim(),
                    // faqs: JSON.parse(form.faqs),
                    faqs: form.faqs,
                    // content: JSON.parse(form.content),
                    content: form.content,
                }),
            });

            const data = await res.json();

            if (!data.success) throw new Error(data.message);

            setToast({ type: "success", msg: "Page successfully save ho gaya!" });
            setTimeout(() => router.push("/admin/pages"), 1200);
        } catch (err: any) {
            setToast({ type: "error", msg: err.message ?? "Save karne mein error aayi" });
        } finally {
            setSaving(false);
        }
    }

    const set = (key: keyof typeof form) => (v: string) => {
        setForm((f) => ({ ...f, [key]: v }));
        setErrors((e) => ({ ...e, [key]: undefined }));
    };

    return (
        <div className="w-full max-w-4xl mx-auto">

            {/* ── Header ── */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => router.back()}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100 transition"
                >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Edit Page</h2>
                    <p className="text-sm text-gray-400 mt-0.5 font-mono">{page.slug}</p>
                </div>
            </div>

            {/* ── Toast ── */}
            {toast && (
                <div className={`mb-6 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${toast.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : "bg-red-50 border border-red-200 text-red-700"
                    }`}>
                    {toast.type === "success"
                        ? <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        : <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 8v4m0 4h.01" /></svg>
                    }
                    {toast.msg}
                </div>
            )}

            <div className="space-y-6">

                {/* ── Card 1: SEO Fields ── */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
                    <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
                        <div className="w-7 h-7 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center">
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#c9a96e" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">SEO & Meta</h3>
                    </div>

                    {/* ID — readonly */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">ID</label>
                        <div className="h-11 flex items-center px-4 rounded-xl bg-gray-50 border border-gray-100">
                            <span className="text-sm font-mono text-gray-400">{page.id}</span>
                        </div>
                    </div>

                    <TextInput
                        label="Slug"
                        value={form.slug}
                        onChange={set("slug")}
                        error={errors.slug}
                        placeholder="events/artist-mngmt/vis-artist"
                        hint="URL path — e.g. events/artist-mngmt"
                    />

                    <TextInput
                        label="Meta Title"
                        value={form.meta_title}
                        onChange={set("meta_title")}
                        error={errors.meta_title}
                        placeholder="Top Event Management Company in Delhi"
                    />

                    <TextareaField
                        label="Meta Description"
                        value={form.meta_description}
                        onChange={set("meta_description")}
                        error={errors.meta_description}
                        placeholder="At Ananta Hospitality, we specialize in..."
                        hint="Google search result mein dikhega — 160 chars recommended"
                        max={160}
                        rows={3}
                    />

                    <TextInput
                        label="Meta Keywords"
                        value={form.meta_keywords}
                        onChange={set("meta_keywords")}
                        error={errors.meta_keywords}
                        placeholder="event management, delhi events, artist booking"
                        hint="Comma separated keywords"
                    />
                </div>

                {/* ── Card 2: FAQs JSON ── */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
                    <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">FAQs</h3>
                    </div>
                </div>

                <div className="space-y-4">

                    {form.faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-gray-200 p-4 bg-gray-800 space-y-4"
                        >

                            {/* Top */}
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-700">
                                    FAQ #{index + 1}
                                </h4>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setForm((prev) => ({
                                            ...prev,
                                            faqs: prev.faqs.filter((_, i) => i !== index),
                                        }));
                                    }}
                                    className="text-red-500 hover:text-red-700 transition"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 7.5h12M9.75 7.5v9m4.5-9v9M5.25 7.5l.675 10.125A2.25 2.25 0 008.169 19.5h7.662a2.25 2.25 0 002.244-1.875L18.75 7.5"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Question */}
                            <div className="space-y-1">
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Question
                                </label>

                                <input
                                    type="text"
                                    value={faq.question}
                                    onChange={(e) => {
                                        const updated = [...form.faqs];
                                        updated[index].question = e.target.value;

                                        setForm((prev) => ({
                                            ...prev,
                                            faqs: updated,
                                        }));
                                    }}
                                    placeholder="Enter question..."
                                    className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10"
                                />
                            </div>

                            {/* Answer */}
                            <div className="space-y-1">
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Answer
                                </label>

                                <textarea
                                    rows={4}
                                    value={faq.answer}
                                    onChange={(e) => {
                                        const updated = [...form.faqs];
                                        updated[index].answer = e.target.value;

                                        setForm((prev) => ({
                                            ...prev,
                                            faqs: updated,
                                        }));
                                    }}
                                    placeholder="Enter answer..."
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none resize-none focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Add FAQ */}
                    <button
                        type="button"
                        onClick={() => {
                            setForm((prev) => ({
                                ...prev,
                                faqs: [
                                    ...prev.faqs,
                                    {
                                        question: "",
                                        answer: "",
                                    },
                                ],
                            }));
                        }}
                        className="h-11 px-5 rounded-xl border border-dashed border-gray-300 text-sm text-gray-600 hover:border-[#c9a96e] hover:text-[#c9a96e] transition"
                    >
                        + Add FAQ
                    </button>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                    {/* LEFT SIDE */}
                    <div className="xl:col-span-4">

                        <div className="sticky top-6 space-y-6 max-h-[calc(100vh-40px)] overflow-y-auto pr-1 custom-scrollbar">

                            <HeroSectionEditor
                                form={form}
                                setForm={setForm}
                            />

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="xl:col-span-8">

                        <div className="space-y-6 max-h-[calc(100vh-40px)] overflow-y-auto pr-1 custom-scrollbar">

                            <DynamicCardsEditor
                                title="Event Type Cards"
                                sectionKey="eventType"
                                form={form}
                                setForm={setForm}
                            />

                            <DynamicCardsEditor
                                title="Event Solution Cards"
                                sectionKey="eventSolution"
                                form={form}
                                setForm={setForm}
                            />

                            <SectionEditor
                                form={form}
                                setForm={setForm}
                                pageTitle={page.meta_title || form.slug}
                                pageId={page.id}   // ← zaroori hai AI fetch ke liye
                            />
                        </div>
                    </div>
                </div>

                {/* ── Action Buttons ── */}
                <div className="flex items-center justify-between gap-4 pb-8">
                    <button
                        onClick={() => router.back()}
                        className="h-11 px-6 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="h-11 px-8 rounded-xl bg-[#1a1a1a] text-[#c9a96e] text-sm font-medium tracking-wide hover:bg-[#c9a96e] hover:text-[#1a1a1a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {saving ? (
                            <>
                                <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                </svg>
                                Saving...
                            </>
                        ) : (
                            <>
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Save Changes
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

