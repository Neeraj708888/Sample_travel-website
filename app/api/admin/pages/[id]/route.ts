import { getPageController, updatePageController } from "@/app/src/controllers/Page.controller";
import { NextRequest } from "next/server";


// ─── GET ──────────────────────────────────────────
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    return getPageController(req, id);
}

// ─── PATCH ────────────────────────────────────────
export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    return updatePageController(req, id);
}