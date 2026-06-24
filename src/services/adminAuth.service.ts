// src/services/adminAuth.service.ts
// Aapka existing service — exactly same rakha, sirf import fix kiya
import bcrypt from "bcryptjs";
import { dbConnect } from "../config/db";
import { AdminUser } from "@/app/types/admin.types";


export async function findAdminByEmail(email: string): Promise<AdminUser | null> {
    const { data, error } = await dbConnect
        .from("admin_users")
        .select("id, email, name, role, password, is_active, permissions")
        .eq("email", email.trim().toLowerCase())
        .eq("is_active", true)
        .single();

    if (error || !data) return null;
    return data as AdminUser;
}

export async function validatePassword(
    plain: string,
    hash: string
): Promise<boolean> {
    return bcrypt.compare(plain, hash);
}