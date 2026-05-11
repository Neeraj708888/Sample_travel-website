import { NextRequest } from "next/server";

import { createQueryController } from "@/app/src/controllers/Query.controller";

// ─────────────────────────────────────────────
// POST /api/query
// ─────────────────────────────────────────────
export async function POST(req: NextRequest) {

    return createQueryController(req);
}