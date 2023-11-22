import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(req: NextRequest) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    const main = req.nextUrl.pathname.startsWith("/main")
    const auth = req.nextUrl.pathname.startsWith("/auth")

    if (!session) {
        if (main)
            return NextResponse.redirect(new URL('/auth/login', req.url))
    } else
        if (auth)
            return NextResponse.redirect(new URL('/main', req.url))


    // for landing page later on
    const root = req.nextUrl.pathname == "/"
    if (root)
        return NextResponse.redirect(new URL(session ? '/main' : '/auth/login', req.url))

    return NextResponse.next()
}

export const config = {
    matcher: ['/auth/:path*', '/main/:path*', "/"],
}