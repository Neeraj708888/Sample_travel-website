import { Request, Response } from "express";
import { EventPlanningProcessModel } from "../services/eventPlanninProcess.service";

export const EventPlanningProcessController = {

    // GET /api/admin/planning-process
    async getAll(req: Request, res: Response) {
        try {
            const data = await EventPlanningProcessModel.getAll();
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // GET /api/admin/planning-process/:id
    async getById(req: Request, res: Response) {
        try {
            const data = await EventPlanningProcessModel.getById(req.params.id as string);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(404).json({ success: false, message: error.message });
        }
    },

    // POST /api/admin/planning-process
    async create(req: Request, res: Response) {
        try {
            const { step_number, title, short_description } = req.body;

            if (!step_number || !title || !short_description) {
                return res.status(400).json({
                    success: false,
                    message: "step_number, title, and short_description are required",
                });
            }
            if (typeof step_number !== "number" || step_number < 1) {
                return res.status(400).json({
                    success: false,
                    message: "step_number must be a positive number",
                });
            }

            const data = await EventPlanningProcessModel.create({
                ...req.body,
                is_active: true,
                // Auto-generate step_label if not provided: "Step 01", "Step 02" etc.
                step_label: req.body.step_label ?? `Step ${String(step_number).padStart(2, "0")}`,
                display_order: req.body.display_order ?? step_number,
            });

            return res.status(201).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // PUT /api/admin/planning-process/:id
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params as { id: string };

            if (!Object.keys(req.body).length) {
                return res.status(400).json({
                    success: false,
                    message: "No fields provided to update",
                });
            }

            const data = await EventPlanningProcessModel.update(id, req.body);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // DELETE /api/admin/planning-process/:id
    async softDelete(req: Request, res: Response) {
        try {
            await EventPlanningProcessModel.softDelete(req.params.id as string);
            return res.status(200).json({
                success: true,
                message: "Step deactivated successfully",
            });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // PUT /api/admin/planning-process/reorder
    async reorder(req: Request, res: Response) {
        try {
            const { items } = req.body as { items: { id: string; display_order: number }[] };

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

            await EventPlanningProcessModel.reorder(items);
            return res.status(200).json({ success: true, message: "Steps reordered successfully" });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
};