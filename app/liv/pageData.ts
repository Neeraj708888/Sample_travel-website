// import { dbConnect } from "../backend/src/config/db"
// import { FAQ } from "../types/page.types"
// import { generatePageContent } from "./generatePageContent"


// // 🔐 GLOBAL LOCK MAP (slug based)
// const pageLocks = new Map<string, Promise<any>>()

// export async function getPageData(slug: string) {

//     console.log("Checking DB for:", slug)

//     // ✅ STEP 1: DB check
//     const { data, error } = await dbConnect
//         .from("pages")
//         .select("*")
//         .eq("slug", slug)
//         .maybeSingle()

//     if (error) {
//         console.error("DB SELECT ERROR:", error)
//     }

//     if (data) {
//         console.log("✅ DB data found")
//         return {
//             page: data,
//             faqs: (data.faqs as FAQ[]) || []
//         }
//     }

//     // 🔐 STEP 2: LOCK CHECK
//     if (pageLocks.has(slug)) {
//         console.log("⏳ Waiting for existing AI generation:", slug)
//         return pageLocks.get(slug)!
//     }

//     console.log("🚀 No DB data → generating AI for:", slug)

//     // 🔐 STEP 3: CREATE LOCK PROMISE
//     const lockPromise = (async () => {

//         try {
//             // ✅ slug handling 
//             let slugPath: string[] = []

//             // Events & Solutions
//             if (slug === "events") {
//                 slugPath = []  // root events
//             } else if (slug === "solutions") {
//                 slugPath = ["solutions"]  // root solutions
//             } else {
//                 slugPath = slug.split("/")  // full path
//             }

//             // const slugArray = slug.split("/").slice(1)

//             console.log("Slug Array:", slugPath)

//             const aiContent = await generatePageContent(slugPath)

//             const contentToSave = aiContent.content ?? null

//             // 🔁 FINAL DB CHECK (double safety)
//             const { data: recheckData } = await dbConnect
//                 .from("pages")
//                 .select("*")
//                 .eq("slug", slug)
//                 .maybeSingle()

//             if (recheckData) {
//                 console.log("⚡ Data already created by another request", slug)

//                 return {
//                     page: recheckData,
//                     faqs: (recheckData.faqs as FAQ[]) || []
//                 }
//             }

//             // ✅ UPSERT (safe)
//             const { data: inserted, error: insertError } = await dbConnect
//                 .from("pages")
//                 .upsert({
//                     slug,
//                     meta_title: aiContent.meta_title,
//                     meta_description: aiContent.meta_description,
//                     meta_keywords: aiContent.meta_keywords,
//                     faqs: aiContent.faqs,
//                     content: contentToSave,
//                 }, {
//                     onConflict: "slug",
//                     ignoreDuplicates: false
//                 })
//                 .select()
//                 .maybeSingle()

//             if (insertError) {
//                 console.error("❌ DB INSERT ERROR FROM PAGE DATA:", insertError)

//                 return {
//                     page: {
//                         meta_title: aiContent.meta_title,
//                         meta_description: aiContent.meta_description,
//                         meta_keywords: aiContent.meta_keywords,
//                         content: contentToSave,
//                     },
//                     faqs: aiContent.faqs || []
//                 }
//             }

//             console.log("✅ Saved in DB:", slug)

//             return {
//                 page: inserted || {
//                     meta_title: aiContent.meta_title,
//                     meta_description: aiContent.meta_description,
//                     meta_keywords: aiContent.meta_keywords,
//                     content: contentToSave,
//                 },
//                 faqs: (inserted?.faqs as FAQ[]) || aiContent.faqs || []
//             }
//         } catch (error) {
//             console.error("AI GENERATION ERROR: ", error)
//             throw error
//         } finally {
//             // 🔓 LOCK RELEASE
//             pageLocks.delete(slug)
//         }

//     })()

//     // 🔐 LOCK STORE
//     pageLocks.set(slug, lockPromise)

//     return lockPromise
// }



import { dbConnect } from "../backend/src/config/db"
import { PageType } from "../types/page.types"
import { generatePageContent } from "./generatePageContent"

// 🔐 GLOBAL LOCK MAP
const pageLocks = new Map<string, Promise<{ page: PageType }>>()

/* =======================================
   🔹 NORMALIZE AI CONTENT (VERY IMPORTANT 🔥)
======================================= */
function normalizeContent(content: any) {
    return {
        hero: {
            h1: content?.hero?.h1 || "",
            h2: content?.hero?.h2 || "",
            shortDesc: content?.hero?.shortDesc || "",
            image: content?.hero?.image || undefined,
        },

        eventType: content?.eventType
            ? {
                title: content.eventType.title || "Event Types",
                shortDesc: content.eventType.shortDesc || "",
                cards: content.eventType.cards || [],
            }
            : undefined,

        eventSolution: content?.eventSolution
            ? {
                title: content.eventSolution.title || "Event Solutions",
                shortDesc: content.eventSolution.shortDesc || "",
                cards: content.eventSolution.cards || [],
            }
            : undefined,
    }
}

/* =======================================
   🔹 MAIN FUNCTION
======================================= */
export async function getPageData(
    slug: string
): Promise<{ page: PageType }> {

    console.log("Checking DB for:", slug)

    const cleanSlug = slug.toLowerCase().trim()

    /* =========================
       ✅ STEP 1: DB CHECK
    ========================= */
    const { data, error } = await dbConnect
        .from("pages")
        .select("*")
        .eq("slug", cleanSlug)
        .maybeSingle()

    if (error) {
        console.error("DB SELECT ERROR:", error)
    }

    if (data) {
        console.log("✅ DB data found")
        return {
            page: data as PageType,
        }
    }

    /* =========================
       🔐 STEP 2: LOCK CHECK
    ========================= */
    if (pageLocks.has(cleanSlug)) {
        console.log("⏳ Waiting for existing AI generation:", cleanSlug)
        return pageLocks.get(cleanSlug)!
    }

    console.log("🚀 No DB data → generating AI for:", cleanSlug)

    /* =========================
       🔐 STEP 3: CREATE LOCK
    ========================= */
    const lockPromise = (async () => {
        try {
            let slugPath: string[] = []

            /* =========================
               ✅ SLUG PARSING
            ========================= */
            if (cleanSlug === "events") {
                slugPath = []
            } else if (cleanSlug === "solutions") {
                slugPath = ["solutions"]
            } else if (cleanSlug.startsWith("solutions/")) {
                slugPath = cleanSlug.split("/")
            } else {
                slugPath = cleanSlug.split("/").slice(1)
            }

            console.log("Slug Array:", slugPath)

            /* =========================
               ✅ AI GENERATION
            ========================= */
            const aiContent = await generatePageContent(slugPath)

            /* =========================
               ✅ SAFETY VALIDATION
            ========================= */
            if (!aiContent?.content?.hero?.h1) {
                throw new Error("Invalid AI content structure")
            }

            /* =========================
               🔁 FINAL DB CHECK
            ========================= */
            const { data: recheckData } = await dbConnect
                .from("pages")
                .select("*")
                .eq("slug", cleanSlug)
                .maybeSingle()

            if (recheckData) {
                console.log("⚡ Already created by another request:", cleanSlug)
                return {
                    page: recheckData as PageType,
                }
            }

            /* =========================
               ✅ NORMALIZE CONTENT 🔥
            ========================= */
            const safeContent = normalizeContent(aiContent.content)

            /* =========================
               ✅ FINAL PAYLOAD
            ========================= */
            const payload: PageType = {
                slug: cleanSlug,
                meta_title: aiContent.meta_title,
                meta_description: aiContent.meta_description,
                meta_keywords: aiContent.meta_keywords,
                content: safeContent, // 🔥 FIXED
                display_title: aiContent.display_title ?? undefined,
                faqs: aiContent.faqs || [],
            }

            /* =========================
               ✅ UPSERT
            ========================= */
            const { data: inserted, error: insertError } = await dbConnect
                .from("pages")
                .upsert(payload, {
                    onConflict: "slug",
                })
                .select()
                .maybeSingle()

            if (insertError) {
                console.error("❌ DB INSERT ERROR:", insertError)

                return {
                    page: payload,
                }
            }

            console.log("✅ Saved in DB:", cleanSlug)

            return {
                page: (inserted as PageType) || payload,
            }

        } catch (error) {
            console.error("AI GENERATION ERROR:", error)
            throw error
        } finally {
            // 🔓 LOCK RELEASE
            pageLocks.delete(cleanSlug)
        }
    })()

    /* =========================
       🔐 STORE LOCK
    ========================= */
    pageLocks.set(cleanSlug, lockPromise)

    return lockPromise
}