// export interface Page {
//     id?: number
//     slug: string
//     meta_title?: string
//     meta_description?: string
//     meta_keywords?: string
// }

// export interface PageContent {
//     hero?: {
//         h1?: string
//         h2?: string
//         shortDesc?: string
//     }
//     eventType?: {
//         cards?: any[]
//         shortDesc?: string
//     }
//     eventSolution?: {
//         shortDesc?: string,
//         cards?: any[]
//     }
// }

// export interface Page {
//     id?: number
//     slug: string
//     meta_title?: string
//     meta_description?: string
//     meta_keywords?: string
//     content?: PageContent   // ✅ IMPORTANT (missing tha)
//     faqs?: FAQ[]    // ✅ OPTIONAL (DB se aa raha hai)
// }

// export interface PageData {
//     page?: Page   // ✅ reuse main type
//     faqs: FAQ[]
// }

// export interface PageSection {
//     id?: number
//     page_id: number
//     component: string
//     content: any
//     section_order: number
// }

// export interface FAQ {
//     // id?: number
//     // page_id: number
//     question: string
//     answer: string
// }

// export interface PageData {
//     page?: {
//         meta_title?: string
//         meta_description?: string
//         meta_keywords?: string
//     }
//     faqs: FAQ[]
// }


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
}

/**
 * 🔹 Section Type (Reusable)
 */
export interface PageSectionContent {
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

// Insert type
// export interface CreatePageInput {
//     slug: string
//     meta_title: string
//     meta_description: string
//     meta_keywords?: string
// }

/**
 * 🔹 API Return Type
 */
export interface PageData {
    page: PageType
    faqs: FAQ[]
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