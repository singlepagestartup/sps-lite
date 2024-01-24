import { NextResponse } from "next/server";
import { IEntity as IBackendLocale } from "~redux/services/backend/api/locale/interfaces";
import { BACKEND_URL } from "~utils/envs";

export async function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.search;

  try {
    let tries = 0;
    const backendLocales = [];

    do {
      const locales = await fetchLocales();
      backendLocales.push(...locales);
      tries++;
    } while (backendLocales.length === 0 && tries < 5);

    const pathnameIsMissingLocale = backendLocales.every(
      (locale) =>
        !pathname.startsWith(`/${locale.code}/`) &&
        pathname !== `/${locale.code}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale && backendLocales?.length) {
      const defauleLocale = backendLocales.find((locale) => locale.isDefault);

      // The rewrite URL is now /en/<route>
      const response = NextResponse.rewrite(
        new URL(
          `/${defauleLocale?.code}${pathname}${searchParams || ""}`,
          request.url,
        ),
      );

      return response;
    }
  } catch (error) {
    console.log("🚀 ~ middleware ~ error:", error);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, images, sitemap, robots)
    "/((?!_next|images|sitemap|robots|api|favicon).*)",
  ],
};

async function fetchLocales() {
  try {
    const req = await fetch(`${BACKEND_URL}/api/i18n/locales`);
    const res = await req.json();

    if (!Array.isArray(res)) {
      if (res?.error?.message) {
        throw new Error(res.error.message);
      }

      throw new Error("No locales found");
    }

    const backendLocales: IBackendLocale[] = res;

    return backendLocales;
  } catch (error) {
    console.log("🚀 ~ fetchLocales ~ error:", error);
    return [];
  }
}
