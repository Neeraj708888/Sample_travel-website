export interface Page {
    id?: number
    slug: string
    meta_title?: string
    meta_description?: string
    keywords?: string[]
}

export interface PageSection {
    id?: number
    page_id: number
    component: string
    content: any
    section_order: number
}

export interface FAQ {
    id?: number
    page_id: number
    question: string
    answer: string
}