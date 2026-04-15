import { dbConnect } from "../config/db"
import { CreatePage, PageType } from "@/app/types/page.types"

export const PageModel = {

    // =========================
    // ✅ CREATE PAGE
    // =========================
    async createPage(page: CreatePage): Promise<PageType> {

        const payload = {
            ...page,
            content: page.content,   // jsonb
            faqs: page.faqs || []   // ensure array
        }

        const { data, error } = await dbConnect
            .from("pages")
            .insert(payload)
            .select()
            .single()

        if (error) {
            console.error("DB Insert Error:", error)
            throw new Error(error.message)
        }

        return data as PageType
    },

    // =========================
    // ✅ GET PAGE BY SLUG
    // =========================
    async getPageBySlug(slug: string): Promise<PageType | null> {

        const cleanSlug = slug.toLowerCase().trim()

        const { data, error } = await dbConnect
            .from("pages")
            .select("*")
            .eq("slug", cleanSlug)
            .maybeSingle()   // 🔥 better than single()

        if (error) {
            console.error("DB Fetch Error:", error)
            throw new Error(error.message)
        }

        return data as PageType | null
    },

    // =========================
    // ✅ GET ALL PAGES (optional 🔥)
    // =========================
    async getAllPages(): Promise<PageType[]> {

        const { data, error } = await dbConnect
            .from("pages")
            .select("*")
            .order("created_at", { ascending: false })

        if (error) {
            console.error("DB Fetch All Error:", error)
            throw new Error(error.message)
        }

        return data as PageType[]
    },

    // =========================
    // ✅ DELETE PAGE (optional)
    // =========================
    async deletePage(slug: string): Promise<boolean> {

        const { error } = await dbConnect
            .from("pages")
            .delete()
            .eq("slug", slug)

        if (error) {
            console.error("DB Delete Error:", error)
            throw new Error(error.message)
        }

        return true
    }

}