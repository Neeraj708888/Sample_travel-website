// src/services/ai/aiContent.service.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single service that orchestrates all AI generation calls.
// To add a new section: add a prompt file + one new function here.
// ─────────────────────────────────────────────────────────────────────────────

import { generateContent } from "./openai.client";
import { WHY_CHOOSE_US_SYSTEM, whyChooseUsUserPrompt } from "./promts/whyChooseUs.promt";



// import {
//     PLANNING_PROCESS_SYSTEM,
//     planningProcessUserPrompt,
// } from "./prompts/planningProcess.prompt";
// import {
//     TESTIMONIAL_SYSTEM,
//     testimonialUserPrompt,
// } from "./prompts/testimonial.prompt";
// import {
//     SECTION_SEO_SYSTEM,
//     sectionSEOUserPrompt,
// } from "./prompts/sectionSEO.prompt";

// ─── Return types match DB fields exactly ────────────────────────────────────

export type AIWhyChooseUsResult = {
    title: string;
    description: string;
    icon: string;
    icon_alt: string;
    stat_number: string | null;
    stat_label: string | null;
    seo_keyword: string;
};

export type AIPlanningProcessResult = {
    title: string;
    step_label: string;
    short_description: string;
    detailed_description: string;
    icon: string;
    icon_alt: string;
    image_alt: string;
    seo_keyword: string;
    schema_step_name: string;
    schema_step_text: string;
};

export type AITestimonialResult = {
    review_title: string;
    review_text: string;
    client_photo_alt: string;
    suggested_rating: number;
    event_type: string;
};

export type AISectionSEOResult = {
    heading: string;
    subheading: string;
    h2_tag: string;
    cta_text: string;
    schema_section_name: string;
};

// ─── Generator functions ─────────────────────────────────────────────────────

// ✅ page_title + title_suffix added
export async function generateWhyChooseUs(
    title: string,
    companyName: string,
    pageTitle: string,    // ← "Charity Fundraisers"
    titleSuffix: string   // ← "Management Company in Delhi"
): Promise<AIWhyChooseUsResult> {
    return generateContent<AIWhyChooseUsResult>(
        WHY_CHOOSE_US_SYSTEM,
        whyChooseUsUserPrompt(title, companyName, pageTitle, titleSuffix)
    );
}

// export async function generatePlanningProcess(
//     title: string,
//     stepNumber: number,
//     companyName: string
// ): Promise<AIPlanningProcessResult> {
//     return generateJSON<AIPlanningProcessResult>(
//         PLANNING_PROCESS_SYSTEM,
//         planningProcessUserPrompt(title, stepNumber, companyName)
//     );
// }

// export async function generateTestimonial(
//     clientName: string,
//     eventType: string,
//     companyName: string
// ): Promise<AITestimonialResult> {
//     return generateJSON<AITestimonialResult>(
//         TESTIMONIAL_SYSTEM,
//         testimonialUserPrompt(clientName, eventType, companyName)
//     );
// }

// export async function generateSectionSEO(
//     sectionKey: string,
//     heading: string,
//     companyName: string
// ): Promise<AISectionSEOResult> {
//     return generateJSON<AISectionSEOResult>(
//         SECTION_SEO_SYSTEM,
//         sectionSEOUserPrompt(sectionKey, heading, companyName)
//     );
// }

// ─── Section type → generator map (for unified endpoint) ─────────────────────
// Adding a new section = add one entry here + prompt file. Nothing else changes.

export type SectionType =
    | "why_choose_us"
    | "planning_process"
    | "testimonial"
    | "section_seo";

export async function generateContentForSection(
    sectionType: SectionType,
    payload: Record<string, any>,
    companyName: string
) {
    switch (sectionType) {

        case "why_choose_us":
            return generateWhyChooseUs(
                payload.title,
                companyName,
                payload.page_title,    // ← route.ts se aayega
                payload.title_suffix   // ← route.ts se aayega
            );

        // case "planning_process":
        //     return generatePlanningProcess(
        //         payload.title,
        //         payload.step_number,
        //         companyName
        //     );

        // case "testimonial":
        //     return generateTestimonial(
        //         payload.client_name,
        //         payload.event_type ?? "Corporate Event",
        //         companyName
        //     );

        // case "section_seo":
        //     return generateSectionSEO(
        //         payload.section_key,
        //         payload.heading,
        //         companyName
        //     );

        default:
            throw new Error(`Unknown section_type: ${sectionType}`);
    }
}