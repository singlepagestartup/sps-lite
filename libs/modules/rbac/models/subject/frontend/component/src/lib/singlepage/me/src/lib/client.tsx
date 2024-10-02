"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import Cookie from "js-cookie";

export default function Client(props: IComponentProps) {
  const { data, isError, refetch } = api.me({
    ...props.apiProps,
    reactQueryOptions: { enabled: false },
    mute: true,
  });
  const [jwt, setJwt] = useState<string | undefined>();
  const [jwtCookies] = useCookies(["rbac.subject.jwt"]);

  const token = useJwt<{
    exp: number;
    iat: number;
    subject: { id: string };
  }>(jwtCookies["rbac.subject.jwt"]);

  useEffect(() => {
    if (jwtCookies["rbac.subject.jwt"] !== jwt) {
      setJwt(jwtCookies["rbac.subject.jwt"]);
    }
  }, [jwtCookies["rbac.subject.jwt"]]);

  useEffect(() => {
    if (token && !token.isExpired && !data?.["id"]) {
      refetch();
    }
  }, [jwt, token, data]);

  useEffect(() => {
    if (isError && token && !token.isExpired) {
      Cookie.remove("rbac.subject.jwt");
      localStorage.removeItem("rbac.subject.refresh");
    }
  }, [isError, token]);

  useEffect(() => {
    if (props.set && typeof props.set === "function") {
      props.set(data);
    }
  }, [data, props]);

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}
