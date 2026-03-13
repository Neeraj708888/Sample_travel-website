import { Request, Response } from "express"
import { FaqModel } from "../models/FAQ.model"
import { PageModel } from "../models/Page.model"
import { PageSectionModel } from "../models/Section.model"

export const createPage = async (req: Request, res: Response) => {

    try {

        const { slug, meta_title, meta_description, keywords, sections = [], faq = [] } = req.body

        if (!slug) {
            return res.status(400).json({ error: "slug is required" })
        }

        const page = await PageModel.createPage({
            slug,
            meta_title,
            meta_description,
            keywords
        })

        if (!page?.id) {
            throw new Error("Page creation failed")
        }

        // insert sections
        if (sections.length > 0) {

            const sectionData = sections.map((s: any, index: number) => ({
                page_id: page.id,
                component: s.component,
                content: s.content,
                section_order: index + 1
            }))

            await PageSectionModel.createSections(sectionData)
        }

        // insert faq
        if (faq.length > 0) {

            const faqData = faq.map((f: any) => ({
                page_id: page.id,
                question: f.question,
                answer: f.answer
            }))

            await FaqModel.createFaqs(faqData)
        }

        res.status(201).json({
            success: true,
            page_id: page.id
        })

    } catch (error: any) {

        console.error(error)

        res.status(500).json({
            error: error.message
        })

    }

}