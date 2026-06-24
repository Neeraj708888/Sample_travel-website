import { NextRequest, NextResponse } from "next/server";
import { QueryService } from "../services/query.service";

// ─────────────────────────────────────────────
// CREATE QUERY CONTROLLER
// ─────────────────────────────────────────────
export async function createQueryController(
    req: NextRequest
) {

    try {

        const body = await req.json();

        const {
            name,
            email,
            mobile,
            message,
        } = body;

        // ─── Validation ──────────────────────
        if (!name?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name is required",
                },
                {
                    status: 400,
                }
            );
        }

        if (!email?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email is required",
                },
                {
                    status: 400,
                }
            );
        }

        if (!mobile?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Mobile is required",
                },
                {
                    status: 400,
                }
            );
        }

        if (!message?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Message is required",
                },
                {
                    status: 400,
                }
            );
        }

        // ─── Mobile Validation ──────────────────────
        const mobileRegex = /^[0-9]{10}$/;

        if (!mobileRegex.test(mobile)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid mobile number",
                },
                {
                    status: 400,
                }
            );
        }

        // ─── Save Query ──────────────────────
        const data = await QueryService.createQuery(body);

        return NextResponse.json(
            {
                success: true,
                message: "Query submitted successfully",
                data,
            },
            {
                status: 201,
            }
        );

    } catch (err: any) {

        console.error("QUERY CONTROLLER ERROR:", err);

        return NextResponse.json(
            {
                success: false,
                message: err.message || "Internal server error",
            },
            {
                status: 500,
            }
        );
    }
}
// ─────────────────────────────────────────────
// GET QUERY CONTROLLER
// ─────────────────────────────────────────────

export async function getQueryController() {
    try {
        const data = await QueryService.getQuery();

        return NextResponse.json({
            success: true,
            data,
        });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        },
            {
                status: 500
            })
    }
}

// ─────────────────────────────────────────────
// GET SINGLE QUERY CONTROLLER
// ─────────────────────────────────────────────
export async function getQueryByIdController(id: string) {
    try {
        const data = await QueryService.getQueryById(id);

        return NextResponse.json({
            success: true,
            data
        });


    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        },
            {
                status: 404
            })
    }
}
export async function deleteQueryController(id: string) {
    try {
        if (!id) {
            return NextResponse.json({
                success: false,
                message: "Query Id Required"
            },
                {
                    status: 400,
                }
            );
        }

        const data = await QueryService.deleteQuery(id);

        return NextResponse.json({
            success: true,
            message: "Query deleted successfully!",
            data,
        },
            {
                status: 200
            })
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message || "Internal Server error"
        },
            {
                status: 500
            })
    }
}