// import OpenAI from "openai"

// import { services } from "@/app/data/services"
// import { solutions } from "../data/solution"
// import { findEventPath } from "./eventSlugFinder"


// export async function generatePageContent(slugPath: string[]) {
//   const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY!,
//   })

//   // ✅ Solution cards ke liye titles
//   const solutionTitles = solutions.map((s) => s.title)

//   // ✅ Root "events" page
//   if (slugPath.length === 0) {
//     const childrenTitles = services.map((s) => s.title)


//     const prompt = `
// You are an SEO expert for "Ananta Hospitality" - a premium event management company in Delhi, India.

// Generate SEO-optimized page content for the main Events page.

// Event Types (use EXACT names):
// ${childrenTitles.join(", ")}

// Event Solutions (use EXACT names):
// ${solutionTitles.join(", ")}

// ---

// ## OUTPUT RULES:
// - Return ONLY valid JSON, no explanation, no markdown, no backticks

// ---

// ## JSON STRUCTURE:

// {
//   "meta_title": "",
//   "meta_description": "",
//   "meta_keywords": "",
//   "content": {
//     "hero": { "h1": "", "h2": "", "shortDesc": "" },
//     "eventType": {
//       "shortDesc": "",
//       "cards": [{ "desc": "" }]
//     },
//     "eventSolution": {
//       "shortDesc": "",
//       "cards": [{ "desc": "" }]
//     }
//   },
//   "faqs": [{ "question": "", "answer": "" }]
// }

// ---

// ## CARD RULES:
// - eventType.cards: EXACTLY ${childrenTitles.length} items — same order as Event Types
// - eventSolution.cards: EXACTLY ${solutionTitles.length} items — same order as Event Solutions
// - Each desc: 30-50 words
// - DO NOT include cardType in response

// ## FIELD RULES:
// ### meta_title: Event Management Company in Delhi
// ### meta_description: Must include "event management company in Delhi" (140-155 chars)
// ### hero.h1: Same as meta_title WITHOUT "| Ananta Hospitality"
// ### faqs: Exactly 6 FAQs
// `

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [{ role: "user", content: prompt }],
//       response_format: { type: "json_object" },
//     })

//     const aiData = JSON.parse(response.choices[0].message.content || "{}")

//     // ✅ eventType cards merge
//     const eventTypeCards = services.map((child, index) => ({
//       cardType: child.title,
//       slug: child.slug,
//       desc: aiData?.content?.eventType?.cards?.[index]?.desc || "",
//     }))

//     // ✅ eventSolution cards merge — solutions.ts se
//     const eventSolutionCards = solutions.map((child, index) => ({
//       cardType: child.title,
//       slug: child.slug,
//       desc: aiData?.content?.eventSolution?.cards?.[index]?.desc || "",
//     }))

//     return {
//       ...aiData,
//       content: {
//         ...aiData.content,
//         eventType: {
//           ...aiData.content?.eventType,
//           cards: eventTypeCards,
//         },
//         eventSolution: {
//           ...aiData.content?.eventSolution,
//           cards: eventSolutionCards,  // ✅ Solutions cards
//         },
//       },
//     }
//   }

//   // ✅ Normal service page
//   const data = findEventPath(slugPath)
//   const current = data?.current
//   const childrenNodes = current?.children || []

//   if (!current) {
//     throw new Error("Service not found for slug")
//   }

//   const serviceName = current.title
//   const childrenTitles = childrenNodes.map((c) => c.title)
//   const titleSuffix = (current as any).titleSuffix ? `${serviceName.toLowerCase()} ${(current as any).titleSuffix.toLowerCase()}`
//     : "event management company in Delhi";

//   const prompt = `
// You are an SEO expert for "Ananta Hospitality" - a premium event management company in Delhi, India.

// Generate SEO-optimized page content for: "${serviceName}"

// Sub-services (use EXACT names):
// ${childrenTitles.join(", ")}

// Event Solutions (use EXACT names):
// ${solutionTitles.join(", ")}

// ---

// ## OUTPUT RULES:
// - Return ONLY valid JSON, no explanation, no markdown, no backticks

// ---

// ## JSON STRUCTURE:

// {
//   "meta_title": "",
//   "meta_description": "",
//   "meta_keywords": "",
//   "content": {
//     "hero": { "h1": "", "h2": "", "shortDesc": "" },
//     "eventType": {
//       "shortDesc": "",
//       "cards": [{ "desc": "" }]
//     },
//     "eventSolution": {
//       "shortDesc": "",
//       "cards": [{ "desc": "" }]
//     }
//   },
//   "faqs": [{ "question": "", "answer": "" }]
// }

// ---

// ## CARD RULES:
// - eventType.cards: EXACTLY ${childrenTitles.length} items — same order as Sub-services
// - eventSolution.cards: EXACTLY ${solutionTitles.length} items — same order as Event Solutions
// - Each desc: 30-50 words
// - DO NOT include cardType in response

// ## FIELD RULES:
// ### meta_title (50-60 chars): ${serviceName} Management Company in Delhi
// ### meta_description (140-155 chars): Must include "event management company in Delhi"
// ### hero.h1: Same as meta_title WITHOUT "| Ananta Hospitality"
// ### faqs: Exactly 6 FAQs
// `

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [{ role: "user", content: prompt }],
//     response_format: { type: "json_object" },
//   })

//   const aiData = JSON.parse(response.choices[0].message.content || "{}")

//   // ✅ eventType cards merge
//   const eventTypeCards = childrenNodes.map((child, index) => ({
//     cardType: child.title,
//     slug: child.slug,
//     desc: aiData?.content?.eventType?.cards?.[index]?.desc || "",
//   }))

//   // ✅ eventSolution cards merge
//   const eventSolutionCards = solutions.map((child, index) => ({
//     cardType: child.title,
//     slug: child.slug,
//     desc: aiData?.content?.eventSolution?.cards?.[index]?.desc || "",
//   }))

//   return {
//     ...aiData,
//     content: {
//       ...aiData.content,
//       eventType: {
//         ...aiData.content?.eventType,
//         cards: eventTypeCards,
//       },
//       eventSolution: {
//         ...aiData.content?.eventSolution,
//         cards: eventSolutionCards,  // ✅
//       },
//     },
//   }
// }
