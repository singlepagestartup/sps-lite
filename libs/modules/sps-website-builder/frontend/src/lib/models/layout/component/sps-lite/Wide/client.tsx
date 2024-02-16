"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";
import { IComponentProps, IComponentPropsExtended } from "./interface";
import { api } from "../../../api/client";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getTargetPage } from "@sps/utils";

export default function Client(props: IComponentProps) {
  const pathname = usePathname();
  const params = useParams();

  const { data, error } = api.useGetByPageUrlQuery(
    {
      url: pathname?.includes("/auth") ? "/auth" : pathname,
      ...params,
    },
    { skip: !pathname },
  );
  const [page, setPage] = useState<IComponentPropsExtended["data"]["pages"]>(); //?

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
