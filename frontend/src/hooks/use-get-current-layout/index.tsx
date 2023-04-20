"use client";

import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import { useGetLayoutsQuery } from "~redux/services/backend/models/layouts";

export default function useGetCurrentLayout() {
  const pathname = usePathname();
  const params = useParams();
  const { data: layouts } = useGetLayoutsQuery({
    locale: params?.locale,
  });

  const layout = useMemo(() => {
    if (!layouts?.length) {
      return;
    }

    let targetLayout;
    const splittedPathname = pathname
      ?.split(`/`)
      .filter((element) => element !== ``)
      .map((element) => {
        if (params?.locale) {
          if (element !== params.locale) {
            return element;
          }
        } else {
          return element;
        }
      })
      .filter((element) => element !== undefined);

    for (const backendLayout of layouts) {
      if (backendLayout.pages) {
        for (const page of backendLayout.pages) {
          const splittedPageUrl = page.url
            .split(`/`)
            .filter((element) => element !== ``);

          if (splittedPathname?.length) {
            let pathEquals = true;
            for (const [
              index,
              splittedPathnameItem,
            ] of splittedPathname.entries()) {
              if (splittedPathnameItem !== splittedPageUrl[index]) {
                if (
                  splittedPageUrl[index]?.includes(`[`) &&
                  splittedPathnameItem &&
                  parseInt(splittedPathnameItem)
                ) {
                  continue;
                } else if (
                  splittedPathname.includes(`auth`) &&
                  splittedPageUrl.includes(`auth`)
                ) {
                  continue;
                } else {
                  pathEquals = false;
                }
              }
            }
            if (pathEquals) {
              targetLayout = backendLayout;
            }
          } else {
            if (!splittedPageUrl.length) {
              targetLayout = backendLayout;
            }
          }
        }
      }
    }

    return targetLayout;
  }, [pathname, layouts, params?.locale]);

  return layout;
}
