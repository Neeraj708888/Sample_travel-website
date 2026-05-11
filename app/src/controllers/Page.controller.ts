import { NextRequest, NextResponse } from "next/server";
import { Request, Response } from "express"
import { PageModel } from "../models/Page.model"
import { CreatePage, PageContent, FAQ } from "@/app/types/page.types"
import { dbConnect } from "../config/db"
import { pageService } from "../services/page.service";

// Create Page
export const createPage = async (req: Request, res: Response) => {
    try {

        console.log("Incoming Body:", req.body)

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

        const parsedContent: PageContent =
            typeof content === "string" ? JSON.parse(content) : content

        console.log("Parsed Content:", parsedContent)
        // =========================
        // ✅ BASIC VALIDATION
        // =========================

        if (!slug) {
            return res.status(400).json({ error: "slug is required" })
        }

        if (!meta_title || !meta_description) {
            return res.status(400).json({
                error: "meta_title and meta_description are required"
            })
        }

        if (!content) {
            return res.status(400).json({ error: "content is required" })
        }

        // =========================
        // ✅ STRUCTURE VALIDATION (AI JSON SAFETY 🔥)
        // =========================

        if (!parsedContent || typeof parsedContent !== "object") {
            throw new Error("Invalid AI content format")
        }

        // 👉 eventType validation (optional but strict if present)
        if (parsedContent.eventType) {
            if (!parsedContent.eventType.title || !Array.isArray(parsedContent.eventType.cards)) {
                return res.status(400).json({
                    error: "Invalid eventType structure"
                })
            }
        }

        // 👉 eventSolution validation (required)
        if (!parsedContent.eventSolution || !Array.isArray(parsedContent.eventSolution.cards)) {
            return res.status(400).json({
                error: "eventSolution is required with cards"
            })
        }

        // =========================
        // ✅ CARD VALIDATION
        // =========================

        const validateCards = (cards: any[]) => {
            return cards.every(
                (c) =>
                    c.title &&
                    c.slug &&
                    typeof c.desc === "string"
            )
        }

        if (parsedContent.eventType?.cards && !validateCards(parsedContent.eventType.cards)) {
            return res.status(400).json({
                error: "Invalid eventType cards"
            })
        }

        if (!validateCards(parsedContent.eventSolution.cards)) {
            return res.status(400).json({
                error: "Invalid eventSolution cards"
            })
        }

        // =========================
        // ✅ FAQ VALIDATION
        // =========================

        const parsedFaqs: FAQ[] = faqs

        if (!Array.isArray(parsedFaqs) || parsedFaqs.length !== 6) {
            return res.status(400).json({
                error: "FAQs must be an array of exactly 6 items"
            })
        }

        const isFaqValid = parsedFaqs.every(
            (f) => f.question && f.answer
        )

        if (!isFaqValid) {
            return res.status(400).json({
                error: "Invalid FAQ structure"
            })
        }

        // =========================
        // ✅ DUPLICATE SLUG CHECK
        // =========================

        const existing = await PageModel.getPageBySlug(slug)

        if (existing) {
            return res.status(400).json({
                error: "Slug already exists"
            })
        }

        // =========================
        // ✅ AUTO CLEAN (Optional 🔥)
        // =========================

        const cleanSlug = slug.toLowerCase().trim().replace(/\s+/g, "-")

        // =========================
        // ✅ SAVE TO DB
        // =========================

        const page = await PageModel.createPage({
            slug: cleanSlug,
            meta_title,
            meta_description,
            meta_keywords,
            content: parsedContent,
            faqs: parsedFaqs,
            display_title
        })

        if (!page?.id) {
            throw new Error("Page creation failed")
        }

        // =========================
        // ✅ SUCCESS RESPONSE
        // =========================

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

// ─── GET PAGE ─────────────────────────────────────
export async function getPageController(
    _req: NextRequest,
    id: string
) {
    try {
        const data = await pageService.getPageById(id);

        return NextResponse.json({
            success: true,
            data,
        });

    } catch (error: any) {

        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 404 }
        );
    }
}

// ─── UPDATE PAGE ──────────────────────────────────
export async function updatePageController(
    req: NextRequest,
    id: string
) {
    try {

        const body = await req.json();

        const {
            slug,
            meta_title,
        } = body;

        // Validation
        if (!slug?.trim() || !meta_title?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Slug aur meta_title required hain",
                },
                { status: 400 }
            );
        }

        // Duplicate Slug Check
        const existing = await pageService.checkSlugExists(
            slug,
            id
        );

        if (existing) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Yeh slug already kisi aur page mein use ho raha hai",
                },
                { status: 409 }
            );
        }

        // Update
        const data = await pageService.updatePage(id, body);

        return NextResponse.json({
            success: true,
            message: "Page update ho gaya",
            data,
        });

    } catch (error: any) {

        console.error("[Page Update Error]", error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Server error",
            },
            { status: 500 }
        );
    }
}
