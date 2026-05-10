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

// import { NextRequest, NextResponse } from 'next/server'
// import jwt from 'jsonwebtoken'

// export function middleware(req: NextRequest) {
//     const token = req.cookies.get('admin_token')?.value

//     const isAdmin = req.nextUrl.pathname.startsWith('/admin')
//     const isLogin = req.nextUrl.pathname.startsWith('/admin/login')

//     if (isAdmin && !isLogin) {
//         if (!token) {
//             return NextResponse.redirect(new URL('/admin/login', req.url))
//         }

//         try {
//             jwt.verify(token, process.env.JWT_SECRET!)
//         } catch {
//             return NextResponse.redirect(new URL('/admin/login', req.url))
//         }
//     }

//     if (isLogin && token) {
//         return NextResponse.redirect(new URL('/admin', req.url))
//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher: ['/admin/:path*'],
// }

// middleware.ts  ← root mein rakho (next.config.ts ke saath)
// NOTE: jsonwebtoken Edge runtime mein kaam nahi karta
// isliye cookies sirf check karte hain — verify server side hoti hai layout mein
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ADMIN = '/admin/login';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Sirf /admin/* protect karo
    if (!pathname.startsWith('/admin') || pathname === PUBLIC_ADMIN) {
        return NextResponse.next();
    }

    const token = req.cookies.get('admin_token')?.value;

    // Token nahi → login redirect
    if (!token) {
        return NextResponse.redirect(new URL(PUBLIC_ADMIN, req.url));
    }

    // Token hai → aage jaao (verify layout mein hogi)
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};