// app/admin/(protected)/pages/page.tsx

import PageSectionsTable from "@/components/admin/PageSectionTable";
import { dbConnect } from "@/src/config/db";




export default async function PagesAdminPage() {
    // FIX: data fetch karo aur fallback [] do
    const { data, error } = await dbConnect
        .from("pages")          // aapki table ka naam
        .select("id, slug, meta_title, created_at")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("[Pages Fetch Error]", error.message);
    }

    return (
        <PageSectionsTable initialPages={data ?? []} />
    );
}