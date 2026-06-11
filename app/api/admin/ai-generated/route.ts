// app/api/admin/generate-section/route.ts

import OpenAI from "openai"

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const PROMPTS: Record<string, (title: string) => string> = {

    whyChoose: (title) => `
    Generate a "Why Choose Us" section for an event management page titled: "${title}"
    Return ONLY raw JSON (no markdown, no backticks):
    {
      "heading": "Why Choose Us for ...",
      "subheading": "one line tagline",
      "points": [
        { "icon": "✅", "title": "short title", "desc": "2 line description" }
      ]
    }
    Exactly 6 points. Context: professional event company in Delhi, India.
  `,

    planningProcess: (title) => `
    Generate an "Event Planning Process" section for: "${title}"
    Return ONLY raw JSON (no markdown, no backticks):
    {
      "heading": "Our Planning Process",
      "subheading": "tagline",
      "steps": [
        { "step": 1, "title": "step name", "desc": "one line description" }
      ]
    }
    Exactly 5 steps. Context: professional event management in Delhi.
  `
}

export async function POST(req: Request) {
    try {
        const { sectionKey, pageTitle } = await req.json()

        if (!PROMPTS[sectionKey]) {
            return Response.json(
                { success: false, message: "Invalid section key" },
                { status: 400 }
            )
        }

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a JSON generator. Return ONLY valid raw JSON. No markdown, no backticks, no explanation.",
                },
                {
                    role: "user",
                    content: PROMPTS[sectionKey](pageTitle),
                },
            ],
            response_format: { type: "json_object" }, // 🔥 OpenAI ka built-in JSON mode
            temperature: 0.7,
        })

        const raw = completion.choices[0].message.content ?? "{}"
        const generated = JSON.parse(raw)

        return Response.json({ success: true, data: generated })

    } catch (err: any) {
        return Response.json(
            { success: false, message: err.message },
            { status: 500 }
        )
    }
}