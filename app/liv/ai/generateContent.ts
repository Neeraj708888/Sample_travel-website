// import OpenAI from "openai";

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY!,
// })

// export async function generateAI(prompt: string) {
//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-4o-mini",
//             messages: [{ role: "user", content: prompt }],
//             response_format: { type: "json_object" },
//         })

//         const content = response.choices[0]?.message?.content || "{}"

//         return JSON.parse(content)
//     } catch (error) {
//         console.error("❌ AI ERROR:", error)
//         return {}
//     }
// }

import OpenAI from "openai"
import { PageContent, FAQ } from "@/app/types/page.types"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
})

interface AIResponse {
    meta_title: string
    meta_description: string
    meta_keywords?: string
    display_title?: string
    content: PageContent
    faqs: FAQ[]
}

export async function generateAI(prompt: string): Promise<AIResponse> {

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
    })

    const raw = response.choices[0]?.message?.content || "{}"

    let parsed: AIResponse

    // =========================
    // ✅ SAFE JSON PARSE
    // =========================
    try {
        parsed = JSON.parse(raw)
    } catch (err) {
        console.error("❌ JSON PARSE ERROR:", raw)
        throw new Error("AI returned invalid JSON")
    }

    // =========================
    // ✅ STRICT VALIDATION 🔥
    // =========================
    if (!parsed.meta_title || !parsed.meta_description) {
        throw new Error("AI missing SEO fields")
    }

    if (!parsed.content?.hero?.h1) {
        throw new Error("AI missing hero.h1")
    }

    if (!parsed.content?.eventSolution?.cards) {
        throw new Error("AI missing eventSolution cards")
    }

    if (!Array.isArray(parsed.faqs) || parsed.faqs.length !== 6) {
        throw new Error("AI must return exactly 6 FAQs")
    }

    // =========================
    // ✅ OPTIONAL CLEANING
    // =========================
    parsed.faqs = parsed.faqs.map(f => ({
        question: f.question?.trim(),
        answer: f.answer?.trim()
    }))

    return parsed
}