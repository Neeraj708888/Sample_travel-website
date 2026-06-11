// app/admin/(protected)/pages/edit/[id]/page-editor/AIGenerateButton.tsx
"use client"

import { useState } from "react"

interface Props {
    sectionKey: string
    pageTitle: string
    onGenerated: (data: any) => void
}

export default function AIGenerateButton({ sectionKey, pageTitle, onGenerated }: Props) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleGenerate() {
        if (!pageTitle.trim()) {
            setError("Page title/slug nahi mila")
            return
        }

        setLoading(true)
        setError(null)

        try {
            const res = await fetch("/api/admin/generate-section", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sectionKey, pageTitle })
            })

            const json = await res.json()
            if (!json.success) throw new Error(json.message)

            onGenerated(json.data)
        } catch (err: any) {
            setError(err.message ?? "Generation failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <button
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className="flex items-center gap-2 h-9 px-4 rounded-xl bg-violet-50 border border-violet-200 
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
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 
                   4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 
                   4.5 0 00-3.09 3.09z" />
                        </svg>
                        Generate with AI
                    </>
                )}
            </button>
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    )
}