"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-rbac/models/authentication/sdk/client";
import Cookie from "js-cookie";
import { useJwt } from "react-jwt";
import { SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS } from "@sps/shared-utils";

export function Component(props: IComponentPropsExtended) {
  const refresh = api.refresh();
  const jwt = Cookie.get("sps-rbac.subject.jwt");
  const token = useJwt(jwt ?? "");

  useEffect(() => {
    if (!token.decodedToken) {
      return;
    }

    if (
      new Date(token.decodedToken?.["exp"] * 1000).getTime() -
        SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS * 0.1 * 1000 <
      Date.now()
    ) {
      const refreshToken = localStorage.getItem("sps-rbac.subject.refresh");

      if (!refreshToken) {
        Cookie.remove("sps-rbac.subject.jwt");
        localStorage.removeItem("sps-rbac.subject.refresh");

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
      Cookie.remove("sps-rbac.subject.jwt");
      localStorage.removeItem("sps-rbac.subject.refresh");
    }
  }, [refresh.isError]);

  return (
    <div
      data-module="sps-rbac"
      data-model="authentication"
      data-variant={props.variant}
    >
      {props.children}
    </div>
  );
}
