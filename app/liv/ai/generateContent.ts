

// import OpenAI from "openai"
// import { PageContent, FAQ } from "@/app/types/page.types"

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY!,
// })

// interface AIResponse {
//     meta_title: string
//     meta_description: string
//     meta_keywords?: string
//     display_title?: string
//     content: PageContent
//     faqs: FAQ[]
// }

// export async function generateAI(prompt: string): Promise<AIResponse> {

//     const response = await openai.chat.completions.create({
//         model: "gpt-4o-mini",
//         messages: [{ role: "user", content: prompt }],
//         response_format: { type: "json_object" },
//     })

//     const raw = response.choices[0]?.message?.content || "{}"

//     let parsed: AIResponse

//     // =========================
//     // ✅ SAFE JSON PARSE
//     // =========================
//     try {
//         parsed = JSON.parse(raw)
//     } catch (err) {
//         console.error("❌ JSON PARSE ERROR:", raw)
//         throw new Error("AI returned invalid JSON")
//     }

//     // =========================
//     // ✅ STRICT VALIDATION 🔥
//     // =========================
//     if (!parsed.meta_title || !parsed.meta_description) {
//         throw new Error("AI missing SEO fields")
//     }

//     if (!parsed.content?.hero?.h1) {
//         throw new Error("AI missing hero.h1")
//     }

//     // ❌ REMOVE THROW

//     if (!parsed.content?.eventSolution?.cards) {
//         console.warn("⚠️ AI missing eventSolution cards")
//         parsed.content.eventSolution = {
//             title: "Event Solutions",
//             shortDesc: "",
//             cards: [],
//         }
//     }

//     if (!Array.isArray(parsed.faqs)) {
//         parsed.faqs = []
//     }

//     // ensure max 6
//     parsed.faqs = parsed.faqs.slice(0, 6)

//     // fill missing
//     while (parsed.faqs.length < 6) {
//         parsed.faqs.push({
//             question: "Coming soon",
//             answer: "Details will be updated shortly."
//         })
//     }

//     // =========================
//     // ✅ OPTIONAL CLEANING
//     // =========================
//     parsed.faqs = parsed.faqs.map(f => ({
//         question: f.question?.trim(),
//         answer: f.answer?.trim()
//     }))

//     return parsed
// }

import OpenAI from "openai"
import { PageContent, FAQ, PageTypeKey } from "@/app/types/page.types"
import { buildPrompt, buildCardsPrompt } from "./promptBuilder"

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

export interface GenerateParams {
    pageType: PageTypeKey
    title: string
    eventItems?: string[]
    solutionItems: string[]
}

interface Card {
    title: string
    slug: string
    desc: string
    image: string
}

const BATCH_SIZE = 50

async function generateCardsInBatches(
    items: string[],
    context: string,
    cardType: "eventType" | "eventSolution"
): Promise<Card[]> {
    const allCards: Card[] = []

    for (let i = 0; i < items.length; i += BATCH_SIZE) {
        const batch = items.slice(i, i + BATCH_SIZE)

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: buildCardsPrompt(batch, context, cardType) }],
            response_format: { type: "json_object" },
        })

        const raw = response.choices[0]?.message?.content || "{}"

        try {
            const parsed = JSON.parse(raw)
            const cards = Array.isArray(parsed) ? parsed : parsed.cards ?? []
            allCards.push(...cards)
        } catch (err) {
            console.error(`❌ Cards batch ${i / BATCH_SIZE + 1} parse error:`, raw)
        }

        await new Promise((r) => setTimeout(r, 300))
    }

    return allCards
}

export async function generateAI(params: GenerateParams): Promise<AIResponse> {

    // ========================
    // Step 1: main content
    // ========================
    const mainResponse = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: buildPrompt(params) }],
        response_format: { type: "json_object" },
    })

    const raw = mainResponse.choices[0]?.message?.content || "{}"

    let parsed: AIResponse

    try {
        parsed = JSON.parse(raw)
    } catch (err) {
        console.error("❌ JSON PARSE ERROR:", raw)
        throw new Error("AI returned invalid JSON")
    }

    // ========================
    // ✅ STRICT VALIDATION
    // ========================
    if (!parsed.meta_title || !parsed.meta_description) {
        throw new Error("AI missing SEO fields")
    }

    if (!parsed.content?.hero?.h1) {
        throw new Error("AI missing hero.h1")
    }

    if (!parsed.content?.eventSolution?.cards) {
        console.warn("⚠️ AI missing eventSolution cards")
        parsed.content.eventSolution = {
            title: "Event Solutions",
            shortDesc: "",
            cards: [],
        }
    }

    if (!Array.isArray(parsed.faqs)) {
        parsed.faqs = []
    }

    parsed.faqs = parsed.faqs.slice(0, 6)

    while (parsed.faqs.length < 6) {
        parsed.faqs.push({
            question: "Coming soon",
            answer: "Details will be updated shortly."
        })
    }

    parsed.faqs = parsed.faqs.map(f => ({
        question: f.question?.trim(),
        answer: f.answer?.trim()
    }))

    // ========================
    // Step 2: cards batching
    // ========================
    const isSolutionOnly =
        params.pageType === "solutions-root" ||
        params.pageType === "solution-detail"

    const [eventCards, solutionCards] = await Promise.all([
        !isSolutionOnly
            ? generateCardsInBatches(params.eventItems ?? [], params.title, "eventType")
            : Promise.resolve([]),
        generateCardsInBatches(params.solutionItems, params.title, "eventSolution"),
    ])

    // ========================
    // Step 3: merge
    // ========================
    if (!isSolutionOnly && parsed.content.eventType) {
        parsed.content.eventType.cards = eventCards
    }
    parsed.content.eventSolution.cards = solutionCards

    return parsed
}