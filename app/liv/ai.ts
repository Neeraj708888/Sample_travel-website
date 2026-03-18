import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
})

export async function generateDestinationContent(slug: string) {

    const prompt = `
Generate SEO optimized content for an EVENT MANAGEMENT COMPANY in Delhi, India.

Service: ${slug}

STRICT RULES FOR META TITLE:
- Length MUST be between 50-60 characters
- Start with service keyword
- Include "in Delhi"
- End with "Ananta Group"
- DO NOT use words like: Leading, Best, Top
- DO NOT create sentences, only structured SEO title

STRICT RULES FOR META DESCRIPTION:
- 140-160 characters
- Natural and readable
- Include "event management company in Delhi"

Return STRICT JSON:

{
  "meta_title": "",
  "meta_description": "",
  "meta_keywords": "",
  "faqs": [
    {
      "question": "",
      "answer": ""
    }
  ]
}

FAQs:
- Location specific to Delhi
- Mention venues, vendors, logistics
- Generate exactly 6 FAQs
`

    const response = await openai.chat.completions.create({
        model: "gpt-5-nano",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
        response_format: { type: "json_object" }
    })

    return JSON.parse(response.choices[0].message.content || "{}")
}