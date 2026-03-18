// import { db } from "../backend/src/config/db"
// import { generateDestinationContent } from "./ai"

// export async function getPageData(slug: string) {

//     /* ---------------------------------- */
//     /* 1️⃣ Check DB first                 */
//     /* ---------------------------------- */

//     const { data, error } = await db
//         .from("pages")
//         .select("*")
//         .eq("slug", slug)
//         .maybeSingle()

//     if (data) {
//         return {
//             page: data,
//             faqs: data.faqs || []
//         }
//     }

//     /* ---------------------------------- */
//     /* 2️⃣ Prepare AI input               */
//     /* ---------------------------------- */

//     const location =
//         slug
//             .split("/")
//             .pop()
//             ?.replace(/-/g, " ") || slug

//     /* ---------------------------------- */
//     /* 3️⃣ AI generate (only once)        */
//     /* ---------------------------------- */

//     const aiContent = await generateDestinationContent(location)

//     /* ---------------------------------- */
//     /* 4️⃣ Save in DB                     */
//     /* ---------------------------------- */

//     const { data: inserted } = await db
//         .from("pages")
//         .insert({
//             slug,
//             meta_title: aiContent.meta_title,
//             meta_description: aiContent.meta_description,
//             meta_keywords: aiContent.meta_keywords,
//             faqs: aiContent.faqs,
//             content: aiContent.content
//         })
//         .select()
//         .maybeSingle()

//     /* ---------------------------------- */
//     /* 5️⃣ Return DB data                 */
//     /* ---------------------------------- */

//     return {
//         page: inserted || aiContent,
//         faqs: inserted?.faqs || aiContent.faqs || []
//     }
// }

import { db } from "../backend/src/config/db"
import { FAQ } from "../types/page.types"
import { generateDestinationContent } from "./ai"

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

    const location =
        slug.split("/").pop()?.replace(/-/g, " ") || slug

    console.log(location);

    const aiContent = await generateDestinationContent(location)

    console.log("AI DATA:", aiContent)

    const { data: inserted, error: insertError } = await db
        .from("pages")
        .upsert({
            slug,
            meta_title: aiContent.meta_title,
            meta_description: aiContent.meta_description,
            meta_keywords: aiContent.meta_keywords,
            faqs: aiContent.faqs,
            content: aiContent.content ?? null
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
            meta_keywords: aiContent.meta_keywords
        },
        faqs: (inserted?.faqs as FAQ[]) || aiContent.faqs || []
    }
}