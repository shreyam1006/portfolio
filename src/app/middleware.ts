import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { publicRoutes } from "./constants";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  return NextResponse.next({ headers });
}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap|robots).*)",
      missing: [{ type: "header", key: "next-action" }],
    },
  ],
};
