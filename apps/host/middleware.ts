/**
 * Middleware file can't be moved to utils,
 * because fetch with caching is not available in utils
 */

import { NextResponse } from "next/server";

export async function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  // const pathname = request.nextUrl.pathname;
  // const searchParams = request.nextUrl.search;

  try {
    // let tries = 0;
    // const backendLocales: IBackendLocale[] = [];

    // do {
    //   const locales = await fetchLocales();
    //   backendLocales.push(...locales);
    //   tries++;
    // } while (backendLocales.length === 0 && tries < 5);

    // const pathnameIsMissingLocale = backendLocales.every(
    //   (locale) =>
    //     !pathname.startsWith(`/${locale.code}/`) &&
    //     pathname !== `/${locale.code}`,
    // );

    // // Redirect if there is no locale
    // if (pathnameIsMissingLocale && backendLocales?.length) {
    //   const defauleLocale = backendLocales.find((locale) => locale.isDefault);

    //   const requestHeaders = new Headers(request.headers);
    //   requestHeaders.set(
    //     "x-sps-website-builder-pathname",
    //     request.nextUrl.pathname,
    //   );

    //   const query = new URLSearchParams(request.nextUrl.search);
    //   requestHeaders.set("x-sps-website-builder-query", query.toString());

    //   if (defauleLocale) {
    //     requestHeaders.set("x-sps-website-builder-locale", defauleLocale.code);
    //   }

    //   // The rewrite URL is now /en/<route>
    //   const response = NextResponse.rewrite(
    //     new URL(
    //       `/${defauleLocale?.code}${pathname}${searchParams || ""}`,
    //       request.url,
    //     ),
    //     {
    //       request: {
    //         headers: requestHeaders,
    //       },
    //     },
    //   );

    //   return response;
    // }

    // const requestHeaders = new Headers(request.headers);
    // requestHeaders.set(
    //   "x-sps-website-builder-pathname",
    //   request.nextUrl.pathname,
    // );

    // const query = new URLSearchParams(request.nextUrl.search);
    // requestHeaders.set("x-sps-website-builder-query", query.toString());

    return NextResponse.next();
  } catch (error) {
    console.log("middleware ~ error:", error);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, images, sitemap, robots)
    "/((?!_next|images|sitemap|robots|api|favicon).*)/",
  ],
};
