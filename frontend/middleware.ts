import { NextResponse } from "next/server";
import { IBackendLocale } from "types/collection-types";
import { BACKEND_URL } from "~utils/envs";

export async function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.search;

  const req = await fetch(`${BACKEND_URL}/api/i18n/locales`);
  const backendLocales: IBackendLocale[] = await req.json();

  const pathnameIsMissingLocale = backendLocales.every(
    (locale) =>
      !pathname.startsWith(`/${locale.code}/`) &&
      pathname !== `/${locale.code}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale && backendLocales?.length) {
    const defauleLocale = backendLocales.find((locale) => locale.isDefault);

    // The rewrite URL is now /en/<route>
    return NextResponse.rewrite(
      new URL(
        `/${defauleLocale?.code}${pathname}${searchParams || ""}`,
        request.url,
      ),
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|images|sitemap|robots).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
