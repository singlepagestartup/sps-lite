"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { useEffect } from "react";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading } = api.me(props.apiProps);

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
