// app/api/admin/sections/bulk-generate/route.ts
// POST — Ek saath hazaron pages ke liye sections generate karo
// Body: { sectionKeys: [], slugPattern: "events/%", overwrite: false }


import { bulkGenerateSections } from "@/src/controllers/Section.controller"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    return bulkGenerateSections(req)
}