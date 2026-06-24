// backend/services/page.service.ts
import { dbConnect } from "../../config/db"
import { GeneratedSection, SectionKey } from "./types/Section.types"

/* ============================================================
   GET PAGE BY ID
============================================================ */
export async function getPageById(pageId: string) {
    const { data, error } = await dbConnect
        .from("pages")
        .select("id, slug, meta_title, content")
        .eq("id", pageId)
        .single()

    if (error) throw new Error(`Page fetch failed: ${error.message}`)
    if (!data) throw new Error(`Page not found: ${pageId}`)

    return data
}

/* ============================================================
   GET PAGES BY SLUG PATTERN (bulk ke liye)
   slugPattern: "events/artist-mngmt/%" — SQL LIKE syntax
============================================================ */
export async function getPagesBySlugPattern(slugPattern: string) {
    const { data, error } = await dbConnect
        .from("pages")
        .select("id, slug, meta_title, content")
        .like("slug", slugPattern)
        .order("id", { ascending: true })

    if (error) throw new Error(`Pages fetch failed: ${error.message}`)
    return data ?? []
}

/* ============================================================
   SAVE SECTION TO PAGE
   Existing content ke saath merge karta hai — kuch delete nahi hoga
============================================================ */
export async function saveSectionToPage(
    pageId: string,
    sectionKey: SectionKey,
    sectionData: GeneratedSection
): Promise<void> {

    // 1. Existing content fetch karo
    const { data: page, error: fetchError } = await dbConnect
        .from("pages")
        .select("content")
        .eq("id", pageId)
        .single()

    if (fetchError) throw new Error(`Fetch failed: ${fetchError.message}`)

    // 2. Parse existing content
    const existingContent =
        typeof page?.content === "string"
            ? JSON.parse(page.content)
            : page?.content ?? {}

    // 3. Merge — sirf naya section add hoga, baaki intact rahega
    const updatedContent = {
        ...existingContent,
        [sectionKey]: sectionData,
    }

    // 4. Save back
    const { error: saveError } = await dbConnect
        .from("pages")
        .update({ content: updatedContent })
        .eq("id", pageId)

    if (saveError) throw new Error(`Save failed: ${saveError.message}`)
}

/* ============================================================
   CHECK IF SECTION ALREADY EXISTS
============================================================ */
export function sectionExists(
    content: any,
    sectionKey: SectionKey
): boolean {
    const parsed =
        typeof content === "string" ? JSON.parse(content) : content ?? {}
    return !!parsed[sectionKey]
}