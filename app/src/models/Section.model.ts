// import { db } from "../config/db"
// import { PageSection } from "../../../types/page.types"

// export const PageSectionModel = {

//     async createSections(sections: PageSection[]): Promise<PageSection[]> {

//         if (!sections.length) return []

//         const { data, error } = await db
//             .from("page_sections")
//             .insert(sections)
//             .select()

//         if (error) {
//             console.error("Section Insert Error:", error)
//             throw new Error("Failed to create sections")
//         }

//         return data as PageSection[]
//     },

//     async getSections(page_id: number): Promise<PageSection[]> {

//         const { data, error } = await db
//             .from("page_sections")
//             .select("*")
//             .eq("page_id", page_id)
//             .order("section_order", { ascending: true })

//         if (error) {
//             console.error("Fetch Sections Error:", error)
//             throw new Error("Failed to fetch sections")
//         }

//         return data as PageSection[]
//     }
// }