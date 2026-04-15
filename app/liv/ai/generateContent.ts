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

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
})

export async function generateAI(prompt: string) {
    // ✅ No try/catch here — errors bubble up to getPageData's catch block
    //    Previously returned {} on failure, causing "Cannot read properties of undefined"
    //    when callers accessed aiData.content.eventSolution.cards
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
    })

    const raw = response.choices[0]?.message?.content || "{}"
    const parsed = JSON.parse(raw)

    // Basic shape guard — catch malformed AI responses early
    if (!parsed.content || !parsed.meta_title) {
        throw new Error("AI returned incomplete structure: " + JSON.stringify(parsed))
    }

    return parsed
}