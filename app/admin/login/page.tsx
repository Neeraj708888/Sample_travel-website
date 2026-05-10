// app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        setLoading(false);

        if (!data.success) {
            setError(data.message ?? "Login failed");
            return;
        }

        router.push("/admin/dashboard");
        router.refresh();
    }

    return (
        <div className="min-h-screen bg-[#f9f6f1] flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-sm p-8">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center mx-auto mb-4">
                        <span className="text-[#c9a96e] font-bold text-lg">A</span>
                    </div>
                    <h1 className="text-xl font-light tracking-[3px] uppercase text-[#1a1a1a]">Ananta</h1>
                    <p className="text-xs tracking-widest text-gray-400 mt-1 uppercase">Admin Panel</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full border text-gray-800 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10 transition-all"
                            placeholder="admin@anantahospitality.com"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Password</label>
                        <input
                            type="password"
                            required
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className="w-full border text-gray-800 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/10 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#1a1a1a] text-[#c9a96e] py-3 rounded-xl text-sm tracking-widest uppercase hover:bg-[#c9a96e] hover:text-[#1a1a1a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                        {loading ? "Please wait..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}