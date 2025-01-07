import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const refreshToken = request.cookies.get("RefreshToken")?.value
    const { pathname } = request.nextUrl


    if (refreshToken && (pathname === "/login" || pathname === "/register")) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    if (!refreshToken && (pathname !== "/login" && pathname !== "/register")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}