import { dbConnect } from "../config/db";
import { QueryModel } from "../models/Query.model";

export const QueryService = {

    // ─────────────────────────────────────────────
    // CREATE QUERY
    // ─────────────────────────────────────────────
    async createQuery(body: QueryModel) {

        const {
            name,
            email,
            mobile,
            message,
        } = body;

        const { data, error } = await dbConnect
            .from("queries")
            .insert([
                {
                    name: name.trim(),
                    email: email.trim(),
                    mobile: mobile.trim(),
                    message: message.trim(),
                },
            ])
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data;
    },

    // ─────────────────────────────────────────────
    // GET ALL QUERY
    // ─────────────────────────────────────────────
    async getQuery() {
        const { data, error } = await dbConnect
            .from("queries")
            .select("*")
            .is("deleted_at", null)
            .order("created_at", { ascending: false });

        if (error) throw new Error(error.message);

        return data;
    },
    // ─────────────────────────────────────────────
    // GET QUERY By Single ID
    // ─────────────────────────────────────────────
    async getQueryById(id: string) {
        const { data, error } = await dbConnect
            .from("queries")
            .select("*")
            .eq("id", id)
            .is("deleted_at", null)
            .single();

        if (error) throw new Error(error.message);

        return data;
    },

    // ─────────────────────────────────────────────
    // Delete Query
    // ─────────────────────────────────────────────
    async deleteQuery(id: string) {

        const { data, error } = await dbConnect
            .from("queries")
            .update({
                deleted_at: new Date().toISOString(),
            })
            .eq("id", id)
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data;
    },
};