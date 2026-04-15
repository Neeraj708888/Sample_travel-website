import { PageData } from "../../../types/page.types";
import { dbConnect } from "../config/db";


export const PageModel = {

    async createPage(page: PageData): Promise<PageData> {
        const { data, error } = await dbConnect
            .from("pages")
            .insert(page)
            .select()
            .single()

        if (error) throw error;

        return data as PageData
    },

    async getPageBySlug(slug: string): Promise<PageData | null> {
        const { data, error } = await dbConnect
            .from("pages")
            .select("*")
            .eq("slug", slug)
            .single()

        if (error) return null;

        return data as PageData;
    }
}




// import { CreatePageInput, PageType } from "../../../types/page.types";
// import { dbConnect } from "../config/db";

// export const PageModel = {

//     async createPage(page: CreatePageInput): Promise<PageType> {
//         const { data, error } = await dbConnect
//             .from("pages")
//             .insert(page)
//             .select()
//             .single()

//         if (error) throw error;

//         return data as PageType
//     },

//     async getPageBySlug(slug: string): Promise<PageType | null> {
//         const { data, error } = await dbConnect
//             .from("pages")
//             .select("*")
//             .eq("slug", slug)
//             .single()

//         if (error) return null;

//         return data as PageType   // ✅ FIX
//     }
// }