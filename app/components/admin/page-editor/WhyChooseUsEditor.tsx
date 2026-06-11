// page-editor/WhyChooseEditor.tsx
"use client"

import AIGenerateButton from "./AIGenerateButton"

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
    form: any
    setForm: (fn: (prev: any) => any) => void
    pageTitle: string
}

export default function WhyChooseUsEditor({ form, setForm, pageTitle }: Props) {

    const data: WhyChooseData = form.content?.whyChoose || {
        heading: "", subheading: "", points: []
    }

    function update(updated: WhyChooseData) {
        setForm((prev: any) => ({
            ...prev,
            content: { ...prev.content, whyChoose: updated }
        }))
    }

    function updatePoint(index: number, field: keyof Point, value: string) {
        const newPoints = [...data.points]
        newPoints[index] = { ...newPoints[index], [field]: value }
        update({ ...data, points: newPoints })
    }

    function addPoint() {
        update({ ...data, points: [...data.points, { icon: "✅", title: "", desc: "" }] })
    }

    function removePoint(index: number) {
        update({ ...data, points: data.points.filter((_, i) => i !== index) })
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#7c3aed" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 
                3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 
                013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 
                00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 
                01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 
                00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 
                013.138-3.138z" />
                        </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700">Why Choose Us</h3>
                </div>

                <AIGenerateButton
                    sectionKey="whyChoose"
                    pageTitle={pageTitle}
                    onGenerated={(d) => update(d)}  // AI data directly set ho jaega
                />
            </div>

            {/* Heading & Subheading */}
            <div className="space-y-3">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Heading</label>
                    <input
                        value={data.heading}
                        onChange={(e) => update({ ...data, heading: e.target.value })}
                        placeholder="Why Choose Us for Gatka Dance Events"
                        className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none 
                       focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Subheading</label>
                    <input
                        value={data.subheading}
                        onChange={(e) => update({ ...data, subheading: e.target.value })}
                        placeholder="Delhi's trusted event partner"
                        className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none 
                       focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10"
                    />
                </div>
            </div>

            {/* Points */}
            <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Points ({data.points.length})
                </label>

                {data.points.map((point, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 p-4 bg-gray-50 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-gray-500">Point #{i + 1}</span>
                            <button type="button" onClick={() => removePoint(i)} className="text-red-400 hover:text-red-600">
                                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="grid grid-cols-12 gap-2">
                            <input
                                value={point.icon}
                                onChange={(e) => updatePoint(i, "icon", e.target.value)}
                                placeholder="✅"
                                className="col-span-2 h-10 rounded-xl border border-gray-200 px-3 text-center text-lg outline-none
                           focus:border-[#c9a96e]"
                            />
                            <input
                                value={point.title}
                                onChange={(e) => updatePoint(i, "title", e.target.value)}
                                placeholder="Expert Team"
                                className="col-span-10 h-10 rounded-xl border border-gray-200 px-3 text-sm outline-none
                           focus:border-[#c9a96e]"
                            />
                        </div>

                        <textarea
                            rows={2}
                            value={point.desc}
                            onChange={(e) => updatePoint(i, "desc", e.target.value)}
                            placeholder="Short description..."
                            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none resize-none
                         focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10"
                        />
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addPoint}
                    className="h-10 px-5 rounded-xl border border-dashed border-gray-300 text-sm text-gray-600 
                     hover:border-[#c9a96e] hover:text-[#c9a96e] transition w-full"
                >
                    + Add Point
                </button>
            </div>
        </div>
    )
}