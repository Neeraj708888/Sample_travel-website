// app/admin/(protected)/dashboard/page.tsx
import { dbConnect } from "@/app/src/config/db";
import { verifyToken } from "@/app/src/utils/jwt";
import { cookies } from "next/headers";

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value!;
    const admin = await verifyToken(token);

    const { count: queryCount } = await dbConnect
        .from("queries")
        .select("*", { count: "exact", head: true });

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
                <p className="text-sm text-gray-400 mt-0.5">Overview of your hospitality operations</p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
                <StatCard label="Total Queries" value={queryCount ?? 0} sub="All time" accent="#c9a96e" />
                <StatCard label="Bookings" value={0} sub="Coming soon" accent="#6e9ac9" />
                <StatCard label="Gallery Items" value={0} sub="Coming soon" accent="#9a6ec9" />
            </div>

            {/* Recent queries placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Recent Queries</h3>
                <p className="text-sm text-gray-400">Queries list yahan render hogi — /admin/queries page se</p>
            </div>
        </div>
    );
}

function StatCard({
    label, value, sub, accent,
}: {
    label: string; value: number; sub: string; accent: string;
}) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start justify-between">
            <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">{label}</p>
                <p className="text-3xl font-light" style={{ color: accent }}>{value}</p>
                <p className="text-xs text-gray-300 mt-1">{sub}</p>
            </div>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: accent + "18" }}>
                <div className="w-4 h-4 rounded-full" style={{ background: accent + "60" }} />
            </div>
        </div>
    );
}