import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/getSession";

export const middleware = async (request: NextRequest) => {
    const refreshToken = request.cookies.get("RefreshToken")?.value
    const { pathname } = request.nextUrl
    const token = await getSession()

    if (refreshToken && (pathname === "/login" || pathname === "/register")) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    if (pathname === "/admin" && token?.role === "Student") {
        return NextResponse.redirect(new URL("/", request.url))
    }

    if (!refreshToken && (pathname !== "/login" && pathname !== "/register")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}