// backend/types/section.types.ts

export type SectionKey = "whyChoose" | "planningProcess" | "testimonials"

export interface GenerateSectionPayload {
    pageId: string
    sectionKey: SectionKey
    pageTitle: string
}

export interface BulkGeneratePayload {
    sectionKeys: SectionKey[]
    slugPattern?: string   // e.g. "events/artist-mngmt/%"
    overwrite?: boolean    // false = already generated wale skip karo
}

export interface WhyChoosePoint {
    icon: string
    title: string
    desc: string
}

export interface WhyChooseSection {
    heading: string
    subheading: string
    points: WhyChoosePoint[]
}

export interface PlanningStep {
    step: number
    title: string
    desc: string
}

export interface PlanningProcessSection {
    heading: string
    subheading: string
    steps: PlanningStep[]
}

export interface TestimonialItem {
    name: string
    role: string
    rating: number
    review: string
    avatar: string
}

export interface TestimonialsSection {
    heading: string
    subheading: string
    items: TestimonialItem[]
}

export type GeneratedSection =
    | WhyChooseSection
    | PlanningProcessSection
    | TestimonialsSection