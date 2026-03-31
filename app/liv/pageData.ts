import { db } from "../backend/src/config/db"
import { FAQ } from "../types/page.types"
import { generatePageContent } from "./ai"

export async function getPageData(slug: string) {

    console.log("Checking DB for:", slug)

    const { data, error } = await db
        .from("pages")
        .select("*")
        .eq("slug", slug)
        .maybeSingle()

    if (error) {
        console.error("DB SELECT ERROR:", error)
    }

    if (data) {
        console.log("DB data found")
        return {
            page: data,
            faqs: data.faqs as FAQ[] || []
        }
    }

    console.log("No DB data → calling AI")

    // ✅ "events" prefix hata ke array banao
    const slugArray = slug.split("/").filter(s => s !== "events")
    console.log("Slug Array:", slugArray)

    const aiContent = await generatePageContent(slugArray)
    console.log("AI DATA:", aiContent)

    // ✅ content ko JSON string mein save karo
    const contentToSave = aiContent.content ?? null

    const { data: inserted, error: insertError } = await db
        .from("pages")
        .upsert({
            slug,
            meta_title: aiContent.meta_title,
            meta_description: aiContent.meta_description,
            meta_keywords: aiContent.meta_keywords,
            faqs: aiContent.faqs,
            content: contentToSave,  // ✅ JSON string save ho raha hai
        }, {
            onConflict: "slug"
        })
        .select()
        .maybeSingle()

    if (insertError) {
        console.error("DB INSERT ERROR:", insertError)
    }

    console.log("Saved in DB:", inserted)

    return {
        page: inserted || {
            meta_title: aiContent.meta_title,
            meta_description: aiContent.meta_description,
            meta_keywords: aiContent.meta_keywords,
            content: contentToSave,
        },
        faqs: (inserted?.faqs as FAQ[]) || aiContent.faqs || []
    }
}