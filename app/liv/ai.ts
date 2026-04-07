// import OpenAI from "openai"

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!,
// })

// export async function generatePageContent(slug: string, children: string[] = []) {

//   const serviceName = slug
//     .split("/")
//     .pop()
//     ?.replace(/-/g, " ")
//     .replace(/\b\w/g, (c) => c.toUpperCase());

//   console.log("Service Name in AI: ", serviceName);

//   const childrenList = children.join(", ");

//   console.log("AI - Children List: ", childrenList);

//   const prompt = `
// You are an SEO expert for "Ananta Hospitality" - a premium event management company in Delhi, India.

// Generate SEO-optimized page content for this service: "${serviceName}"

// Sub-services (must be used for cards):
// ${childrenList}

// ---

// ## OUTPUT RULES:
// - Return ONLY valid JSON, no explanation, no markdown, no backticks
// - All character limits are STRICT

// ---

// ## JSON STRUCTURE:

// {
//   "meta_title": "",
//   "meta_description": "",
//   "meta_keywords": "",
//   "content": [
//   "hero": {
//     "h1": "",
//     "h2": "",
//     "shortDesc": ""
//   },
//   "eventType": {
//     "shortDesc": "",
//     "cards": [
//       { "cardType": "", "desc": ""}
//     ]
// },
//  eventSolution: {
//     "shortDesc": ""
// }
//   ],
//   "faqs": [
//     {
//       "question": "",
//       "answer": ""
//     }
//   ]
// }

// ---

// ## CARD RULES (VERY IMPORTANT):
// - Create EXACTLY ${children.length} cards
// - Each cardType MUST match the sub-services provided
// - DO NOT create new card types
// - Each desc must be 30-50 words
// - Keep descriptions unique and specific

// ## FIELD RULES:

// ### meta_title (50-60 chars STRICT):
// - Format: [Service Keyword] Management Company in Delhi | Ananta Hospitality
// - NO words: Best, Top, Leading, Premier, #1
// - Must include: "in Delhi" and "Ananta Hospitality"
// - Example: "Corporate Event Management Company in Delhi | Ananta Hospitality"

// ### meta_description (140-155 chars STRICT):
// - Natural, readable sentence
// - Must include: "event management company in Delhi"
// - Mention: planning, execution, or experience
// - NO keyword stuffing

// ### meta_keywords (comma separated, max 10):
// - Long-tail keywords only
// - Delhi location specific
// - Example: "corporate event planner delhi, conference management delhi"

// ### hero.h1 (40-60 chars):
// - Same as meta_title but WITHOUT "| Ananta Hospitality"
// - Example: "Corporate Event Management Company in Delhi"

// ### hero.tagline (80-100 chars):
// - Same as meta_description but shorter and punchier
// - Use active voice
// - Example: "We plan and execute world-class corporate events across Delhi NCR."

// ### faqs (exactly 6):
// - Delhi specific (mention venues, areas like Connaught Place, Aerocity, etc.)
// - Mix of: pricing, process, venues, timeline questions
// - Answer length: 40-80 words each
// - Natural conversational tone
// `

//   const response = await openai.chat.completions.create({
//     model: "gpt-5-nano",
//     messages: [
//       {
//         role: "user",
//         content: prompt
//       }
//     ],
//     response_format: { type: "json_object" }
//   })

//   return JSON.parse(response.choices[0].message.content || "{}")
// }

// Previous Updated -- 3

// import OpenAI from "openai"
// import { findServicePath } from "@/app/liv/serviceSlugFinder"
// import { services } from "@/app/data/services"

// export async function generatePageContent(slugPath: string[]) {
//   const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY!,
//   })

//   // ✅ Root "events" page — special handling
//   if (slugPath.length === 0) {
//     const childrenTitles = services.map((s) => s.title)

//     const prompt = `
// You are an SEO expert for "Ananta Hospitality" - a premium event management company in Delhi, India.

// Generate SEO-optimized page content for the main Events page.

// Sub-services (use EXACT names, do not modify):
// ${childrenTitles.join(", ")}

// ---

// ## OUTPUT RULES:
// - Return ONLY valid JSON, no explanation, no markdown, no backticks
// - All character limits are STRICT

// ---

// ## JSON STRUCTURE:

// {
//   "meta_title": "",
//   "meta_description": "",
//   "meta_keywords": "",
//   "content": {
//     "hero": {
//       "h1": "",
//       "h2": "",
//       "shortDesc": ""
//     },
//     "eventType": {
//       "shortDesc": "",
//       "cards": [
//         { "desc": "" }
//       ]
//     },
//     "eventSolution": {
//       "shortDesc": "",
//       "cards": [
//       { "desc": "" }
//       ]

//     }
//   },
//   "faqs": [
//     {
//       "question": "",
//       "answer": ""
//     }
//   ]
// }

// ---

// ## CARD RULES:
// - Generate EXACTLY ${childrenTitles.length} descriptions
// - Maintain same order as given sub-services
// - Each desc must be 30-50 words
// - DO NOT include cardType in response

// ---

// ## FIELD RULES:

// ### meta_title (50-60 chars):
// - Format: Event Management Company in Delhi | Ananta Hospitality

// ### meta_description (140-155 chars):
// - Must include: "event management company in Delhi"

// ### hero.h1:
// - Same as meta_title WITHOUT "| Ananta Hospitality"

// ### faqs:
// - Exactly 6 FAQs
// `

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [{ role: "user", content: prompt }],
//       response_format: { type: "json_object" },
//     })

//     const aiData = JSON.parse(response.choices[0].message.content || "{}")

//     // ✅ Merge services.ts + AI
//     const cards = services.map((child, index) => ({
//       cardType: child.title,
//       slug: child.slug,
//       desc: aiData?.content?.eventType?.cards?.[index]?.desc || "",
//     }))

//     return {
//       ...aiData,
//       content: {
//         ...aiData.content,
//         eventType: {
//           ...aiData.content?.eventType,
//           cards,
//         },
//       },
//     }
//   }

//   // ✅ Normal service page
//   const data = findServicePath(slugPath)
//   const current = data?.current
//   const childrenNodes = current?.children || []

//   if (!current) {
//     throw new Error("Service not found for slug")
//   }

//   const serviceName = current.title
//   const childrenTitles = childrenNodes.map((c) => c.title)

//   const prompt = `
// You are an SEO expert for "Ananta Hospitality" - a premium event management company in Delhi, India.

// Generate SEO-optimized page content for this service: "${serviceName}"

// Sub-services (use EXACT names, do not modify):
// ${childrenTitles.join(", ")}

// ---

// ## OUTPUT RULES:
// - Return ONLY valid JSON, no explanation, no markdown, no backticks
// - All character limits are STRICT

// ---

// ## JSON STRUCTURE:

// {
//   "meta_title": "",
//   "meta_description": "",
//   "meta_keywords": "",
//   "content": {
//     "hero": {
//       "h1": "",
//       "h2": "",
//       "shortDesc": ""
//     },
//     "eventType": {
//       "shortDesc": "",
//       "cards": [
//         { "desc": "" }
//       ]
//     },
//     "eventSolution": {
//       "shortDesc": "",
//       "cards": [
//       { "desc": "" }
//       ]

//     }
//   },
//   "faqs": [
//     {
//       "question": "",
//       "answer": ""
//     }
//   ]
// }

// ---

// ## CARD RULES:
// - Generate EXACTLY ${childrenTitles.length} descriptions
// - Maintain same order as given sub-services
// - Each desc must be 30-50 words
// - DO NOT include cardType in response

// ---

// ## FIELD RULES:

// ### meta_title (50-60 chars):
// - Format: ${serviceName} Management Company in Delhi | Ananta Hospitality

// ### meta_description (140-155 chars):
// - Must include: "event management company in Delhi"

// ### hero.h1:
// - Same as meta_title WITHOUT "| Ananta Hospitality"

// ### faqs:
// - Exactly 6 FAQs
// `

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [{ role: "user", content: prompt }],
//     response_format: { type: "json_object" },
//   })

//   const aiData = JSON.parse(response.choices[0].message.content || "{}")

//   const cards = childrenNodes.map((child, index) => ({
//     cardType: child.title,
//     slug: child.slug,
//     desc: aiData?.content?.eventType?.cards?.[index]?.desc || "",
//   }))

//   return {
//     ...aiData,
//     content: {
//       ...aiData.content,
//       eventType: {
//         ...aiData.content?.eventType,
//         cards,
//       },
//     },
//   }
// }

import OpenAI from "openai"
import { findServicePath } from "@/app/liv/serviceSlugFinder"
import { services } from "@/app/data/services"
import { solutions } from "../data/solution"


export async function generatePageContent(slugPath: string[]) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  })

  // ✅ Solution cards ke liye titles
  const solutionTitles = solutions.map((s) => s.title)

  // ✅ Root "events" page
  if (slugPath.length === 0) {
    const childrenTitles = services.map((s) => s.title)

    const prompt = `
You are an SEO expert for "Ananta Hospitality" - a premium event management company in Delhi, India.

Generate SEO-optimized page content for the main Events page.

Event Types (use EXACT names):
${childrenTitles.join(", ")}

Event Solutions (use EXACT names):
${solutionTitles.join(", ")}

---

## OUTPUT RULES:
- Return ONLY valid JSON, no explanation, no markdown, no backticks

---

## JSON STRUCTURE:

{
  "meta_title": "",
  "meta_description": "",
  "meta_keywords": "",
  "content": {
    "hero": { "h1": "", "h2": "", "shortDesc": "" },
    "eventType": {
      "shortDesc": "",
      "cards": [{ "desc": "" }]
    },
    "eventSolution": {
      "shortDesc": "",
      "cards": [{ "desc": "" }]
    }
  },
  "faqs": [{ "question": "", "answer": "" }]
}

---

## CARD RULES:
- eventType.cards: EXACTLY ${childrenTitles.length} items — same order as Event Types
- eventSolution.cards: EXACTLY ${solutionTitles.length} items — same order as Event Solutions
- Each desc: 30-50 words
- DO NOT include cardType in response

## FIELD RULES:
### meta_title: Event Management Company in Delhi | Ananta Hospitality
### meta_description: Must include "event management company in Delhi" (140-155 chars)
### hero.h1: Same as meta_title WITHOUT "| Ananta Hospitality"
### faqs: Exactly 6 FAQs
`

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    })

    const aiData = JSON.parse(response.choices[0].message.content || "{}")

    // ✅ eventType cards merge
    const eventTypeCards = services.map((child, index) => ({
      cardType: child.title,
      slug: child.slug,
      desc: aiData?.content?.eventType?.cards?.[index]?.desc || "",
    }))

    // ✅ eventSolution cards merge — solutions.ts se
    const eventSolutionCards = solutions.map((child, index) => ({
      cardType: child.title,
      slug: child.slug,
      desc: aiData?.content?.eventSolution?.cards?.[index]?.desc || "",
    }))

    return {
      ...aiData,
      content: {
        ...aiData.content,
        eventType: {
          ...aiData.content?.eventType,
          cards: eventTypeCards,
        },
        eventSolution: {
          ...aiData.content?.eventSolution,
          cards: eventSolutionCards,  // ✅ Solutions cards
        },
      },
    }
  }

  // ✅ Normal service page
  const data = findServicePath(slugPath)
  const current = data?.current
  const childrenNodes = current?.children || []

  if (!current) {
    throw new Error("Service not found for slug")
  }

  const serviceName = current.title
  const childrenTitles = childrenNodes.map((c) => c.title)

  const prompt = `
You are an SEO expert for "Ananta Hospitality" - a premium event management company in Delhi, India.

Generate SEO-optimized page content for: "${serviceName}"

Sub-services (use EXACT names):
${childrenTitles.join(", ")}

Event Solutions (use EXACT names):
${solutionTitles.join(", ")}

---

## OUTPUT RULES:
- Return ONLY valid JSON, no explanation, no markdown, no backticks

---

## JSON STRUCTURE:

{
  "meta_title": "",
  "meta_description": "",
  "meta_keywords": "",
  "content": {
    "hero": { "h1": "", "h2": "", "shortDesc": "" },
    "eventType": {
      "shortDesc": "",
      "cards": [{ "desc": "" }]
    },
    "eventSolution": {
      "shortDesc": "",
      "cards": [{ "desc": "" }]
    }
  },
  "faqs": [{ "question": "", "answer": "" }]
}

---

## CARD RULES:
- eventType.cards: EXACTLY ${childrenTitles.length} items — same order as Sub-services
- eventSolution.cards: EXACTLY ${solutionTitles.length} items — same order as Event Solutions
- Each desc: 30-50 words
- DO NOT include cardType in response

## FIELD RULES:
### meta_title (50-60 chars): ${serviceName} Management Company in Delhi | Ananta Hospitality
### meta_description (140-155 chars): Must include "event management company in Delhi"
### hero.h1: Same as meta_title WITHOUT "| Ananta Hospitality"
### faqs: Exactly 6 FAQs
`

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" },
  })

  const aiData = JSON.parse(response.choices[0].message.content || "{}")

  // ✅ eventType cards merge
  const eventTypeCards = childrenNodes.map((child, index) => ({
    cardType: child.title,
    slug: child.slug,
    desc: aiData?.content?.eventType?.cards?.[index]?.desc || "",
  }))

  // ✅ eventSolution cards merge
  const eventSolutionCards = solutions.map((child, index) => ({
    cardType: child.title,
    slug: child.slug,
    desc: aiData?.content?.eventSolution?.cards?.[index]?.desc || "",
  }))

  return {
    ...aiData,
    content: {
      ...aiData.content,
      eventType: {
        ...aiData.content?.eventType,
        cards: eventTypeCards,
      },
      eventSolution: {
        ...aiData.content?.eventSolution,
        cards: eventSolutionCards,  // ✅
      },
    },
  }
}