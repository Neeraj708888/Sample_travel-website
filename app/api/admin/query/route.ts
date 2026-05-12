import { NextRequest } from "next/server";

import { createQueryController, getQueryController, } from "@/app/src/controllers/Query.controller";

// ─────────────────────────────────────────────
// POST /api/query
// ─────────────────────────────────────────────
export async function POST(req: NextRequest) {

    return createQueryController(req);
}

// ─────────────────────────────────────────────
// GET /api/query
// ─────────────────────────────────────────────
export async function GET() {
    return getQueryController();
}