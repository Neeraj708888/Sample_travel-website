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
import { FAQ } from "../types/page.types"
import { generatePageContent } from "./generatePageContent"

// 🔐 GLOBAL LOCK MAP (slug based)
const pageLocks = new Map<string, Promise<any>>()

export async function getPageData(slug: string) {

    console.log("Checking DB for:", slug)

    // ✅ STEP 1: DB check
    const { data, error } = await dbConnect
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
            let slugPath: string[] = []

            // ✅ FIXED: slug splitting logic
            // /events          → slugPath = []               → events-root
            // /events/c1/c2    → slugPath = ["c1","c2"]      → event-detail
            // /solutions       → slugPath = ["solutions"]    → solutions-root
            // /solutions/c1/c2 → slugPath = ["solutions","c1","c2"] → solution-detail
            if (slug === "events") {
                slugPath = []
            } else if (slug === "solutions") {
                slugPath = ["solutions"]
            } else if (slug.startsWith("solutions/")) {
                // Keep "solutions" as first segment — generatePageContent checks slugPath[0]
                slugPath = slug.split("/")
            } else {
                // Events nested: "events/corporate/gala" → strip leading "events"
                slugPath = slug.split("/").slice(1)
            }

            console.log("Slug Array:", slugPath)

            const aiContent = await generatePageContent(slugPath)

            const contentToSave = aiContent.content ?? null

            // 🔁 FINAL DB CHECK (double safety)
            const { data: recheckData } = await dbConnect
                .from("pages")
                .select("*")
                .eq("slug", slug)
                .maybeSingle()

            if (recheckData) {
                console.log("⚡ Data already created by another request", slug)
                return {
                    page: recheckData,
                    faqs: (recheckData.faqs as FAQ[]) || []
                }
            }

            // ✅ UPSERT (safe)
            const { data: inserted, error: insertError } = await dbConnect
                .from("pages")
                .upsert({
                    slug,
                    meta_title: aiContent.meta_title,
                    meta_description: aiContent.meta_description,
                    meta_keywords: aiContent.meta_keywords,
                    faqs: aiContent.faqs,
                    content: contentToSave,
                    display_title: aiContent.display_title || null,  // ✅ add karo
                }, {
                    onConflict: "slug",
                    ignoreDuplicates: false
                })
                .select()
                .maybeSingle()

            if (insertError) {
                console.error("❌ DB INSERT ERROR FROM PAGE DATA:", insertError)
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

        } catch (error) {
            console.error("AI GENERATION ERROR: ", error)
            throw error
        } finally {
            // 🔓 LOCK RELEASE
            pageLocks.delete(slug)
        }

    })()

    // 🔐 LOCK STORE
    pageLocks.set(slug, lockPromise)

    return lockPromise
}