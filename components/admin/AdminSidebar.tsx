// src/components/admin/AdminSidebar.tsx
"use client";

import { AdminRole, NAV_ITEMS } from "@/app/types/admin.types";
import Link from "next/link";
import { usePathname } from "next/navigation";


const ICONS: Record<string, React.ReactNode> = {
    dashboard: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
    queries: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
    bookings: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
    pages: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75h10.5A2.25 2.25 0 0119.5 6v12a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V6a2.25 2.25 0 012.25-2.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25h7.5M8.25 12h7.5M8.25 15.75h4.5" /></svg>,

    gallery: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
    blog: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" /></svg>,
    users: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
};

interface Props {
    role: AdminRole;
    mobileOpen: boolean;
    onMobileClose: () => void;
}

export default function AdminSidebar({ role, mobileOpen, onMobileClose }: Props) {
    const pathname = usePathname();

    // Permissions abhi [] empty hain — sabko show karo
    // Future mein: const nav = NAV_ITEMS.filter(n => userPermissions.includes(n.key))
    const nav = NAV_ITEMS;

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        window.location.href = "/admin/login";
    }

    const Content = () => (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="px-5 pt-7 pb-5">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#c9a96e] flex items-center justify-center shrink-0">
                        <span className="text-[#1a1a1a] font-bold text-sm">A</span>
                    </div>
                    <div>
                        <h1 className="text-white text-sm font-medium tracking-[2px] uppercase">Ananta</h1>
                        <p className="text-white/25 text-[10px] tracking-widest uppercase">{role.replace("_", " ")}</p>
                    </div>
                </div>
            </div>

            <div className="mx-4 h-px bg-white/8 mb-3" />

            {/* Nav items */}
            <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto pb-2">
                <p className="text-[10px] text-white/20 uppercase tracking-widest px-3 pb-2 pt-1">
                    Navigation
                </p>
                {nav.map((item) => {
                    const active =
                        pathname === item.href ||
                        (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onMobileClose}
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 ${active
                                ? "bg-[#c9a96e] text-[#1a1a1a] font-medium shadow-md shadow-[#c9a96e]/25"
                                : "text-white/45 hover:text-white hover:bg-white/8"
                                }`}
                        >
                            <span className={`shrink-0 ${active ? "text-[#1a1a1a]" : "text-white/35 group-hover:text-white/70"}`}>
                                {ICONS[item.key]}
                            </span>
                            {item.label}
                            {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/35 shrink-0" />}
                        </Link>
                    );
                })}
            </nav>

            {/* Logout */}
            <div className="px-3 pb-5 pt-3 border-t border-white/8">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/35 hover:text-red-400 hover:bg-red-500/10 transition-all"
                >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    Logout
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop sidebar */}
            <aside className="hidden lg:flex w-56 bg-[#111] flex-col h-full shrink-0 border-r border-white/5">
                <Content />
            </aside>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onMobileClose} />
            )}

            {/* Mobile drawer */}
            <aside
                className={`fixed top-0 left-0 h-full w-60 bg-[#111] z-50 lg:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button
                    onClick={onMobileClose}
                    className="absolute top-4 right-4 p-1.5 text-white/30 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <Content />
            </aside>
        </>
    );
}