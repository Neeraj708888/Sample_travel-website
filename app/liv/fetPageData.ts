// lib/fetchPageData.ts
// Use this in your page.tsx (Server Component) to load all sections in parallel

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function fetchAllPageData() {
    const [
        whyChooseUs,
        testimonials,
        planningProcess,
        sectionSeoRaw,
    ] = await Promise.all([
        supabase
            .from("why_choose_us")
            .select("*")
            .eq("is_active", true)
            .order("display_order"),

        supabase
            .from("testimonials")
            .select("*")
            .eq("is_active", true)
            .order("display_order"),

        supabase
            .from("event_planning_process")
            .select("*")
            .eq("is_active", true)
            .order("display_order"),

        supabase
            .from("section_seo")
            .select("*")
            .eq("is_active", true),
    ]);

    // section_seo → keyed map
    const sectionSeo = Object.fromEntries(
        (sectionSeoRaw.data ?? []).map((s: any) => [s.section_key, s])
    );

    return {
        whyChooseUs: whyChooseUs.data ?? [],
        testimonials: testimonials.data ?? [],
        planningProcess: planningProcess.data ?? [],
        sectionSeo,
    };
}