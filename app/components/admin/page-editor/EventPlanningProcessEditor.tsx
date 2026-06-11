// page-editor/PlanningProcessEditor.tsx
"use client"

import AIGenerateButton from "./AIGenerateButton"

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
    form: any
    setForm: (fn: (prev: any) => any) => void
    pageTitle: string
}

export default function PlanningProcessEditor({ form, setForm, pageTitle }: Props) {

    const data: ProcessData = form.content?.planningProcess || {
        heading: "", subheading: "", steps: []
    }

    function update(updated: ProcessData) {
        setForm((prev: any) => ({
            ...prev,
            content: { ...prev.content, planningProcess: updated }
        }))
    }

    function updateStep(index: number, field: keyof Step, value: string | number) {
        const newSteps = [...data.steps]
        newSteps[index] = { ...newSteps[index], [field]: value }
        update({ ...data, steps: newSteps })
    }

    function addStep() {
        update({
            ...data,
            steps: [...data.steps, { step: data.steps.length + 1, title: "", desc: "" }]
        })
    }

    function removeStep(index: number) {
        const newSteps = data.steps
            .filter((_, i) => i !== index)
            .map((s, i) => ({ ...s, step: i + 1 }))  // renumber
        update({ ...data, steps: newSteps })
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#ea580c" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 
                   2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700">Event Planning Process</h3>
                </div>

                <AIGenerateButton
                    sectionKey="planningProcess"
                    pageTitle={pageTitle}
                    onGenerated={(d) => update(d)}
                />
            </div>

            {/* Heading */}
            <div className="space-y-3">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Heading</label>
                    <input
                        value={data.heading}
                        onChange={(e) => update({ ...data, heading: e.target.value })}
                        placeholder="Our Gatka Dance Event Planning Process"
                        className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none
                       focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Subheading</label>
                    <input
                        value={data.subheading}
                        onChange={(e) => update({ ...data, subheading: e.target.value })}
                        placeholder="From planning to performance"
                        className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none
                       focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10"
                    />
                </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Steps ({data.steps.length})
                </label>

                {data.steps.map((step, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 p-4 bg-gray-50 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-700 text-xs 
                               font-bold flex items-center justify-center">
                                {step.step}
                            </span>
                            <button type="button" onClick={() => removeStep(i)} className="text-red-400 hover:text-red-600">
                                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <input
                            value={step.title}
                            onChange={(e) => updateStep(i, "title", e.target.value)}
                            placeholder="Initial Consultation"
                            className="h-10 w-full rounded-xl border border-gray-200 px-3 text-sm outline-none
                         focus:border-[#c9a96e]"
                        />

                        <textarea
                            rows={2}
                            value={step.desc}
                            onChange={(e) => updateStep(i, "desc", e.target.value)}
                            placeholder="Step description..."
                            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none 
                         resize-none focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10"
                        />
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addStep}
                    className="h-10 px-5 rounded-xl border border-dashed border-gray-300 text-sm text-gray-600
                     hover:border-[#c9a96e] hover:text-[#c9a96e] transition w-full"
                >
                    + Add Step
                </button>
            </div>
        </div>
    )
}