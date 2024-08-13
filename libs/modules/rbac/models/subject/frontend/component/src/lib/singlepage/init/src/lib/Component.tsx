"use client";

import { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/rbac/models/subject/sdk/client";
import Cookie from "js-cookie";
import { useJwt } from "react-jwt";
import { SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS } from "@sps/shared-utils";
import { useRouter } from "next/navigation";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const refresh = api.refresh();
  const init = api.init({
    reactQueryOptions: {
      enabled: false,
    },
  });
  const jwt = Cookie.get("rbac.subject.jwt");
  const token = useJwt(jwt ?? "");

  useEffect(() => {
    if (!jwt) {
      init.refetch();
    }
  }, []);

  useEffect(() => {
    if (!token.decodedToken) {
      return;
    }

    if (
      new Date(token.decodedToken?.["exp"] * 1000).getTime() -
        SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS * 0.1 * 1000 <
      Date.now()
    ) {
      const refreshToken = localStorage.getItem("rbac.subject.refresh");

      if (!refreshToken) {
        Cookie.remove("rbac.subject.jwt");
        localStorage.removeItem("rbac.subject.refresh");

        return;
      }

      refresh.mutate({
        data: {
          refresh: refreshToken,
        },
      });
    }
  }, [token.decodedToken]);

  useEffect(() => {
    if (refresh.isError) {
      Cookie.remove("rbac.subject.jwt");
      localStorage.removeItem("rbac.subject.refresh");
      router.refresh();
    }
  }, [refresh]);

  useEffect(() => {
    if (init.data) {
      router.refresh();
    }
  }, [init.data]);

  return (
    <div
      data-module="rbac"
      data-model="subject"
      data-variant={props.variant}
    ></div>
  );
}
