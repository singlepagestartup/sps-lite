"use client";

import { ReactNode, useEffect } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as layoutApi } from "~redux/services/backend/extensions/sps-website-builder/api/layout/api";
import { useParams, usePathname } from "next/navigation";
import { IEntity as IBackendLayout } from "~redux/services/backend/extensions/sps-website-builder/api/layout/interfaces";
import { IEntity as IBackendLoader } from "~redux/services/backend/extensions/sps-website-builder/api/loader/interfaces";

export interface ILayout extends IBackendLayout {
  children: ReactNode;
  loader?: IBackendLoader | null;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Layout({ children }: { children?: ReactNode }) {
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
    ? variants[layout.variant as keyof typeof variants]
    : undefined;

  if (!Comp || !layout) {
    return <></>;
  }

  return <Comp {...layout}>{children}</Comp>;
}
