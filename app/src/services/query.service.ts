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
};