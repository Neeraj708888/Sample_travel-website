import { generateDestinationContent } from "@/app/liv/ai";
import { supabase } from "@/app/liv/supabase";
import { NextResponse } from "next/server";

function sanitizeSlug(input: string) {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        if (!body?.slug) {
            return NextResponse.json(
                { error: "Slug required" },
                { status: 400 }
            );
        }

        const slug = sanitizeSlug(body.slug);

        /* ---------- 1️⃣ Check Existing ---------- */
        const { data: existing } = await supabase
            .from("destinations")
            .select("*")
            .eq("slug", slug)
            .maybeSingle();

        if (existing) {
            return NextResponse.json({
                message: "Already exists",
                data: existing,
            });
        }

        /* ---------- 2️⃣ Convert Slug → Name ---------- */
        const name = slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

        /* ---------- 3️⃣ Generate AI Content ---------- */
        const aiData = await generateDestinationContent(name);

        console.log("AI Data:", aiData);

        if (!aiData) {
            return NextResponse.json(
                { error: "AI generation failed" },
                { status: 500 }
            );
        }

        const canonical = `${process.env.NEXT_PUBLIC_SITE_URL}/destinations/${slug}`;

        /* ---------- 4️⃣ Schema Markup ---------- */
        const schema_json = {
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name,
            description: aiData.meta_description,
            image: aiData.images?.[0] || "",
            url: canonical,
        };

        const faq_schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: aiData.faqs?.map((faq: any) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        };

        /* ---------- 5️⃣ Insert ---------- */
        const { data, error } = await supabase
            .from("destinations")
            .upsert([
                {
                    name,
                    slug,
                    country: aiData.country || "",
                    hero_title: aiData.hero_title || "",
                    hero_description: aiData.hero_description || "",
                    content: aiData.content || "",
                    highlights: aiData.highlights || [],
                    faqs: aiData.faqs || [],
                    packages: aiData.packages || [],
                    images: aiData.images || [],
                    meta_title: aiData.meta_title || "",
                    meta_description: aiData.meta_description || "",
                    meta_keywords: aiData.meta_keywords || "",
                    canonical_url: canonical,
                    og_image: aiData.images?.[0],
                    schema_json,
                    faq_schema,
                    ai_generated: true,
                    is_published: true,
                },
                { onConflict: "slug" }
            ])
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({
            message: "Destination created",
            data,
        });

    } catch (err: any) {
        console.error("Generate Error:", err);
        return NextResponse.json(
            { error: err.message || "Server Error" },
            { status: 500 }
        );
    }
}
