import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This is a placeholder for actual authentication checks
// In a real app, you would use NextAuth, Clerk, etc. to verify the session.
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protected routes: /platform and its sub-segments
    if (pathname.startsWith('/platform')) {
        // For now, we allow access for demo purposes.
        // To block access, you would:
        // const session = await getSession(request);
        // if (!session) return NextResponse.redirect(new URL('/login', request.url));

        console.log(`[Middleware] Accessing protected route: ${pathname}`);
    }

    return NextResponse.next();
}

// Config to match only relevant paths
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
