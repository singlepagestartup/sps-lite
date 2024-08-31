"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading, refetch } = api.me({
    ...props.apiProps,
    reactQueryOptions: { enabled: false },
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
    console.log(`🚀 ~ subject ~ me ~ jwt:`, jwt);

    if (token && !token.isExpired) {
      refetch();
    }
  }, [jwt]);

  useEffect(() => {
    if (props.set && typeof props.set === "function") {
      props.set(data);
    }
  }, [data, props]);

  if (isFetching || isLoading) {
    return <></>;
  }

  if (props.children && data) {
    return props.children({ data });
  }

  return <></>;
}
