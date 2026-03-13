import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
})

export async function generateDestinationContent(slug: string) {

    const prompt = `
Generate SEO optimized content for an EVENT MANAGEMENT COMPANY located in Delhi, India.

Service: ${slug}

Rules:
- Meta title must be 50-60 characters
- Meta description must be 140-160 characters
- Include keyword: event management company in Delhi
- FAQs should be location specific to Delhi.

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

Guidelines for FAQs:
- Focus on event planning in Delhi
- Mention venues, logistics, vendors, and event management in Delhi
- Create 6 FAQs
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