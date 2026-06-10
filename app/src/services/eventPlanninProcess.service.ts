import { dbConnect } from "../config/db";
import { PlanningProcessItem } from "../models/EventPlanninProcess.model";

export const EventPlanningProcessModel = {
    async getAll() {
        const { data, error } = await dbConnect
            .from("event_planning_process")
            .select("*")
            .eq("is_active", true)
            .order("display_order", { ascending: true });

        if (error) throw new Error(`PlanningProcess Fetch Error: ${error.message}`);
        return data as PlanningProcessItem[];
    },

    async getById(id: string) {
        const { data, error } = await dbConnect
            .from("event_planning_process")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw new Error(`PlanningProcess GetById Error: ${error.message}`);
        return data as PlanningProcessItem;
    },

    async create(item: PlanningProcessItem) {
        const { data, error } = await dbConnect
            .from("event_planning_process")
            .insert([{ ...item, updated_at: new Date().toISOString() }])
            .select()
            .single();

        if (error) throw new Error(`PlanningProcess Create Error: ${error.message}`);
        return data as PlanningProcessItem;
    },

    async update(id: string, updates: Partial<PlanningProcessItem>) {
        const { data, error } = await dbConnect
            .from("event_planning_process")
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq("id", id)
            .select()
            .single();

        if (error) throw new Error(`PlanningProcess Update Error: ${error.message}`);
        return data as PlanningProcessItem;
    },

    async softDelete(id: string) {
        const { data, error } = await dbConnect
            .from("event_planning_process")
            .update({ is_active: false, updated_at: new Date().toISOString() })
            .eq("id", id)
            .select()
            .single();

        if (error) throw new Error(`PlanningProcess Delete Error: ${error.message}`);
        return data;
    },

    async reorder(items: { id: string; display_order: number }[]) {
        const updates = items.map(({ id, display_order }) =>
            dbConnect.from("event_planning_process").update({ display_order }).eq("id", id)
        );
        await Promise.all(updates);
        return { success: true };
    },
};