"use client";

import { FC, ReactNode, useEffect } from "react";
import { ISpsLiteLayout, variants as spsLiteVariants } from "./sps-lite";
import { api as layoutApi } from "~redux/services/backend/api/layout/api";
import { useParams, usePathname } from "next/navigation";

const variants = {
  ...spsLiteVariants,
};

export default function Layouts({ children }: { children?: ReactNode }) {
  const pathname = usePathname();
  const params = useParams();
  const { data: layout, error } = layoutApi.useGetByPageUrlQuery(
    {
      url: pathname?.includes("/auth") ? "/auth" : pathname,
      ...params,
    },
    { skip: !pathname },
  );

  // Clear cache if user jwt is wrong
  useEffect(() => {
    // @ts-ignore
    if (error?.status === 401 && typeof window !== "undefined") {
      const jwt = window.localStorage.getItem("jwt");
      if (jwt) {
        window.localStorage.removeItem("jwt");
        window.location.reload();
      }
    }
  }, [error]);

  const Comp = layout
    ? (variants[layout.variant as keyof typeof variants] as FC<ISpsLiteLayout>)
    : undefined;

  if (!Comp || !layout) {
    return <></>;
  }

  return <Comp {...layout}>{children}</Comp>;
}
