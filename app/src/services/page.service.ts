import { dbConnect } from "../config/db";

// Update Page
export const pageService = {

    // ─── GET PAGE BY ID ─────────────────────────────
    async getPageById(id: string) {
        const { data, error } = await dbConnect
            .from("pages")
            .select("id, slug, meta_title, meta_description, meta_keywords, faqs, content")
            .eq("id", id)
            .is("deleted_at", null)
            .single();

        if (error || !data) {
            throw new Error("Page not found");
        }

        return data;
    },

    // ─── CHECK SLUG DUPLICATE ──────────────────────
    async checkSlugExists(slug: string, id: string) {
        const { data } = await dbConnect
            .from("pages")
            .select("id")
            .eq("slug", slug.trim())
            .neq("id", id)
            .is("deleted_at", null)
            .single();

        return data;
    },

    // ─── UPDATE PAGE ───────────────────────────────
    async updatePage(id: string, body: any) {
        console.log("ID: ", id);
        const {
            slug,
            meta_title,
            meta_description,
            meta_keywords,
            faqs,
            content,
        } = body;

        const { data, error } = await dbConnect
            .from("pages")
            .update({
                slug: slug.trim(),
                meta_title: meta_title.trim(),
                meta_description: meta_description?.trim() ?? "",
                meta_keywords: meta_keywords?.trim() ?? "",
                faqs: faqs ?? [],
                content: content ?? {},
                // updated_at: new Date().toISOString(), do not send manually now
            })
            .eq("id", id)
            .is("deleted_at", null)
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data;
    },
};