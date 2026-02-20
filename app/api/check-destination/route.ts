import { supabase } from "@/app/liv/supabase";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const { slug } = await req.json();

    const { data } = await supabase
        .from("destinations")
        .select("id")
        .eq("slug", slug)
        .maybeSingle();

    return NextResponse.json({ exists: !!data });
}
