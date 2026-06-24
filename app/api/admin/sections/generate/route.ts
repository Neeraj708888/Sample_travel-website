// app/api/admin/sections/generate/route.ts
// POST — Single page, ek section generate karke DB mein save karo
// Body: { pageId: string, sectionKey: "whyChoose"|"planningProcess"|"testimonials", pageTitle: string }



import { generateAndSaveSection } from "@/src/controllers/Section.controller"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    return generateAndSaveSection(req)
}