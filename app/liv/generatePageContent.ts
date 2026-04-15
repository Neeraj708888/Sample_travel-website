import { services } from "@/app/data/services"
import { solutions } from "@/app/data/solution"
import type { ServiceNode } from "@/app/data/solution"

import { findEventPath } from "./eventSlugFinder"
import { findSolutionPath } from "./solutionSlugFinder"

import { buildPrompt } from "./ai/promptBuilder"
import { generateAI } from "./ai/generateContent"
import { mapCards } from "./utils/mapCards"
import { PageTypeKey } from "../types/page.types"

/* =======================================
   🔹 Helper — display title
======================================= */
function getDisplayTitle(node: ServiceNode): string {
    return node.titleSuffix
        ? `${node.title} ${node.titleSuffix}`
        : node.title
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

        const aiData = await generateAI(
            buildPrompt({
                pageType,
                title: displayTitle,
                solutionItems: solutionTitles,
            })
        )

        return {
            ...aiData,
            display_title: displayTitle,
            content: {
                ...aiData.content,
                eventSolution: {
                    ...aiData.content?.eventSolution,
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

        if (!current) throw new Error("Solution not found")

        const displayTitle = getDisplayTitle(current)

        const children = current.children || []
        const titles = children.map((c: ServiceNode) => c.title)

        const aiData = await generateAI(
            buildPrompt({
                pageType,
                title: displayTitle,
                solutionItems: titles,
            })
        )

        return {
            ...aiData,
            display_title: displayTitle,
            content: {
                ...aiData.content,
                eventSolution: {
                    ...aiData.content?.eventSolution,
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
    if (slugPath.length === 0) {

        const pageType: PageTypeKey = "events-root"
        const eventTitles = services.map(s => s.title)

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
                    ...aiData.content?.eventType,
                    cards: mapCards(
                        services,
                        aiData.content?.eventType?.cards || []
                    ),
                },
                eventSolution: {
                    ...aiData.content?.eventSolution,
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

    const data = findEventPath(slugPath)
    const current = data?.current

    if (!current) throw new Error("Service not found")

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
                ...aiData.content?.eventType,
                cards: mapCards(
                    children,
                    aiData.content?.eventType?.cards || []
                ),
            },
            eventSolution: {
                ...aiData.content?.eventSolution,
                cards: mapCards(
                    solutions,
                    aiData.content?.eventSolution?.cards || []
                ),
            },
        },
    }
}