"use client";

import { useEffect, useMemo } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/rbac/models/subject/sdk/client";
import Cookie from "js-cookie";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";

export function Component(props: IComponentPropsExtended) {
  const refresh = api.refresh();
  const init = api.init({
    reactQueryOptions: {
      enabled: false,
    },
  });
  const [jwtCookies] = useCookies(["rbac.subject.jwt"]);
  const refreshStorage = useMemo(() => {
    if (typeof localStorage === "undefined") {
      return "";
    }

    return localStorage.getItem("rbac.subject.refresh");
  }, []);

  const token = useJwt<{
    exp: number;
    iat: number;
    subject: { id: string };
  }>(jwtCookies["rbac.subject.jwt"]);
  const refreshToken = useJwt<{
    exp: number;
    iat: number;
  }>(refreshStorage || "");

  useEffect(() => {
    if (!jwtCookies["rbac.subject.jwt"]) {
      init.refetch();
    }
  }, [jwtCookies]);

  useEffect(() => {
    if (!token.decodedToken) {
      return;
    }

    if (token.isExpired) {
      if (!refreshToken) {
        Cookie.remove("rbac.subject.jwt");
        localStorage.removeItem("rbac.subject.refresh");

        return;
      }

      if (refreshToken.isExpired || !refreshStorage) {
        Cookie.remove("rbac.subject.jwt");
        localStorage.removeItem("rbac.subject.refresh");

        return;
      }

      refresh.mutate({
        data: {
          refresh: refreshStorage,
        },
      });
    }
  }, [token.decodedToken, refreshToken.decodedToken]);

  useEffect(() => {
    if (refresh.isError) {
      Cookie.remove("rbac.subject.jwt");
      localStorage.removeItem("rbac.subject.refresh");
    }
  }, [refresh]);

  return (
    <div
      data-module="rbac"
      data-model="subject"
      data-variant={props.variant}
    ></div>
  );
}
