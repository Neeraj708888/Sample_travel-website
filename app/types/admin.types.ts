// src/types/admin.ts

export type AdminRole = "super_admin" | "manager" | "staff";

export interface AdminUser {
    id: string;
    email: string;
    name: string;
    role: AdminRole;
    password: string;
    is_active: boolean;
    permissions: string[];  // [] empty rakhte hain — future mein dynamic
    created_at: string;
}

export interface JwtPayload {
    id: string;
    email: string;
    role: AdminRole;
    iat?: number;
    exp?: number;
}

// Abhi sab empty — future mein DB se dynamic load hogi
export const ROLE_PERMISSIONS: Record<AdminRole, string[]> = {
    super_admin: [],
    manager: [],
    staff: [],
};

// Sidebar nav items — future mein permissions se filter hoga
export const NAV_ITEMS = [
    { href: "/admin/dashboard", label: "Dashboard", key: "dashboard" },
    { href: "/admin/queries", label: "Queries", key: "queries" },
    { href: "/admin/pages", label: "Page Sections", key: "pages" },
    { href: "/admin/bookings", label: "Bookings", key: "bookings" },
    { href: "/admin/gallery", label: "Gallery", key: "gallery" },
    { href: "/admin/blog", label: "Blog", key: "blog" },
    { href: "/admin/users", label: "Users", key: "users" },
];