import { getCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";


export async function middlware(req: NextRequest) {
    const token = getCookie("token", { req });

    // Define protected routes (add more as needed)
    const protectedRoutes = ["/admin/dashboard", "/admin/settings"];

    // If trying to access protected routes without a token, redirect to login
    if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
}