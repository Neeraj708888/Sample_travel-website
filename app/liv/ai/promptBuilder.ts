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
    pageType === "solutions-root" ||
    pageType === "solution-detail"

  return `
You are an SEO expert for "Ananta Hospitality" - an event management company in Delhi, India.

Generate HIGH-QUALITY, SEO-optimized page content for: "${title}"

${!isSolutionOnly ? `Event Types (USE EXACT names, do not modify):
${eventItems.join(", ")}` : ""}

Event Solutions (USE EXACT names, do not modify):
${solutionItems.join(", ")}

---

## OUTPUT RULES:
- Return ONLY valid JSON
- No explanation
- No markdown
- Do NOT change structure
- Do NOT add extra fields

---

## JSON STRUCTURE:

{
  "meta_title": "",
  "meta_description": "",
  "meta_keywords": "",
  "display_title": "${title}",
  "content": {
    "hero": {
      "h1": "",
      "h2": "",
      "shortDesc": "",
      "image": ""
    },
    ${!isSolutionOnly ? `"eventType": {
      "title": "${title} Event Types",
      "shortDesc": "",
      "cards": [
        { "title": "", "slug": "", "desc": "", "image": "" }
      ]
    },` : ""}
    "eventSolution": {
      "title": "${title} Solutions",
      "shortDesc": "",
      "cards": [
        { "title": "", "slug": "", "desc": "", "image": "" }
      ]
    }
  },
  "faqs": [
    { "question": "", "answer": "" }
  ]
}

---

## CARD RULES:
${!isSolutionOnly ? `- eventType.cards: EXACTLY ${eventItems.length}` : ""}
- eventSolution.cards: EXACTLY ${solutionItems.length}
- Each card MUST include:
  - title (same as given name)
  - slug (URL-friendly, lowercase, hyphen-separated)
  - desc (30-50 words)
  - image (relevant path like /images/xyz.jpg)

---

## CONTENT RULES:
- Write natural, human-like, conversion-focused content
- Avoid keyword stuffing
- Use India + event context

---

## SEO RULES:
- meta_title: 50-60 chars, must include "${title}"
- meta_description: 140-155 chars, MUST include "event management company in Delhi"
- meta_keywords: 5-10 relevant keywords

---

## HERO RULES:
- h1: same as meta_title WITHOUT "| Ananta Hospitality"
- h2: supporting emotional or benefit-driven line
- shortDesc: 25-40 words
- image: /images/${title.toLowerCase().replace(/\\s+/g, "-")}.jpg

---

## FAQ RULES:
- EXACTLY 6 FAQs
- FAQs MUST be based on the primary page intent and title: "${title}"
- Do NOT focus on internal categories like event solutions or service lists
- Avoid generic company-wide FAQs
- Questions should be user-focused
- Answers: 30-50 words
`
}