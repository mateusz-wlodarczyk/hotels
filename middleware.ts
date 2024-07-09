// export { auth as middleware } from "./app/auth";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./app/auth";

const protectedRoutes = ["/settings"];

export default function middleware(req: NextRequest) {
  if (!req.auth && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
