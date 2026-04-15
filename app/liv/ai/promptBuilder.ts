import { PageTypeKey } from "@/app/types/page.types"

interface PromptParams {
  pageType: PageTypeKey
  title: string
  eventItems?: string[]
  solutionItems: string[]
}

export function buildPrompt({
  pageType,
  title,
  eventItems = [],
  solutionItems = [],
}: PromptParams) {

  const isSolutionOnly =
    pageType === "solutions-root" ||   // ✅ "solutions" था — wrong था, fix kiya
    pageType === "solution-detail"

  return `
You are an SEO expert for "Ananta Hospitality" - an event management company in Delhi, India.

Generate SEO-optimized page content for: "${title}"

${!isSolutionOnly ? `Event Types (use EXACT names):
${eventItems.join(", ")}` : ""}

Event Solutions (use EXACT names):
${solutionItems.join(", ")}

---

## OUTPUT RULES:
- Return ONLY valid JSON
- No explanation
- No markdown

---

## JSON STRUCTURE:

{
  "meta_title": "",
  "meta_description": "",
  "meta_keywords": "",
  "content": {
    "hero": { "h1": "", "h2": "", "shortDesc": "" },
    ${!isSolutionOnly ? `"eventType": {
      "shortDesc": "",
      "cards": [{ "desc": "" }]
    },` : ""}
    "eventSolution": {
      "shortDesc": "",
      "cards": [{ "desc": "" }]
    }
  },
  "faqs": [{ "question": "", "answer": "" }]
}

---

## CARD RULES:
${!isSolutionOnly ? `- eventType.cards: EXACTLY ${eventItems.length}` : ""}
- eventSolution.cards: EXACTLY ${solutionItems.length}
- Each desc: 30-50 words 

---

## FIELD RULES:
- meta_title: 50-60 chars, include "${title}"
- meta_description: must include "event management company in Delhi" (140-155 chars)
- hero.h1: same as meta_title WITHOUT "| Ananta Hospitality"
- faqs: exactly 6
`
}