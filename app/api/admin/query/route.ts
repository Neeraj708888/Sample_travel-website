import { createQueryController, getQueryController } from "@/src/controllers/Query.controller";
import { NextRequest } from "next/server";


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