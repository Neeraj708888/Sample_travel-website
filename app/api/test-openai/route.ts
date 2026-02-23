import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
    try {
        console.log("Testing OpenAI API...");

        const response = await openai.responses.create({
            model: "gpt-5-nano",
            input: "Say hello in one short sentence.",
        });

        return NextResponse.json({
            success: true,
            model: "gpt-5-nano",
            output: response.output_text,
        });

    } catch (error: any) {
        console.error("OpenAI Error:", error);

        return NextResponse.json({
            success: false,
            error: error.message || "Something went wrong",
        });
    }
}