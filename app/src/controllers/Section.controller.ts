// backend/controllers/section.controller.ts
import { NextRequest, NextResponse } from "next/server"
import { BulkGeneratePayload, GenerateSectionPayload, SectionKey } from "../services/ai/types/Section.types"
import { aiGenerateSection } from "../services/ai/Generate.section.service"
import { getPageById, getPagesBySlugPattern, saveSectionToPage, sectionExists } from "../services/ai/Page.service"


const VALID_KEYS: SectionKey[] = ["whyChoose", "planningProcess", "testimonials"]

/* ============================================================
   1. SINGLE PAGE — EK SECTION GENERATE + SAVE
   POST /api/admin/sections/generate
============================================================ */
export async function generateAndSaveSection(req: NextRequest) {
    try {
        const body: GenerateSectionPayload = await req.json()
        const { pageId, sectionKey, pageTitle } = body

        // ── Validation ──
        if (!pageId) return error400("pageId required hai")
        if (!pageTitle) return error400("pageTitle required hai")
        if (!VALID_KEYS.includes(sectionKey))
            return error400(`Invalid sectionKey. Valid: ${VALID_KEYS.join(", ")}`)

        // ── AI se generate karo ──
        const generated = await aiGenerateSection(sectionKey, pageTitle)

        // ── DB mein save karo ──
        await saveSectionToPage(pageId, sectionKey, generated)

        return NextResponse.json({
            success: true,
            message: `${sectionKey} generated and saved`,
            data: generated,
        })

    } catch (err: any) {
        console.error("[generateAndSaveSection]", err)
        return error500(err.message)
    }
}

/* ============================================================
   2. SINGLE PAGE — PREVIEW ONLY (save nahi karega)
   POST /api/admin/sections/preview
============================================================ */
export async function previewSection(req: NextRequest) {
    try {
        const body = await req.json()
        const { sectionKey, pageTitle } = body

        if (!pageTitle) return error400("pageTitle required hai")
        if (!VALID_KEYS.includes(sectionKey))
            return error400(`Invalid sectionKey`)

        const generated = await aiGenerateSection(sectionKey, pageTitle)

        return NextResponse.json({
            success: true,
            data: generated,
        })

    } catch (err: any) {
        console.error("[previewSection]", err)
        return error500(err.message)
    }
}

/* ============================================================
   3. BULK GENERATE — MULTIPLE PAGES + MULTIPLE SECTIONS
   POST /api/admin/sections/bulk-generate
   
   Body: {
     sectionKeys: ["whyChoose", "planningProcess", "testimonials"],
     slugPattern: "events/artist-mngmt/%",
     overwrite: false
   }
============================================================ */
export async function bulkGenerateSections(req: NextRequest) {
    try {
        const body: BulkGeneratePayload = await req.json()
        const {
            sectionKeys,
            slugPattern = "events/%",
            overwrite = false,
        } = body

        if (!sectionKeys?.length)
            return error400("sectionKeys array required hai")

        const invalidKeys = sectionKeys.filter((k) => !VALID_KEYS.includes(k))
        if (invalidKeys.length)
            return error400(`Invalid keys: ${invalidKeys.join(", ")}`)

        // ── Saare matching pages fetch karo ──
        const pages = await getPagesBySlugPattern(slugPattern)

        if (!pages.length)
            return NextResponse.json({
                success: true,
                message: "Koi page nahi mila is pattern se",
                total: 0,
                results: [],
            })

        const results: Array<{
            pageId: string
            slug: string
            sectionKey: SectionKey
            status: "generated" | "skipped" | "error"
            error?: string
        }> = []

        // ── Har page, har section ──
        for (const page of pages) {
            for (const sectionKey of sectionKeys) {

                // overwrite: false hone par skip karo
                if (!overwrite && sectionExists(page.content, sectionKey)) {
                    results.push({
                        pageId: page.id,
                        slug: page.slug,
                        sectionKey,
                        status: "skipped",
                    })
                    continue
                }

                try {
                    const pageTitle = page.meta_title || page.slug

                    // AI generate
                    const generated = await aiGenerateSection(sectionKey, pageTitle)

                    // DB save
                    await saveSectionToPage(page.id, sectionKey, generated)

                    results.push({
                        pageId: page.id,
                        slug: page.slug,
                        sectionKey,
                        status: "generated",
                    })

                    // Rate limiting — OpenAI throttle se bachne ke liye
                    await sleep(600)

                } catch (err: any) {
                    results.push({
                        pageId: page.id,
                        slug: page.slug,
                        sectionKey,
                        status: "error",
                        error: err.message,
                    })
                }
            }
        }

        // ── Summary ──
        const generated = results.filter((r) => r.status === "generated").length
        const skipped = results.filter((r) => r.status === "skipped").length
        const errors = results.filter((r) => r.status === "error").length

        return NextResponse.json({
            success: true,
            summary: {
                totalPages: pages.length,
                totalSections: results.length,
                generated,
                skipped,
                errors,
            },
            results,
        })

    } catch (err: any) {
        console.error("[bulkGenerateSections]", err)
        return error500(err.message)
    }
}

/* ============================================================
   4. GET PAGE SECTIONS STATUS
   GET /api/admin/sections/status?pageId=123
============================================================ */
export async function getSectionStatus(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const pageId = searchParams.get("pageId")

        if (!pageId) return error400("pageId required hai")

        const page = await getPageById(pageId)

        const content =
            typeof page.content === "string"
                ? JSON.parse(page.content)
                : page.content ?? {}

        const status = VALID_KEYS.reduce((acc, key) => {
            acc[key] = {
                exists: !!content[key],
                // Agar exists hai toh basic info bhi do
                preview: content[key]
                    ? {
                        heading: content[key].heading ?? null,
                        itemCount:
                            content[key].points?.length ??
                            content[key].steps?.length ??
                            content[key].items?.length ??
                            0,
                    }
                    : null,
            }
            return acc
        }, {} as Record<string, any>)

        return NextResponse.json({
            success: true,
            pageId,
            slug: page.slug,
            title: page.meta_title,
            sections: status,
        })

    } catch (err: any) {
        console.error("[getSectionStatus]", err)
        return error500(err.message)
    }
}

/* ============================================================
   5. DELETE A SECTION FROM PAGE
   DELETE /api/admin/sections?pageId=123&sectionKey=whyChoose
============================================================ */
export async function deleteSection(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const pageId = searchParams.get("pageId")
        const sectionKey = searchParams.get("sectionKey") as SectionKey

        if (!pageId) return error400("pageId required hai")
        if (!sectionKey) return error400("sectionKey required hai")
        if (!VALID_KEYS.includes(sectionKey))
            return error400(`Invalid sectionKey`)

        const page = await getPageById(pageId)

        const content =
            typeof page.content === "string"
                ? JSON.parse(page.content)
                : page.content ?? {}

        // Section delete karo
        delete content[sectionKey]

        const { createClient } = await import("@supabase/supabase-js")
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        )

        const { error } = await supabase
            .from("pages")
            .update({ content })
            .eq("id", pageId)

        if (error) throw new Error(error.message)

        return NextResponse.json({
            success: true,
            message: `${sectionKey} deleted from page ${pageId}`,
        })

    } catch (err: any) {
        console.error("[deleteSection]", err)
        return error500(err.message)
    }
}

/* ============================================================
   HELPERS
============================================================ */
function error400(msg: string) {
    return NextResponse.json({ success: false, message: msg }, { status: 400 })
}

function error500(msg: string) {
    return NextResponse.json(
        { success: false, message: msg ?? "Internal server error" },
        { status: 500 }
    )
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}