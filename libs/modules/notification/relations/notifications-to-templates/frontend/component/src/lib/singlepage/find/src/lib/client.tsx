"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "@sps/notification/relations/notifications-to-templates/sdk/client";
import { useEffect } from "react";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading } = api.find(props.apiProps);

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
