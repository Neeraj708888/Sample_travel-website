// app/admin/(protected)/AdminShell.tsx
"use client";

import AdminHeader from "@/app/components/admin/AdminHeader";
import AdminSidebar from "@/app/components/admin/AdminSidebar";
import { AdminRole } from "@/app/types/admin.types";
import { useState } from "react";


interface Props {
    children: React.ReactNode;
    adminName: string;
    adminEmail: string;
    adminRole: AdminRole;
}

export function AdminShell({ children, adminName, adminEmail, adminRole }: Props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex h-screen bg-[#f4f4f2] overflow-hidden">
            <AdminSidebar
                role={adminRole}
                mobileOpen={mobileOpen}
                onMobileClose={() => setMobileOpen(false)}
            />
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                <AdminHeader
                    name={adminName}
                    email={adminEmail}
                    role={adminRole}
                    onMenuClick={() => setMobileOpen(true)}
                />
                <main className="flex-1 overflow-y-auto">
                    <div className="p-4 lg:p-6 max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}