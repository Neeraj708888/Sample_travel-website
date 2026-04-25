import { NextResponse } from 'next/server'

export function middleware(request: any) {
    const url = request.nextUrl

    if (url.hostname === 'anantahospitality.com') {
        url.hostname = 'www.anantahospitality.com'
        return NextResponse.redirect(url, 301)
    }

    return NextResponse.next()
}

// 👇 YAHI par add karna hai (same file me)
export const config = {
    matcher: '/:path*',
}