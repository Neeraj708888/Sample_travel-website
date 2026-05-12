// ─────────────────────────────────────────────
// DELETE /api/query

import { deleteQueryController, getQueryByIdController } from "@/app/src/controllers/Query.controller";
import { param } from "framer-motion/client";
import { NextRequest } from "next/server";

interface Props {
    params: Promise<{ id: string }>;
}

// GET SINGEL QUERY
export async function GET(
    _req: NextRequest,
    { params }: Props
) {
    const { id } = await params;

    return getQueryByIdController(id);
}

// DELETE 
export async function DELETE(
    _req: NextRequest,
    { params }: Props
) {
    const { id } = await params;

    return deleteQueryController(id);
}