// app/api/admin/sections/route.ts (DELETE)
// DELETE — Page se ek section hata do  
// Query: ?pageId=123&sectionKey=whyChoose


import { deleteSection } from "@/src/controllers/Section.controller"
import { NextRequest } from "next/server"

export async function DELETE(req: NextRequest) {
    return deleteSection(req)
}