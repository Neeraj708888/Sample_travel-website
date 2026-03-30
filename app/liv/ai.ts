import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function generatePageContent(slug: string, children: string[] = []) {

  const serviceName = slug
    .split("/")
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  console.log("Service Name in AI: ", serviceName);

  const childrenList = children.join(", ");

  console.log("AI - Children List: ", childrenList);

  const prompt = `
You are an SEO expert for "Ananta Hospitality" - a premium event management company in Delhi, India.

Generate SEO-optimized page content for this service: "${serviceName}"

Sub-services (must be used for cards):
${childrenList}

---

## OUTPUT RULES:
- Return ONLY valid JSON, no explanation, no markdown, no backticks
- All character limits are STRICT

---

## JSON STRUCTURE:

{
  "meta_title": "",
  "meta_description": "",
  "meta_keywords": "",
  "content": [
  "hero": {
    "h1": "",
    "h2": "",
    "shortDesc": ""
  },
  "eventType": {
    "shortDesc": "",
    "cards": [
      { "cardType": "", "desc": ""}
    ]
},
 eventSolution: {
    "shortDesc": ""
}
  ],
  "faqs": [
    {
      "question": "",
      "answer": ""
    }
  ]
}

---

## CARD RULES (VERY IMPORTANT):
- Create EXACTLY ${children.length} cards
- Each cardType MUST match the sub-services provided
- DO NOT create new card types
- Each desc must be 30-50 words
- Keep descriptions unique and specific

## FIELD RULES:

### meta_title (50-60 chars STRICT):
- Format: [Service Keyword] Management Company in Delhi | Ananta Hospitality
- NO words: Best, Top, Leading, Premier, #1
- Must include: "in Delhi" and "Ananta Hospitality"
- Example: "Corporate Event Management Company in Delhi | Ananta Hospitality"

### meta_description (140-155 chars STRICT):
- Natural, readable sentence
- Must include: "event management company in Delhi"
- Mention: planning, execution, or experience
- NO keyword stuffing

### meta_keywords (comma separated, max 10):
- Long-tail keywords only
- Delhi location specific
- Example: "corporate event planner delhi, conference management delhi"

### hero.h1 (40-60 chars):
- Same as meta_title but WITHOUT "| Ananta Hospitality"
- Example: "Corporate Event Management Company in Delhi"

### hero.tagline (80-100 chars):
- Same as meta_description but shorter and punchier
- Use active voice
- Example: "We plan and execute world-class corporate events across Delhi NCR."

### faqs (exactly 6):
- Delhi specific (mention venues, areas like Connaught Place, Aerocity, etc.)
- Mix of: pricing, process, venues, timeline questions
- Answer length: 40-80 words each
- Natural conversational tone
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