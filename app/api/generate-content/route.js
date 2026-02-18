import { NextResponse } from "next/server";
import { generateDestinationContent } from "../../liv/ai";
import { SupabaseClient } from "@supabase/supabase-js";


export async function POST(req) {
    try {
        const { slug } = await req.json();

        if (!slug) {
            return NextResponse.json(
                { error: "Slug is required" },
                { status: 400 }
            );
        }

        const name = slug.replace(/-/g, " ");

        const aiData = await generateDestinationContent(name);

        console.log("AI Generated Data:", aiData);

        if (!aiData || !aiData.content) {
            return NextResponse.json(
                { error: "AI generation failed" },
                { status: 500 }
            );
        }

        const { data, error } = await supabase
            .from("destinations")
            .insert([
                {
                    name,
                    slug,
                    content: aiData.content,
                    meta_title: aiData.meta_title,
                    meta_description: aiData.meta_description,
                    ai_generated: true,
                },
            ])
            .select()
            .single();

        console.log("INSERTED DATA:", data);


        if (error) throw error;

        return NextResponse.json(data);

    } catch (error) {
        console.error("Generate API Error:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}