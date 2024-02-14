"use client";
import "client-only";

import {
  IComponentProps as IFindOneComponentProps,
  IComponentPropsExtended as IFindOneComponentPropsExtended,
  variants as findOneVariants,
} from "./find-one/interface";
import { api } from "../api/client";
import { variants } from "./variants";
import { useEffect, useState } from "react";
import { getTargetPage } from "@sps/utils";
import { useParams, usePathname } from "next/navigation";

// default is required for dynamic import
export default function Client(props: IFindOneComponentProps) {
  return <FindOne {...props} />;
}

function FindOne(props: IFindOneComponentProps) {
  const pathname = usePathname();
  const params = useParams();

  const { data, error } = api.useGetByPageUrlQuery(
    {
      url: pathname?.includes("/auth") ? "/auth" : pathname,
      ...params,
    },
    { skip: !pathname },
  );
  const [page, setPage] =
    useState<IFindOneComponentPropsExtended["data"]["pages"]>(); //?

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

  const Comp = variants.findOne[data.variant];

  if (!Comp || !data || !page) {
    return <>{props.children}</>;
  }

  return <Comp {...props} data={data} />;
}
