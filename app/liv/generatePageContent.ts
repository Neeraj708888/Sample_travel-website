import { services } from "@/app/data/services"
import { solutions } from "@/app/data/solution"
import type { ServiceNode } from "@/app/data/solution"

import { findEventPath } from "./eventSlugFinder"
import { findSolutionPath } from "./solutionSlugFinder"

import { buildPrompt } from "./ai/promptBuilder"
import { generateAI } from "./ai/generateContent"
import { mapCards } from "./utils/mapCards"
import { PageTypeKey } from "../types/page.types"

// ✅ Helper — title + titleSuffix merge karo
function getDisplayTitle(node: ServiceNode): string {
    return node.titleSuffix
        ? `${node.title} ${node.titleSuffix}`
        : node.title
}

export async function generatePageContent(slugPath: string[]) {

    const solutionTitles = solutions.map(s => s.title)

    // =========================
    // ✅ SOLUTIONS ROOT
    // =========================
    if (slugPath.length === 1 && slugPath[0] === "solutions") {

        const pageType: PageTypeKey = "solutions-root"
        const rootNode = solutions[0] // fallback — actual title use karo

        // ✅ Root solutions page ka title
        const displayTitle = "Event Solutions Company"

        const aiData = await generateAI(
            buildPrompt({
                pageType,
                title: displayTitle,       // ✅ full title AI ko
                solutionItems: solutionTitles,
            })
        )

        return {
            ...aiData,
            display_title: displayTitle,   // ✅ DB mein save karo
            content: {
                ...aiData.content,
                eventSolution: {
                    ...aiData.content.eventSolution,
                    cards: mapCards(solutions, aiData.content.eventSolution.cards),
                },
            },
        }
    }

    // =========================
    // ✅ SOLUTIONS DETAIL
    // =========================
    if (slugPath[0] === "solutions") {

        const pageType: PageTypeKey = "solution-detail"

        const data = findSolutionPath(slugPath.slice(1))
        const current = data?.current

        if (!current) throw new Error("Solution not found")

        // ✅ title + titleSuffix merge karo
        const displayTitle = getDisplayTitle(current)

        const children = current.children || []
        const titles = children.map((c: ServiceNode) => c.title)

        const aiData = await generateAI(
            buildPrompt({
                pageType,
                title: displayTitle,       // ✅ "Event Setup Solutions in Delhi" AI ko milega
                solutionItems: titles,
            })
        )

        return {
            ...aiData,
            display_title: displayTitle,   // ✅ DB mein save
            content: {
                ...aiData.content,
                eventSolution: {
                    ...aiData.content.eventSolution,
                    cards: mapCards(children, aiData.content.eventSolution.cards),
                },
            },
        }
    }

    // =========================
    // ✅ EVENTS ROOT
    // =========================
    if (slugPath.length === 0) {

        const pageType: PageTypeKey = "events-root"
        const eventTitles = services.map(s => s.title)
        console.log("Event Titles for AI coming from Generate Page Content:", eventTitles);
        const displayTitle = "Event Management Company in Delhi"

        const aiData = await generateAI(
            buildPrompt({
                pageType,
                title: displayTitle,
                eventItems: eventTitles,
                solutionItems: solutionTitles,
            })
        )

        return {
            ...aiData,
            display_title: displayTitle,
            content: {
                ...aiData.content,
                eventType: {
                    ...aiData.content.eventType!,
                    cards: mapCards(services, aiData.content.eventType!.cards),
                },
                eventSolution: {
                    ...aiData.content.eventSolution,
                    cards: mapCards(solutions, aiData.content.eventSolution.cards),
                },
            },
        }
    }

    // =========================
    // ✅ EVENTS DETAIL
    // =========================
    const pageType: PageTypeKey = "event-detail"

    const data = findEventPath(slugPath)
    const current = data?.current

    if (!current) throw new Error("Service not found")

    // ✅ Events ke liye bhi titleSuffix support
    const displayTitle = getDisplayTitle(current)

    const children = current.children || []
    const titles = children.map((c: ServiceNode) => c.title)

    const aiData = await generateAI(
        buildPrompt({
            pageType,
            title: displayTitle,
            eventItems: titles,
            solutionItems: solutionTitles,
        })
    )

    return {
        ...aiData,
        display_title: displayTitle,
        content: {
            ...aiData.content,
            eventType: {
                ...aiData.content.eventType!,
                cards: mapCards(children, aiData.content.eventType!.cards),
            },
            eventSolution: {
                ...aiData.content.eventSolution,
                cards: mapCards(solutions, aiData.content.eventSolution.cards),
            },
        },
    }
}