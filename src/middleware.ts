import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Add cache control headers for static assets
  const url = request.nextUrl.pathname;
  if (
    url.includes('/images/') || 
    url.includes('/_next/static/') || 
    url.endsWith('.jpg') || 
    url.endsWith('.jpeg') || 
    url.endsWith('.png') || 
    url.endsWith('.webp') || 
    url.endsWith('.svg') || 
    url.endsWith('.ico') || 
    url.endsWith('.css') || 
    url.endsWith('.js')
  ) {
    // Cache static assets for 1 year
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else {
    // Default cache behavior for other routes
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  }
  
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next/static|_next/image|favicon.ico).*)',
    // Match all routes
    '/',
  ],
}; 