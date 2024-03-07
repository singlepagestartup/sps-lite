"use client";
import "client-only";

import { useParams, usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { api } from "@sps/sps-website-builder-models-layout-frontend-api";
import { variants } from "./variants";
import { IComponentProps } from "./interface";
import { api as pageApi } from "@sps/sps-website-builder-models-page-frontend-api";

export default function Client(props: {
  isServer: boolean;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const params = useParams();

  const { data, error } = api.rtk.useGetByPageUrlQuery(
    {
      url: pathname?.includes("/auth") ? "/auth" : pathname,
      ...params,
    },
    { skip: !pathname },
  );
  const [page, setPage] = useState<any>(); //?

  useEffect(() => {
    if (params) {
      pageApi.fetch.getByUrl(params as any).then((res) => {
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

  if (!data || !page) {
    return <></>;
  }

  const Comp = variants[data.variant as keyof typeof variants];

  if (!Comp || !data || !page) {
    return <>{props.children}</>;
  }

  // @ts-ignore
  return <Comp {...props} variant={data.variant} data={data} />;
}
