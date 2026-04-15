import { Request, Response } from "express"
import { PageModel } from "../models/Page.model"
import { CreatePage } from "@/app/types/page.types"


export const createPage = async (req: Request, res: Response) => {

    try {

        console.log("Incoming Body:", req.body)

        // ✅ Type-safe body
        const body: CreatePage = req.body

        const {
            slug,
            meta_title,
            meta_description,
            meta_keywords,
            content,
            faqs = [],
            display_title
        } = body

        // ✅ Basic validation
        if (!slug) {
            return res.status(400).json({ error: "slug is required" })
        }

        if (!content) {
            return res.status(400).json({ error: "content is required" })
        }

        // ✅ Duplicate slug check
        const existing = await PageModel.getPageBySlug(slug)

        if (existing) {
            return res.status(400).json({ error: "Slug already exists" })
        }

        // ✅ Insert into DB (ONLY pages table)
        const page = await PageModel.createPage({
            slug,
            meta_title,
            meta_description,
            meta_keywords,
            content,
            faqs,
            display_title
        })

        if (!page?.id) {
            throw new Error("Page creation failed")
        }

        res.status(201).json({
            success: true,
            message: "Page created successfully",
            page_id: page.id
        })

    } catch (error: any) {

        console.error("Create Page Error:", error)

        res.status(500).json({
            error: error.message || "Internal Server Error"
        })

    }
}