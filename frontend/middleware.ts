import { NextResponse } from "next/server";

let locales = [`en`, `ru`];

// Get the preferred locale, similar to above or using a library
function getLocale(request: any) {
  return `en`;
}

export async function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // console.log(`🚀 ~ middleware ~ request:`, request);
    const locale = getLocale(request);
    // console.log(`🚀 ~ middleware ~ locale:`, locale);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    `/((?!_next).*)`,
    // Optional: only run on root (/) URL
    // '/'
  ],
};
