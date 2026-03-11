// middleware.ts — Protect all routes with NextAuth
export { default } from "next-auth/middleware";

export const config = {
  // Match all routes EXCEPT:
  // - /signin (sign-in page)
  // - /api/auth (NextAuth API routes)
  // - /_next (Next.js internals)
  // - /icons, /images, /favicon.ico (static assets)
  matcher: [
    "/((?!signin|api/auth|_next/static|_next/image|icons|images|favicon\\.ico).*)",
  ],
};
