import { Request, Response } from "express";
import { SectionKey } from "../models/Section.model";
import { SectionSEOModel } from "../services/sections.service";

const VALID_SECTION_KEYS: SectionKey[] = [
    "hero",
    "event_types",
    "event_solutions",
    "faqs",
    "why_choose_us",
    "testimonials",
    "event_planning_process",
    "about_event_type",
    "company_branding",
];

export const SectionSEOController = {

    // GET /api/admin/section-seo
    async getAll(req: Request, res: Response) {
        try {
            const data = await SectionSEOModel.getAll();
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // GET /api/admin/section-seo/:key
    async getByKey(req: Request, res: Response) {
        try {
            const key = req.params.key as SectionKey;

            if (!VALID_SECTION_KEYS.includes(key)) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid section_key. Valid keys: ${VALID_SECTION_KEYS.join(", ")}`,
                });
            }

            const data = await SectionSEOModel.getByKey(key);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(404).json({ success: false, message: error.message });
        }
    },

    // PUT /api/admin/section-seo/:key
    async updateByKey(req: Request, res: Response) {
        try {
            const key = req.params.key as SectionKey;

            if (!VALID_SECTION_KEYS.includes(key)) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid section_key. Valid keys: ${VALID_SECTION_KEYS.join(", ")}`,
                });
            }
            if (!Object.keys(req.body).length) {
                return res.status(400).json({
                    success: false,
                    message: "No fields provided to update",
                });
            }

            const data = await SectionSEOModel.updateByKey(key, req.body);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },

    // POST /api/admin/section-seo  (upsert — insert or update by section_key)
    async upsert(req: Request, res: Response) {
        try {
            const { section_key } = req.body;

            if (!section_key) {
                return res.status(400).json({
                    success: false,
                    message: "section_key is required",
                });
            }
            if (!VALID_SECTION_KEYS.includes(section_key)) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid section_key. Valid keys: ${VALID_SECTION_KEYS.join(", ")}`,
                });
            }

            const data = await SectionSEOModel.upsert(req.body);
            return res.status(200).json({ success: true, data });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
};