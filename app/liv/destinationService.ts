import { supabase } from "@/app/liv/supabase"
import { generateDestinationContent } from "@/app/liv/ai"

export async function getDestination(slug: string) {
    const { data } = await supabase
        .from("destinations")
        .select("*")
        .eq("slug", slug.toLowerCase())
        .eq("is_published", true)
        .maybeSingle()

    return data
}

export async function createDestination(slug: string) {
    const cleanSlug = slug.toLowerCase()
    const formattedName = cleanSlug.replace(/-/g, " ")

    const aiData = await generateDestinationContent(formattedName)
    if (!aiData?.content) return null

    const { data } = await supabase
        .from("destinations")
        .upsert(
            {
                name: aiData.name || formattedName,
                slug: cleanSlug,
                country: aiData.country,
                hero_title: aiData.hero_title,
                hero_description: aiData.hero_description,
                highlights: aiData.highlights,
                faqs: aiData.faqs,
                packages: aiData.packages,
                images: aiData.images,
                content: aiData.content,
                meta_title: aiData.meta_title,
                meta_description: aiData.meta_description,
                meta_keywords: aiData.meta_keywords,
                canonical_url: `${process.env.NEXT_PUBLIC_SITE_URL}/destinations/${cleanSlug}`,
                og_image: aiData.og_image,
                schema_json: aiData.schema_json,
                faq_schema: aiData.faq_schema,
                ai_generated: true,
                is_published: true,
            },
            { onConflict: "slug" }
        )
        .select()
        .single()

    return data
}