// export interface Page {
//     id?: number
//     slug: string
//     meta_title?: string
//     meta_description?: string
//     meta_keywords?: string
// }

export interface PageContent {
    hero?: {
        h1?: string
        h2?: string
        shortDesc?: string
    }
    eventType?: {
        cards?: any[]
        shortDesc?: string
    }
    eventSolution?: {
        shortDesc?: string,
        cards?: any[]
    }
}

export interface Page {
    id?: number
    slug: string
    meta_title?: string
    meta_description?: string
    meta_keywords?: string
    content?: PageContent   // ✅ IMPORTANT (missing tha)
    faqs?: FAQ[]    // ✅ OPTIONAL (DB se aa raha hai)
}

export interface PageData {
    page?: Page   // ✅ reuse main type
    faqs: FAQ[]
}

export interface PageSection {
    id?: number
    page_id: number
    component: string
    content: any
    section_order: number
}

export interface FAQ {
    // id?: number
    // page_id: number
    question: string
    answer: string
}

// export interface PageData {
//     page?: {
//         meta_title?: string
//         meta_description?: string
//         meta_keywords?: string
//     }
//     faqs: FAQ[]
// }