// import { db } from "../backend/src/config/db"
// import { FAQ } from "../types/page.types"
// import { generatePageContent } from "./ai"

// export async function getPageData(slug: string) {

//     console.log("Checking DB for:", slug)

//     const { data, error } = await db
//         .from("pages")
//         .select("*")
//         .eq("slug", slug)
//         .maybeSingle()

//     if (error) {
//         console.error("DB SELECT ERROR:", error)
//     }

//     if (data) {
//         console.log("DB data found")
//         return {
//             page: data,
//             faqs: data.faqs as FAQ[] || []
//         }
//     }

//     console.log("No DB data → calling AI")

//     // ✅ "events" prefix hata ke array banao
//     const slugArray = slug.split("/").filter(s => s !== "events")
//     console.log("Slug Array:", slugArray)

//     const aiContent = await generatePageContent(slugArray)
//     console.log("AI DATA:", aiContent)

//     // ✅ content ko JSON string mein save karo
//     const contentToSave = aiContent.content ?? null

//     const { data: inserted, error: insertError } = await db
//         .from("pages")
//         .upsert({
//             slug,
//             meta_title: aiContent.meta_title,
//             meta_description: aiContent.meta_description,
//             meta_keywords: aiContent.meta_keywords,
//             faqs: aiContent.faqs,
//             content: contentToSave,  // ✅ JSON string save ho raha hai
//         }, {
//             onConflict: "slug",
//             ignoreDuplicates: false
//         })
//         .select()
//         .maybeSingle()

//     if (insertError) {
//         console.error("DB INSERT ERROR:", insertError)
//         // ✅ Insert fail hone pe bhi AI data return karo — crash mat karo
//         return {
//             page: {
//                 meta_title: aiContent.meta_title,
//                 meta_description: aiContent.meta_description,
//                 meta_keywords: aiContent.meta_keywords,
//                 content: contentToSave,
//             },
//             faqs: aiContent.faqs || []
//         }
//     }

//     console.log("Saved in DB:", inserted)

//     return {
//         page: inserted || {
//             meta_title: aiContent.meta_title,
//             meta_description: aiContent.meta_description,
//             meta_keywords: aiContent.meta_keywords,
//             content: contentToSave,
//         },
//         faqs: (inserted?.faqs as FAQ[]) || aiContent.faqs || []
//     }
// }


import { db } from "../backend/src/config/db"
import { FAQ } from "../types/page.types"
import { generatePageContent } from "./ai"

// 🔐 GLOBAL LOCK MAP (slug based)
const pageLocks = new Map<string, Promise<any>>()

export async function getPageData(slug: string) {

    console.log("Checking DB for:", slug)

    // ✅ STEP 1: DB check
    const { data, error } = await db
        .from("pages")
        .select("*")
        .eq("slug", slug)
        .maybeSingle()

    if (error) {
        console.error("DB SELECT ERROR:", error)
    }

    if (data) {
        console.log("✅ DB data found")
        return {
            page: data,
            faqs: (data.faqs as FAQ[]) || []
        }
    }

    // 🔐 STEP 2: LOCK CHECK
    if (pageLocks.has(slug)) {
        console.log("⏳ Waiting for existing AI generation:", slug)
        return pageLocks.get(slug)!
    }

    console.log("🚀 No DB data → generating AI for:", slug)

    // 🔐 STEP 3: CREATE LOCK PROMISE
    const lockPromise = (async () => {

        try {
            // ✅ slug handling (IMPORTANT — tumhara requirement)
            const slugArray = slug.split("/").filter(s => s !== "events")

            console.log("Slug Array:", slugArray)

            const aiContent = await generatePageContent(slugArray)

            const contentToSave = aiContent.content ?? null

            // 🔁 FINAL DB CHECK (double safety)
            const { data: recheckData } = await db
                .from("pages")
                .select("*")
                .eq("slug", slug)
                .maybeSingle()

            if (recheckData) {
                console.log("⚡ Data already created by another request")

                return {
                    page: recheckData,
                    faqs: (recheckData.faqs as FAQ[]) || []
                }
            }

            // ✅ UPSERT (safe)
            const { data: inserted, error: insertError } = await db
                .from("pages")
                .upsert({
                    slug,
                    meta_title: aiContent.meta_title,
                    meta_description: aiContent.meta_description,
                    meta_keywords: aiContent.meta_keywords,
                    faqs: aiContent.faqs,
                    content: contentToSave,
                }, {
                    onConflict: "slug",
                    ignoreDuplicates: false
                })
                .select()
                .maybeSingle()

            if (insertError) {
                console.error("❌ DB INSERT ERROR:", insertError)

                return {
                    page: {
                        meta_title: aiContent.meta_title,
                        meta_description: aiContent.meta_description,
                        meta_keywords: aiContent.meta_keywords,
                        content: contentToSave,
                    },
                    faqs: aiContent.faqs || []
                }
            }

            console.log("✅ Saved in DB:", slug)

            return {
                page: inserted || {
                    meta_title: aiContent.meta_title,
                    meta_description: aiContent.meta_description,
                    meta_keywords: aiContent.meta_keywords,
                    content: contentToSave,
                },
                faqs: (inserted?.faqs as FAQ[]) || aiContent.faqs || []
            }

        } finally {
            // 🔓 LOCK RELEASE
            pageLocks.delete(slug)
        }

    })()

    // 🔐 LOCK STORE
    pageLocks.set(slug, lockPromise)

    return lockPromise
}