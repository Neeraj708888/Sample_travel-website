import { Request, Response } from "express";
import { WhyChooseUsModel } from "../services/whyChooseUs.service";

export const WhyChooseUsController = {

    // ─── GET ALL ─────────────────────────────────────────────
    // GET /api/admin/why-choose-us
    async getAll(req: Request, res: Response) {
        try {
            const data = await WhyChooseUsModel.getAll();
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // ─── GET BY ID ───────────────────────────────────────────
    // GET /api/admin/why-choose-us/:id
    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params as { id: string };
            const data = await WhyChooseUsModel.getById(id);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(404).json({ success: false, message: error.message });
        }
    },

    // ─── CREATE ──────────────────────────────────────────────
    // POST /api/admin/why-choose-us
    async create(req: Request, res: Response) {
        try {
            const { icon, icon_alt, title, description, stat_number, stat_label, display_order } = req.body;

            if (!title || !description || !icon) {
                return res.status(400).json({
                    success: false,
                    message: "icon, title, and description are required",
                });
            }

            const data = await WhyChooseUsModel.create({
                icon,
                icon_alt: icon_alt ?? "",
                title,
                description,
                stat_number,
                stat_label,
                display_order: display_order ?? 0,
                is_active: true,
            });

            return res.status(201).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // ─── UPDATE ──────────────────────────────────────────────
    // PUT /api/admin/why-choose-us/:id
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params as { id: string };

            if (!Object.keys(req.body).length) {
                return res.status(400).json({
                    success: false,
                    message: "No fields provided to update",
                });
            }

            const data = await WhyChooseUsModel.update(id, req.body);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // ─── SOFT DELETE ─────────────────────────────────────────
    // DELETE /api/admin/why-choose-us/:id
    async softDelete(req: Request, res: Response) {
        try {
            const { id } = req.params as { id: string };
            await WhyChooseUsModel.softDelete(id);
            return res.status(200).json({
                success: true,
                message: "Item deactivated successfully",
            });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // ─── REORDER ─────────────────────────────────────────────
    // PUT /api/admin/why-choose-us/reorder
    // body: { items: [{ id: "uuid", display_order: 1 }, ...] }
    async reorder(req: Request, res: Response) {
        try {
            const { items } = req.body;

            if (!Array.isArray(items) || !items.length) {
                return res.status(400).json({
                    success: false,
                    message: "items must be a non-empty array of { id, display_order }",
                });
            }

            const isValid = items.every(
                (i) => typeof i.id === "string" && typeof i.display_order === "number"
            );
            if (!isValid) {
                return res.status(400).json({
                    success: false,
                    message: "Each item must have id (string) and display_order (number)",
                });
            }

            await WhyChooseUsModel.reorder(items);
            return res.status(200).json({ success: true, message: "Reordered successfully" });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
};