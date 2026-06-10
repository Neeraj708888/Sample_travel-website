import { dbConnect } from "../config/db";
import { SectionKey, SectionSEOItem } from "../models/Section.model";

export const SectionSEOModel = {
    // ─── GET ALL SECTIONS ───────────────────────────────────
    async getAll() {
        const { data, error } = await dbConnect
            .from("section_seo")
            .select("*")
            .eq("is_active", true);

        if (error) throw new Error(`SectionSEO Fetch Error: ${error.message}`);
        return data as SectionSEOItem[];
    },

    // ─── GET BY KEY ─────────────────────────────────────────
    async getByKey(section_key: SectionKey) {
        const { data, error } = await dbConnect
            .from("section_seo")
            .select("*")
            .eq("section_key", section_key)
            .single();

        if (error) throw new Error(`SectionSEO GetByKey Error: ${error.message}`);
        return data as SectionSEOItem;
    },

    // ─── UPSERT (create if not exists, update if exists) ────
    async upsert(item: SectionSEOItem) {
        const { data, error } = await dbConnect
            .from("section_seo")
            .upsert(
                { ...item, updated_at: new Date().toISOString() },
                { onConflict: "section_key" }
            )
            .select()
            .single();

        if (error) throw new Error(`SectionSEO Upsert Error: ${error.message}`);
        return data as SectionSEOItem;
    },

    // ─── UPDATE BY KEY ──────────────────────────────────────
    async updateByKey(section_key: SectionKey, updates: Partial<SectionSEOItem>) {
        const { data, error } = await dbConnect
            .from("section_seo")
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq("section_key", section_key)
            .select()
            .single();

        if (error) throw new Error(`SectionSEO Update Error: ${error.message}`);
        return data as SectionSEOItem;
    },
};