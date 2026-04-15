export type PageTypeKey =
    | "events-root"
    | "event-detail"
    | "solutions-root"
    | "solution-detail"

/**
 * 🔹 Single Card Type (IMPORTANT)
 */
export interface Card {
    title: string
    slug: string
    cardType?: string
    desc?: string
    // icon?: string
    image?: string
    // Optional
    // cta?: {
    //     label: string
    //     link: string
    // }
}

/**
 * 🔹 Section Type (Reusable)
 */
export interface PageSectionContent {
    title: string
    shortDesc?: string
    cards: Card[]
}

/**
 * 🔹 Page Content (Main AI structure)
 */
export interface PageContent {
    hero: {
        h1: string
        h2: string
        shortDesc: string
        image?: string
    }

    eventType?: PageSectionContent   // for events
    eventSolution?: PageSectionContent // for solutions
}

/**
 * 🔹 FAQ Type
 */
export interface FAQ {
    question: string
    answer: string
}

/**
 * 🔹 Main Page Model (DB)
 */
export interface PageType {
    id?: number
    slug: string

    meta_title: string
    meta_description: string
    meta_keywords?: string

    content: PageContent   // ✅ now REQUIRED (better)
    display_title?: string      // ✅ add karo — title + titleSuffix merged
    faqs: FAQ[]            // ✅ always array (no undefined)
}

/**
 * 🔹 API Return Type
 */
export interface PageData {
    page: PageType
}

export interface CreatePage {
    id?: number

    slug: string

    meta_title: string
    meta_description: string
    meta_keywords?: string

    content: any          // ✅ jsonb
    faqs: any[]           // ✅ jsonb array
    display_title?: string

    created_at?: string
}

/**
 * 🔹 Optional (Future CMS)
 */
// export interface PageSection {
//   id?: number
//   page_id: number
//   component: string
//   content: any
//   section_order: number
// }