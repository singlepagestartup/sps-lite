"use client";
import "client-only";

import { useEffect, useState } from "react";
import { getTargetPage } from "@sps/utils";
import { useParams, usePathname } from "next/navigation";
import { api } from "../api/client";
import { IComponentProps, IComponentPropsExtended } from "./interface";
import { variants } from "./variants";

// default is required for dynamic import
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
  const [page, setPage] = useState<IComponentPropsExtended["page"]>(); //?

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

  const Comp = data
    ? variants[data.variant as keyof typeof variants]
    : undefined;

  if (!Comp || !data || !page) {
    return <>{props.children}</>;
  }

  return <Comp {...props} {...data} />;
}
