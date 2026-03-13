import { Page } from "../../../types/page.types";
import { db } from "../config/db"

export const PageModel = {

    async createPage(page: Page): Promise<Page> {
        const { data, error } = await db
            .from("pages")
            .insert(page)
            .select()
            .single()

        if (error) throw error;

        return data as Page
    },

    async getPageBySlug(slug: string): Promise<Page | null> {
        const { data, error } = await db
            .from("pages")
            .select("*")
            .eq("slug", slug)
            .single()

        if (error) return null;

        return data as Page;
    }
}