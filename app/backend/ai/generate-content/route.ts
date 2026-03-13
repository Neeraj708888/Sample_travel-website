import { NextResponse } from "next/server";
import { generateDestinationContent } from "@/app/liv/ai";
import { supabase } from "@/app/liv/supabase";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const slug: string = body?.slug?.toLowerCase().trim();

        if (!slug) {
            return NextResponse.json(
                { error: "Slug is required" },
                { status: 400 }
            );
        }

        /* -------- 1️⃣ Check Existing -------- */
        const { data: existing } = await supabase
            .from("destinations")
            .select("id")
            .eq("slug", slug)
            .single();

        if (existing) {
            return NextResponse.json(existing);
        }

        /* -------- 2️⃣ Clean Name -------- */
        const name = slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

        /* -------- 3️⃣ Generate AI Content -------- */
        const aiData = await generateDestinationContent(name);

        if (!aiData || !aiData.content) {
            return NextResponse.json(
                { error: "AI generation failed" },
                { status: 500 }
            );
        }

        /* -------- 4️⃣ SEO Schema JSON -------- */
        const schema_json = {
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name: name,
            description: aiData.meta_description,
            image: aiData.images?.[0] || "",
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/destination/${slug}`,
        };

        /* -------- 5️⃣ Insert to DB -------- */
        const { data, error } = await supabase
            .from("destinations")
            .insert([
                {
                    name,
                    slug,
                    content: aiData.content,
                    meta_title: aiData.meta_title,
                    meta_description: aiData.meta_description,
                    country: aiData.country || "Unknown",
                    images: aiData.images || [],
                    schema_json,
                    ai_generated: true,
                },
            ])
            .select()
            .maybeSingle();

        if (error) throw error;

        return NextResponse.json(data);

    } catch (error: any) {
        console.error("Generate API Error:", error);
        return NextResponse.json(
            { error: error.message || "Server Error" },
            { status: 500 }
        );
    }
}
