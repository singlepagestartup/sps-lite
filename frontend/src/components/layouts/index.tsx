"use client";

import { FC, ReactNode } from "react";
import { ISpsLiteLayout, variants as spsLiteVariants } from "./sps-lite";
import { useGetLayoutByPageUrlQuery } from "~redux/services/backend/models/layouts";
import { useParams, usePathname } from "next/navigation";

const variants = {
  ...spsLiteVariants,
};

export default function Layouts({ children }: { children?: ReactNode }) {
  const pathname = usePathname();
  const params = useParams();
  const { data: layout } = useGetLayoutByPageUrlQuery(
    {
      url: pathname?.includes("/auth") ? "/auth" : pathname,
      ...params,
    },
    { skip: !pathname },
  );

  const Comp = layout
    ? (variants[layout.variant as keyof typeof variants] as FC<ISpsLiteLayout>)
    : undefined;

  if (!Comp || !layout) {
    return <></>;
  }

  return <Comp {...layout}>{children}</Comp>;
}
