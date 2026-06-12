// app/api/admin/sections/status/route.ts
// GET — Page ke sections ka status dekho
// Query: ?pageId=123

import { getSectionStatus } from "@/app/src/controllers/Section.controller"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
    return getSectionStatus(req)
}