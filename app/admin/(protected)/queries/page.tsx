// app/admin/(protected)/queries/page.tsx

import { dbConnect } from "@/app/src/config/db";


export default async function QueriesPage() {
    const { data: queries } = await dbConnect
        .from("queries")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Queries</h2>
                <p className="text-sm text-gray-400 mt-0.5">{queries?.length ?? 0} total submissions</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-4 gap-4 px-6 py-3 border-b border-gray-100 bg-gray-50">
                    {["Name", "Email", "Phone", "Date"].map((h) => (
                        <span key={h} className="text-xs font-medium text-gray-400 uppercase tracking-wider">{h}</span>
                    ))}
                </div>

                {/* Rows */}
                {queries?.length === 0 && (
                    <p className="text-center text-gray-400 text-sm py-12">Koi query nahi aayi abhi tak</p>
                )}
                {queries?.map((q) => (
                    <div key={q.id} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-medium text-gray-800 truncate">{q.name}</span>
                        <span className="text-sm text-gray-500 truncate">{q.email}</span>
                        <span className="text-sm text-gray-500">{q.phone}</span>
                        <span className="text-sm text-gray-400">
                            {new Date(q.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}