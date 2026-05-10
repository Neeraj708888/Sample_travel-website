// src/components/admin/AdminHeader.tsx
"use client";

import { AdminRole } from "@/app/types/admin.types";



const ROLE_BADGE: Record<AdminRole, { label: string; cls: string }> = {
    super_admin: { label: "Super Admin", cls: "bg-[#c9a96e]/15 text-[#c9a96e] border border-[#c9a96e]/30" },
    manager: { label: "Manager", cls: "bg-blue-500/10 text-blue-400 border border-blue-400/20" },
    staff: { label: "Staff", cls: "bg-gray-400/10 text-gray-400 border border-gray-400/20" },
};

interface Props {
    name: string;
    email: string;
    role: AdminRole;
    onMenuClick: () => void;
}

export default function AdminHeader({ name, email, role, onMenuClick }: Props) {
    const badge = ROLE_BADGE[role];
    const initials = name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);

    return (
        <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 shrink-0 gap-4">
            {/* Left */}
            <div className="flex items-center gap-3">
                {/* Hamburger — mobile only */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                    aria-label="Open sidebar"
                >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div className="hidden sm:block">
                    <p className="text-xs text-gray-400">
                        Welcome, <span className="text-gray-700 font-medium">{name}</span>
                    </p>
                    <p className="text-[11px] text-gray-300">{email}</p>
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                <span className={`hidden sm:inline-flex text-[11px] px-2.5 py-1 rounded-full font-medium ${badge.cls}`}>
                    {badge.label}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <span className="text-[#c9a96e] text-xs font-bold">{initials}</span>
                </div>
            </div>
        </header>
    );
}