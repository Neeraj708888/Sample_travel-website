import { logoutController } from "../../src/controllers/Admin.auth.controller";


export async function POST() {
    return logoutController()
}