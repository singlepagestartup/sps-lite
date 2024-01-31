"use client";

import { ReactNode, useEffect, useState } from "react";
import { api as layoutApi } from "../api/client";
import { useParams, usePathname } from "next/navigation";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { getTargetPage } from "@sps/utils";
import { variants } from ".";

let renders = 0;
export function Client({ children }: { children?: ReactNode }) {
  renders++;
  console.log("Layout renders", renders);

  const pathname = usePathname();
  const params = useParams();

  const { data: layout, error } = layoutApi.useGetByPageUrlQuery(
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
