import { loginController } from "@/src/controllers/Admin.auth.controller";


export async function POST(req: Request) {
    return loginController(req);
}
