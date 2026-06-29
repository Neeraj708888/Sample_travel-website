
// import { services } from "@/app/data/services"
// import { solutions } from "@/app/data/solution"
// import type { ServiceNode } from "@/app/data/solution"

// import { findEventPath } from "./eventSlugFinder"
// import { findSolutionPath } from "./solutionSlugFinder"

// import { buildPrompt } from "../liv/ai/promptBuilder"
// import { generateAI } from "../liv/ai/generateContent"
// import { mapCards } from "./mapCards"
// import { PageTypeKey } from "../types/page.types"

// /* =======================================
//    🔹 DEFAULT CONTENT (🔥 FIX)
// ======================================= */
// const defaultContent = {
//     hero: {
//         h1: "",
//         h2: "",
//         shortDesc: "",
//     },
//     eventType: {
//         title: "Event Types",
//         shortDesc: "",
//         cards: [],
//     },
//     eventSolution: {
//         title: "Event Solutions",
//         shortDesc: "",
//         cards: [],
//     },
// }

// /* =======================================
//    🔹 Helper — display title
// ======================================= */
// function getDisplayTitle(node: ServiceNode): string {
//     return node.titleSuffix
//         ? `${node.title} ${node.titleSuffix}`
//         : node.title
// }

// /* =======================================
//    🔹 SAFE AI CALL (🔥 FIXED)
// ======================================= */
// async function safeGenerateAI(payload: any) {
//     try {
//         const res = await generateAI(payload)

//         return {
//             ...res,
//             content: res.content || defaultContent, // 🔥 SAFE
//         }
//     } catch (error) {
//         console.error("❌ AI ERROR:", error)

//         return {
//             meta_title: "Page",
//             meta_description: "Content unavailable",
//             meta_keywords: "",
//             content: defaultContent, // 🔥 FIXED
//             faqs: [],
//         }
//     }
// }

// /* =======================================
//    🔹 MAIN FUNCTION
// ======================================= */
// export async function generatePageContent(slugPath: string[]) {

//     const solutionTitles = solutions.map(s => s.title)

//     /* =========================
//        ✅ SOLUTIONS ROOT
//     ========================= */
//     if (slugPath.length === 1 && slugPath[0] === "solutions") {

//         const pageType: PageTypeKey = "solutions-root"
//         const displayTitle = "Event Solutions Company"

//         const aiData = await safeGenerateAI(
//             buildPrompt({
//                 pageType,
//                 title: displayTitle,
//                 solutionItems: solutionTitles,
//             })
//         )

//         return {
//             ...aiData,
//             display_title: displayTitle,
//             content: {
//                 ...(aiData.content || defaultContent),
//                 eventSolution: {
//                     ...(aiData.content?.eventSolution || {}),
//                     cards: mapCards(
//                         solutions,
//                         aiData.content?.eventSolution?.cards || []
//                     ),
//                 },
//             },
//         }
//     }

//     /* =========================
//        ✅ SOLUTIONS DETAIL
//     ========================= */
//     if (slugPath[0] === "solutions") {

//         const pageType: PageTypeKey = "solution-detail"

//         const data = findSolutionPath(slugPath.slice(1))
//         const current = data?.current

//         if (!current) {
//             console.warn("⚠️ Solution not found:", slugPath)
//             return safeGenerateAI(buildPrompt({
//                 pageType,
//                 title: "Solution",
//                 solutionItems: solutionTitles,
//             }))
//         }

//         const displayTitle = getDisplayTitle(current)

//         const children = current.children || []
//         const titles = children.map((c: ServiceNode) => c.title)

//         const aiData = await safeGenerateAI(
//             buildPrompt({
//                 pageType,
//                 title: displayTitle,
//                 solutionItems: titles,
//             })
//         )

//         return {
//             ...aiData,
//             display_title: displayTitle,
//             content: {
//                 ...(aiData.content || defaultContent),
//                 eventSolution: {
//                     ...(aiData.content?.eventSolution || {}),
//                     cards: mapCards(
//                         children,
//                         aiData.content?.eventSolution?.cards || []
//                     ),
//                 },
//             },
//         }
//     }

//     /* =========================
//        ✅ EVENTS ROOT
//     ========================= */
//     if (slugPath.length === 0 || slugPath[0] === "events") {

//         const pageType: PageTypeKey = "events-root"
//         const eventTitles = services.map(s => s.title)

//         const displayTitle = "Event Management Company in Delhi"

//         const aiData = await safeGenerateAI(
//             buildPrompt({
//                 pageType,
//                 title: displayTitle,
//                 eventItems: eventTitles,
//                 solutionItems: solutionTitles,
//             })
//         )

//         return {
//             ...aiData,
//             display_title: displayTitle,
//             content: {
//                 ...(aiData.content || defaultContent),

//                 eventType: {
//                     ...(aiData.content?.eventType || {}),
//                     cards: mapCards(
//                         services,
//                         aiData.content?.eventType?.cards || []
//                     ),
//                 },

//                 eventSolution: {
//                     ...(aiData.content?.eventSolution || {}),
//                     cards: mapCards(
//                         solutions,
//                         aiData.content?.eventSolution?.cards || []
//                     ),
//                 },
//             },
//         }
//     }

//     /* =========================
//        ✅ EVENTS DETAIL
//     ========================= */
//     const pageType: PageTypeKey = "event-detail"

//     const data = findEventPath(slugPath)
//     const current = data?.current

//     if (!current) {
//         console.warn("⚠️ Event not found:", slugPath)
//         return safeGenerateAI(buildPrompt({
//             pageType,
//             title: "Event",
//             solutionItems: solutionTitles,
//         }))
//     }

//     const displayTitle = getDisplayTitle(current)

//     const children = current.children || []
//     const titles = children.map((c: ServiceNode) => c.title)

//     const aiData = await safeGenerateAI(
//         buildPrompt({
//             pageType,
//             title: displayTitle,
//             eventItems: titles,
//             solutionItems: solutionTitles,
//         })
//     )

//     return {
//         ...aiData,
//         display_title: displayTitle,
//         content: {
//             ...(aiData.content || defaultContent),

//             eventType: {
//                 ...(aiData.content?.eventType || {}),
//                 cards: mapCards(
//                     children,
//                     aiData.content?.eventType?.cards || []
//                 ),
//             },

//             eventSolution: {
//                 ...(aiData.content?.eventSolution || {}),
//                 cards: mapCards(
//                     solutions,
//                     aiData.content?.eventSolution?.cards || []
//                 ),
//             },
//         },
//     }
// }

import { findEventPath } from "./eventSlugFinder"
import { findSolutionPath } from "./solutionSlugFinder"

import { generateAI, GenerateParams } from "../lib/ai/generateContent"
import { mapCards } from "./mapCards"
import { PageTypeKey } from "../types/page.types"
import { services } from "@/data/services"
import { ServiceNode, solutions } from "@/data/solution"

/* =======================================
   🔹 DEFAULT CONTENT
======================================= */
const defaultContent = {
    hero: {
        h1: "",
        h2: "",
        shortDesc: "",
    },
    eventType: {
        title: "Event Types",
        shortDesc: "",
        cards: [],
    },
    eventSolution: {
        title: "Event Solutions",
        shortDesc: "",
        cards: [],
    },
}

/* =======================================
   🔹 Helper — display title
======================================= */
function getDisplayTitle(node: ServiceNode): string {
    return node.titleSuffix
        ? `${node.title} ${node.titleSuffix}`
        : node.title
}

/* =======================================
   🔹 SAFE AI CALL
======================================= */
async function safeGenerateAI(payload: GenerateParams) {
    try {
        const res = await generateAI(payload)
        return {
            ...res,
            content: res.content || defaultContent,
        }
    } catch (error) {
        console.error("❌ AI ERROR:", error)
        return {
            meta_title: "Page",
            meta_description: "Content unavailable",
            meta_keywords: "",
            content: defaultContent,
            faqs: [],
        }
    }
}

/* =======================================
   🔹 MAIN FUNCTION
======================================= */
export async function generatePageContent(slugPath: string[]) {

    const solutionTitles = solutions.map(s => s.title)

    /* =========================
       ✅ SOLUTIONS ROOT
    ========================= */
    if (slugPath.length === 1 && slugPath[0] === "solutions") {

        const pageType: PageTypeKey = "solutions-root"
        const displayTitle = "Event Solutions Company"

        const aiData = await safeGenerateAI({
            pageType,
            title: displayTitle,
            solutionItems: solutionTitles,
        })

        return {
            ...aiData,
            display_title: displayTitle,
            content: {
                ...(aiData.content || defaultContent),
                eventSolution: {
                    ...(aiData.content?.eventSolution || {}),
                    cards: mapCards(
                        solutions,
                        aiData.content?.eventSolution?.cards || []
                    ),
                },
            },
        }
    }

    /* =========================
       ✅ SOLUTIONS DETAIL
    ========================= */
    if (slugPath[0] === "solutions") {

        const pageType: PageTypeKey = "solution-detail"

        const data = findSolutionPath(slugPath.slice(1))
        const current = data?.current

        if (!current) {
            console.warn("⚠️ Solution not found:", slugPath)
            return safeGenerateAI({
                pageType,
                title: "Solution",
                solutionItems: solutionTitles,
            })
        }

        const displayTitle = getDisplayTitle(current)
        const children = current.children || []
        const titles = children.map((c: ServiceNode) => c.title)

        const aiData = await safeGenerateAI({
            pageType,
            title: displayTitle,
            solutionItems: titles,
        })

        return {
            ...aiData,
            display_title: displayTitle,
            content: {
                ...(aiData.content || defaultContent),
                eventSolution: {
                    ...(aiData.content?.eventSolution || {}),
                    cards: mapCards(
                        children,
                        aiData.content?.eventSolution?.cards || []
                    ),
                },
            },
        }
    }

    /* =========================
       ✅ EVENTS ROOT
    ========================= */
    if (slugPath.length === 0 || (slugPath.length === 1 && slugPath[0] === "events")) {

        const pageType: PageTypeKey = "events-root"
        const eventTitles = services.map(s => s.title)
        const displayTitle = "Event Management Company in Delhi"

        const aiData = await safeGenerateAI({
            pageType,
            title: displayTitle,
            eventItems: eventTitles,
            solutionItems: solutionTitles,
        })

        return {
            ...aiData,
            display_title: displayTitle,
            content: {
                ...(aiData.content || defaultContent),
                eventType: {
                    ...(aiData.content?.eventType || {}),
                    cards: mapCards(
                        services,
                        aiData.content?.eventType?.cards || []
                    ),
                },
                eventSolution: {
                    ...(aiData.content?.eventSolution || {}),
                    cards: mapCards(
                        solutions,
                        aiData.content?.eventSolution?.cards || []
                    ),
                },
            },
        }
    }

    /* =========================
       ✅ EVENTS DETAIL
    ========================= */
    const pageType: PageTypeKey = "event-detail"

    // const data = findEventPath(slugPath)
    const eventSlugPath = slugPath[0] === "events" ? slugPath.slice(1) : slugPath
    const data = findEventPath(eventSlugPath)
    const current = data?.current

    // 🔍 ADD THIS
    console.log("eventSlugPath:", eventSlugPath)
    console.log("found current:", current?.title, current?.titleSuffix)

    if (!current) {
        console.warn("⚠️ Event not found:", slugPath)
        return safeGenerateAI({
            pageType,
            title: "Event Comapany in Delhi",
            solutionItems: solutionTitles,
        })
    }

    const displayTitle = getDisplayTitle(current)
    const children = current.children || []
    const titles = children.map((c: ServiceNode) => c.title)

    const aiData = await safeGenerateAI({
        pageType,
        title: displayTitle,
        eventItems: titles,
        solutionItems: solutionTitles,
    })

    const Nodedata = findEventPath(slugPath)
    console.log("🔍 slugPath:", slugPath)
    console.log("🔍 findEventPath result:", JSON.stringify(Nodedata, null, 2))

    return {
        ...aiData,
        display_title: displayTitle,
        content: {
            ...(aiData.content || defaultContent),
            eventType: {
                ...(aiData.content?.eventType || {}),
                cards: mapCards(
                    children,
                    aiData.content?.eventType?.cards || []
                ),
            },
            eventSolution: {
                ...(aiData.content?.eventSolution || {}),
                cards: mapCards(
                    solutions,
                    aiData.content?.eventSolution?.cards || []
                ),
            },
        },
    }
}