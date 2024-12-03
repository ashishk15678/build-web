import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // console.log(request.nextUrl.origin + '/')
    if(request.url == request.nextUrl.origin + '/' && process.env.NODE_ENV != 'development') {
    return NextResponse.redirect(new URL('/landing', request.url))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}