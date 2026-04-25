import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl

    if (url.hostname === 'anantahospitality.com') {
        url.hostname = 'www.anantahospitality.com'
        return NextResponse.redirect(url, 301)
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/:path*',
}