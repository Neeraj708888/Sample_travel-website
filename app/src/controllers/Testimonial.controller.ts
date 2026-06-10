import { Request, Response } from "express";
import { TestimonialModel } from "../services/testimonial.service";

export const TestimonialController = {

    // GET /api/admin/testimonials
    async getAll(req: Request, res: Response) {
        try {
            const data = await TestimonialModel.getAll();
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // GET /api/admin/testimonials/featured
    async getFeatured(req: Request, res: Response) {
        try {
            const data = await TestimonialModel.getFeatured();
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // GET /api/admin/testimonials/:id
    async getById(req: Request, res: Response) {
        try {
            const data = await TestimonialModel.getById(req.params.id as string);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(404).json({ success: false, message: error.message });
        }
    },

    // POST /api/admin/testimonials
    async create(req: Request, res: Response) {
        try {
            const { client_name, review_text, rating } = req.body;

            if (!client_name || !review_text || rating === undefined) {
                return res.status(400).json({
                    success: false,
                    message: "client_name, review_text, and rating are required",
                });
            }
            if (typeof rating !== "number" || rating < 1 || rating > 5) {
                return res.status(400).json({
                    success: false,
                    message: "rating must be a number between 1 and 5",
                });
            }

            const data = await TestimonialModel.create({ ...req.body, is_active: true });
            return res.status(201).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // PUT /api/admin/testimonials/:id
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params as { id: string };

            if (!Object.keys(req.body).length) {
                return res.status(400).json({
                    success: false,
                    message: "No fields provided to update",
                });
            }

            if (req.body.rating !== undefined) {
                if (typeof req.body.rating !== "number" || req.body.rating < 1 || req.body.rating > 5) {
                    return res.status(400).json({
                        success: false,
                        message: "rating must be a number between 1 and 5",
                    });
                }
            }

            const data = await TestimonialModel.update(id, req.body);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // DELETE /api/admin/testimonials/:id
    async softDelete(req: Request, res: Response) {
        try {
            await TestimonialModel.softDelete(req.params.id as string);
            return res.status(200).json({
                success: true,
                message: "Testimonial deactivated successfully",
            });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // PATCH /api/admin/testimonials/:id/feature
    // body: { is_featured: true | false }
    async toggleFeatured(req: Request, res: Response) {
        try {
            const { is_featured } = req.body as { is_featured: boolean };

            if (typeof is_featured !== "boolean") {
                return res.status(400).json({
                    success: false,
                    message: "is_featured must be a boolean",
                });
            }

            const data = await TestimonialModel.toggleFeatured(req.params.id as string, is_featured);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
};