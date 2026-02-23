import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
})

export async function generateDestinationContent(location: string) {
    const prompt = `
Generate complete SEO optimized travel page data for "${location}".

Return STRICT JSON:

{
  "name": "",
  "country": "",
  "hero_title": "",
  "hero_description": "",
  "highlights": ["", "", ""],
  "faqs": [
    { "question": "", "answer": "" }
  ],
  "packages": [
    { "title": "", "price": "", "duration": "" }
  ],
  "images": ["image-url"],
  "content": "<h2>...</h2><p>...</p>",
  "meta_title": "",
  "meta_description": "",
  "meta_keywords": "",
  "og_image": "",
  "schema_json": {},
  "faq_schema": {}
}
`

    const response = await openai.chat.completions.create({
        model: "gpt-5-nano",
        messages: [{ role: "user", content: prompt }],
        // temperature: 0.7,
        response_format: {
            type: "json_object",
        },
    })

    return JSON.parse(response.choices[0].message.content || "{}")
}