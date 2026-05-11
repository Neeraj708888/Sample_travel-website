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