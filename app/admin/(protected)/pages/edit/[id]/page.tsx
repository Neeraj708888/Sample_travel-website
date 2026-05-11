// app/admin/(protected)/pages/edit/[id]/page.tsx
import EditPageSection from "@/app/components/admin/EditPageSection";
import { dbConnect } from "@/app/src/config/db";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function EditPageRoute({ params }: Props) {

    const { id } = await params;
    const { data, error } = await dbConnect
        .from("pages")
        .select("id, slug, meta_title, meta_description, meta_keywords, faqs, content")
        .eq("id", id)
        .single();

    if (error || !data) notFound();

    return <EditPageSection page={data} />;
}