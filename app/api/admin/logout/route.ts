// app/api/admin/logout/route.ts

import { logoutController } from "@/app/src/controllers/Admin.auth.controller";


export async function POST() {
    return logoutController();
}