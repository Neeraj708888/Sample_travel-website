// import jwt from 'jsonwebtoken'

// export const generateToken = (payload: object) => {
//     return jwt.sign(payload, process.env.JWT_SECRET!, {
//         expiresIn: '1d',
//     })
// }

// src/utils/jwt.ts
// Aapka existing generateToken — isme sirf verifyToken add kiya hai

// src/utils/jwt.ts
// Aapka existing generateToken — isme sirf verifyToken add kiya hai
import { JwtPayload } from "@/app/types/admin.types";
import jwt from "jsonwebtoken";


const SECRET = process.env.JWT_SECRET!;

export function generateToken(payload: {
    id: string;
    email: string;
    role: string;
}): string {
    return jwt.sign(payload, SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string): JwtPayload | null {
    try {
        return jwt.verify(token, SECRET) as JwtPayload;
    } catch {
        return null;
    }
}