// src/controllers/adminAuth.controller.ts
// Aapka EXISTING controller — bilkul same, sirf user info response mein add kiya
import { NextResponse } from 'next/server';
import { findAdminByEmail, validatePassword } from '../services/adminAuth.service';
import { generateToken } from '../utils/jwt';

export const loginController = async (req: Request) => {
    try {
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: 'Email and password required' },
                { status: 400 }
            )
        }

        const user = await findAdminByEmail(email)
        if (!user) {
            return NextResponse.json(
                { success: false, message: 'Invalid email' },
                { status: 401 }
            )
        }

        const match = await validatePassword(password, user.password)
        if (!match) {
            return NextResponse.json(
                { success: false, message: 'Wrong password' },
                { status: 401 }
            )
        }

        const token = generateToken({
            id: user.id,
            email: user.email,
            role: user.role,
        })

        const response = NextResponse.json({
            success: true,
            message: 'Login successful',
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        })

        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24,
        })

        return response
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Server error' },
            { status: 500 }
        )
    }
}

export const logoutController = async () => {
    const response = NextResponse.json({ success: true, message: 'Logout successful' })
    response.cookies.set('admin_token', '', { path: '/', expires: new Date(0) })
    return response
}