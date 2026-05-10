import { Card } from "@/app/types/page.types"

type BaseItem = {
    title: string
    slug: string
    image?: string
    children?: BaseItem[]
}

/**
 * 🔹 Core mapping (AI + static merge)
 */
export function mapCards(
    items: BaseItem[],
    aiCards: Partial<Card>[] = []
): Card[] {

    if (aiCards.length !== items.length) {
        console.warn(
            `mapCards: expected ${items.length}, got ${aiCards.length}`
        )
    }

    return items.map((item, index) => {

        const aiCard = aiCards?.[index]

        return {
            title: item.title,
            slug: item.slug,

            // ✅ controlled type
            cardType: "service",

            // ✅ safe fallback
            desc: aiCard?.desc || "",

            image: item.image || undefined,
        }
    })
}

/**
 * 🔹 Mapping with fallback description
 */
export function mapCardsWithFallback(
    items: BaseItem[],
    aiCards: Partial<Card>[] = [],
    fallbackText = "Professional event services tailored for seamless execution."
): Card[] {

    return items.map((item, index) => {

        const aiCard = aiCards?.[index]

        return {
            title: item.title,
            slug: item.slug,
            cardType: "service",
            image: item.image || undefined,
            desc: aiCard?.desc || fallbackText,
        }
    })
}

/**
 * 🔹 Mapping with hierarchy level (future use)
 */
export function mapCardsWithLevel(
    items: BaseItem[],
    aiCards: Partial<Card>[] = [],
    level = 0
) {

    return items.map((item, index) => {

        const aiCard = aiCards?.[index]

        return {
            title: item.title,
            slug: item.slug,
            level,
            cardType: "service",
            desc: aiCard?.desc || "",
        }
    })
}