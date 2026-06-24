
export type SectionKey =
    | "hero"
    | "event_types"
    | "event_solutions"
    | "faqs"
    | "why_choose_us"
    | "testimonials"
    | "event_planning_process"
    | "about_event_type"
    | "company_branding";

export interface SectionSEOItem {
    id?: string;
    section_key: SectionKey;
    heading?: string;
    subheading?: string;
    h2_tag?: string;           // keyword-rich H2 for SEO
    cta_text?: string;
    cta_url?: string;
    schema_section_name?: string;
    is_active?: boolean;
    updated_at?: string;
}

