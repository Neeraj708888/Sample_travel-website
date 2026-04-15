import { Card } from "@/app/types/page.types"

/**
 * 🔹 Basic card mapping (AI + static merge)
 *    ✅ Added length guard — warns when AI returns fewer cards than expected
 */
export function mapCards(items: any[], aiCards: any[] = []): Card[] {
    if (aiCards.length !== items.length) {
        console.warn(
            `mapCards: expected ${items.length} cards from AI, got ${aiCards.length}. Some descriptions will be empty.`
        )
    }

    return items.map((item, index) => ({
        title: item.title,
        slug: item.slug,
        cardType: item.title,
        desc: aiCards?.[index]?.desc || "",
        icon: item.icon || null,
        image: item.image || null,
    }))
}

/**
 * 🔹 Safe mapping (fallback descriptions)
 */
export function mapCardsWithFallback(
    items: any[],
    aiCards: any[] = [],
    fallbackText = "Professional services designed for seamless execution."
) {
    return items.map((item, index) => ({
        title: item.title,
        slug: item.slug,
        cardType: item.title,
        icon: item.icon || null,
        image: item.image || null,
        desc: aiCards?.[index]?.desc || fallbackText,
    }))
}

/**
 * 🔹 Add hierarchy info (future use)
 */
export function mapCardsWithLevel(
    items: any[],
    aiCards: any[] = [],
    level = 0
) {
    return items.map((item, index) => ({
        title: item.title,
        slug: item.slug,
        level,
        cardType: item.title,
        desc: aiCards?.[index]?.desc || "",
    }))
}