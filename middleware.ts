import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user is trying to access dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Check for Supabase auth cookie (basic check)
    const hasAuthCookie = request.cookies.has('sb-access-token') || 
                          request.cookies.getAll().some(c => c.name.includes('auth-token'));
    
    // For now, we allow through if they have a cookie, or redirect to login
    // (Full auth check happens client-side in the dashboard for now)
    if (!hasAuthCookie) {
      // Uncomment the line below to force login (we'll activate this later)
      // return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
