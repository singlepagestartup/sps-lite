"use client";

import { ReactNode, useEffect, useState } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import type { IEntity as IBackendLayout } from "@sps/sps-website-builder-contracts-extended/lib/entities/layout/interfaces";
import type { IEntity as IBackendLoader } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/interfaces";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { getTargetPage } from "@sps/utils";
import { useParams, usePathname } from "next/navigation";
import { api } from "../api";

export interface ILayout extends IBackendLayout {
  children: ReactNode;
  page: IBackendPage;
  loader?: IBackendLoader | null;
}

export const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Component({ children }: { children?: ReactNode }) {
  const pathname = usePathname();
  const params = useParams();

  const { data: layout, error } = api.useGetByPageUrlQuery(
    {
      url: pathname?.includes("/auth") ? "/auth" : pathname,
      ...params,
    },
    { skip: !pathname },
  );
  const [page, setPage] = useState<IBackendPage>(); //?

  useEffect(() => {
    if (params) {
      getTargetPage(params).then((res) => {
        setPage(res);
      });
    }
  }, [JSON.stringify(params)]);

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

  if (!Comp || !layout || !page) {
    return <>{children}</>;
  }

  return (
    <Comp {...layout} page={page}>
      {children}
    </Comp>
  );
}
