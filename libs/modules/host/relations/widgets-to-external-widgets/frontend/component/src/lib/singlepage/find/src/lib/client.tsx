"use client";
import "client-only";

import { Skeleton } from "./Skeleton";
import { IComponentProps } from "./interface";
import { api } from "@sps/host/relations/widgets-to-external-widgets/sdk/client";
import { useEffect } from "react";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading } = api.find(props.apiProps);

  useEffect(() => {
    if (props.set && typeof props.set === "function") {
      props.set(data);
    }
  }, [data, props]);

  if (isFetching || isLoading) {
    return <Skeleton />;
  }

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}
