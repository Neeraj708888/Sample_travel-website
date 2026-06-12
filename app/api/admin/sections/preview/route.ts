// app/api/admin/sections/preview/route.ts  
// POST — Preview only (DB save nahi hoga)
// Body: { sectionKey: string, pageTitle: string }

import { previewSection } from "@/app/src/controllers/Section.controller"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    return previewSection(req)
}