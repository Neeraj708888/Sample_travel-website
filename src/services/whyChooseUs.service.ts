import { dbConnect } from "../config/db";
import { WhyChooseUsItem } from "../models/WhyChooseUs.model";




export const WhyChooseUsModel = {
    // Read
    async getAll() {
        const { data, error } = await dbConnect.from("why_choose_us")
            .select("*")
            .eq("is_active", true)
            .order("display_order", { ascending: true });

        if (error) throw new Error(`WHyChooseUs Fetch Error: ${error.message}`);
        return data as WhyChooseUsItem[];
    },

    async getById(id: string) {
        const { data, error } = await dbConnect.from("why_choose_us")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw new Error(`WhyChooseUs GetById Error: ${error.message}`);

        return data as WhyChooseUsItem;
    },

    // Create
    async create(item: WhyChooseUsItem) {
        const { data, error } = await dbConnect
            .from("why_choose_us")
            .insert([{ ...item, updated_at: new Date().toISOString() }])
            .select()
            .single();

        if (error) throw new Error(`WhyChooseUs Create Error: ${error.message}`);

        return data as WhyChooseUsItem;
    },

    async update(id: string, updates: Partial<WhyChooseUsItem>) {
        const { data, error } = await dbConnect
            .from("why_choose_us")
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq("id", id)
            .select()
            .single();

        if (error) throw new Error(`WhyChooseUs Update Error: ${error.message}`);

        return data as WhyChooseUsItem;
    },

    // SOft Delete
    async softDelete(id: string) {
        const { data, error } = await dbConnect
            .from("why_choose_us")
            .update({ is_active: false, updated_at: new Date().toISOString() })
            .eq("id", id)
            .select()
            .single();

        if (error) throw new Error(`WhyChooseUs Soft Delete Error: ${error.message}`);

        return data;
    },

    // Reorder
    async reorder(items: { id: string; display_order: number }[]) {
        const updates = items.map(({ id, display_order }) => dbConnect
            .from("why_choose_us")
            .update({ display_order }).eq("id", id));

        await Promise.all(updates);
        return { success: true };
    }
}