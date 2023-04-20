"use client";

import { FC, useMemo } from "react";
import { ISpsLiteLayout, variants as spsLiteVariants } from "./sps-lite";
import { useGetLayoutsQuery } from "~redux/services/backend/models/layouts";
import { usePathname } from "next/navigation";

const variants = {
  ...spsLiteVariants,
};

export default function Layouts<T>(props: T) {
  const pathname = usePathname();
  const { data: layouts } = useGetLayoutsQuery({});

  const { Comp, layout } = useMemo(() => {
    if (!layouts?.length) {
      return {};
    }

    let targetLayout;
    for (const backendLayout of layouts) {
      if (backendLayout.pages) {
        for (const page of backendLayout.pages) {
          if (pathname?.includes(page.url)) {
            targetLayout = backendLayout;
          }
        }
      }
    }

    return {
      Comp: variants[targetLayout?.variant as keyof typeof variants] as FC<any>,
      layout: targetLayout,
    };
  }, [pathname, layouts]);

  if (!Comp || !layout) {
    return <></>;
  }

  return <Comp {...layout} {...props} />;
}
