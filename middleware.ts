// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//     const url = request.nextUrl

//     if (url.hostname === 'anantahospitality.com') {
//         url.hostname = 'www.anantahospitality.com'
//         return NextResponse.redirect(url, 301)
//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher: '/:path*',
// }

import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(req: NextRequest) {
    const token = req.cookies.get('admin_token')?.value

    const isAdmin = req.nextUrl.pathname.startsWith('/admin')
    const isLogin = req.nextUrl.pathname.startsWith('/admin/login')

    if (isAdmin && !isLogin) {
        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', req.url))
        }

        try {
            jwt.verify(token, process.env.JWT_SECRET!)
        } catch {
            return NextResponse.redirect(new URL('/admin/login', req.url))
        }
    }

    if (isLogin && token) {
        return NextResponse.redirect(new URL('/admin', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}