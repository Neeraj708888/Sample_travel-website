// backend/services/generation.service.ts
import { openai } from "../../config/openai.client"
import { GeneratedSection, SectionKey } from "./types/Section.types"

/* ============================================================
   PROMPTS — har section ka alag prompt, title inject hoga
============================================================ */
const PROMPTS: Record<SectionKey, (title: string) => string> = {

    whyChoose: (title) => `
        Generate a "Why Choose Us" section for an event management page titled: "${title}"
        Context: Ananta Hospitality — premium event management company based in Delhi, India.
        
        Return ONLY raw JSON (no markdown, no backticks, no explanation):
        {
            "heading": "Why Choose Ananta for [service name from title]",
            "subheading": "one compelling tagline line",
            "points": [
                { "icon": "emoji", "title": "short title max 4 words", "desc": "2 lines max — specific benefit" }
            ]
        }
        
        Rules:
        - Exactly 6 points
        - Icons must be relevant emojis (🎭 🎯 ✅ ⚡ 💼 🏆 etc)
        - Each point must be specific to this service, not generic
        - desc should mention Delhi/India context where relevant atleast 350 - 400 Words
        - heading must include the specific service from the title
    `,

    planningProcess: (title) => `
        Generate an "Event Planning Process" section for: "${title}"
        Context: Ananta Hospitality — premium event management company in Delhi, India.
        
        Return ONLY raw JSON (no markdown, no backticks, no explanation):
        {
            "heading": "Our [Service] Planning Process",
            "subheading": "one line — simple and reassuring",
            "steps": [
                { "step": 1, "title": "step name max 3 words", "desc": "one clear sentence what happens in this step" }
            ]
        }
        
        Rules:
        - Exactly 5 steps
        - Steps must be in logical chronological order
        - Each step title should be action-oriented (verb first)
        - desc must be specific to this type of event/service atleast 200 - 250 words
        - heading must reference the specific service
    `,

    testimonials: (title) => `
        Generate 6 realistic client testimonials for: "${title}"
        Context: Ananta Hospitality — premium event management company in Delhi, India.
        
        Return ONLY raw JSON (no markdown, no backticks, no explanation):
        {
            "heading": "What Our Clients Say",
            "subheading": "one warm tagline",
            "items": [
                {
                    "name": "full Indian name",
                    "role": "job title, company OR relation e.g. Bride / Groom's Father",
                    "rating": 5,
                    "review": "2-3 sentences — genuine, specific to this event type",
                    "avatar": ""
                }
            ]
        }
        
        Rules:
        - Exactly 6 testimonials
        - Mix client types: corporate (2), wedding (2), private/cultural (2)
        - Names must be realistic Indian names (mix of North/South Indian)
        - Reviews must mention specific aspects of this service type atleast 100 - 150 words
        - All ratings between 4-5
        - avatar always empty string ""
    `,
}

/* ============================================================
   MAIN GENERATION FUNCTION
============================================================ */
export async function aiGenerateSection(
    sectionKey: SectionKey,
    pageTitle: string
): Promise<GeneratedSection> {

    const prompt = PROMPTS[sectionKey]
    if (!prompt) throw new Error(`Unknown section key: ${sectionKey}`)

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content:
                    "You are a JSON generator for an Indian event management company. " +
                    "Return ONLY valid raw JSON. No markdown fences, no backticks, no explanation text whatsoever.",
            },
            {
                role: "user",
                content: prompt(pageTitle),
            },
        ],
        response_format: { type: "json_object" }, // OpenAI native JSON mode
        temperature: 0.75,
        max_tokens: 1500,
    })

    const raw = completion.choices[0].message.content ?? "{}"

    // Extra safety — strip any accidental backticks
    const cleaned = raw.replace(/```json\n?|\n?```/g, "").trim()

    return JSON.parse(cleaned) as GeneratedSection
}