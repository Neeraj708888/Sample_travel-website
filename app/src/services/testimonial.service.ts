import { dbConnect } from "../config/db";
import { TestimonialItem } from "../models/Testimonial.model";

export const TestimonialModel = {
    // Read
    async getAll() {
        const { data, error } = await dbConnect
            .from("testimonials")
            .select("*")
            .eq("is_active", true)
            .order("display_order", { ascending: true });

        if (error) throw new Error(`Testimonial Fetch Error: ${error.message}`);
        return data as TestimonialItem[];
    },

    // Read 
    async getFeatured() {
        const { data, error } = await dbConnect
            .from("testimonials")
            .select("*")
            .eq("is_active", true)
            .order("display_order", { ascending: true });

        if (error) throw new Error(`Testimonial Fetch Error: ${error.message}`);
        return data as TestimonialItem[];
    },

    // Get By ID
    async getById(id: string) {
        const { data, error } = await dbConnect
            .from("testimonials")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw new Error(`Testimonial GetById Error: ${error.message}`);

        return data as TestimonialItem;
    },

    // Create
    async create(item: TestimonialItem) {
        const { data, error } = await dbConnect.from("testimonials")
            .insert([{ ...item, updated_at: new Date().toISOString() }])
            .select()
            .single();

        if (error) throw new Error(`Testimonial Create Error: ${error.message}`);

        return data as TestimonialItem;
    },

    // Update
    async update(id: string, updated: Partial<TestimonialItem>) {
        const { data, error } = await dbConnect
            .from("testimonials")
            .update({ ...updated, updated_at: new Date().toISOString() })
            .eq("id", id)
            .select()
            .single();

        if (error) throw new Error(`Testimonial Update Error: ${error.message}`);

        return data as TestimonialItem;
    },

    // Soft Delete
    async softDelete(id: string) {
        const { data, error } = await dbConnect
            .from("testimonials")
            .update({ is_active: false, updated_at: new Date().toISOString() })
            .eq("id", id)
            .select()
            .single();


        if (error) throw new Error(`Testimonial Soft Delete Error: ${error.message}`);

        return data;
    },

    // Toggel Featured
    async toggleFeatured(id: string, isFeatured: boolean) {
        const { data, error } = await dbConnect
            .from("testimonials")
            .update({ is_featured: isFeatured, updated_at: new Date().toISOString() })
            .eq("id", id)
            .select()
            .single();

        if (error) throw new Error(`Testimonial Toggle Featured Error: ${error.message}`);

        return data;
    }
}