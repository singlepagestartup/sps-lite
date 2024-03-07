"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";
import { IComponentProps, IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder-models-layout-frontend-api";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { api as pageApi } from "@sps/sps-website-builder-models-page-frontend-api";

export default function Client(props: IComponentProps) {
  const pathname = usePathname();
  const params = useParams();

  const { data, error } = api.rtk.useGetByPageUrlQuery(
    {
      url: pathname?.includes("/auth") ? "/auth" : pathname,
      ...params,
    },
    { skip: !pathname },
  );
  const [page, setPage] = useState<IComponentPropsExtended["data"]["pages"]>(); //?

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

  if (!data || !page) {
    return <>{props.children}</>;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
