"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-host/models/page/frontend/api/client";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useFindByUrlQuery({
      url: props.url,
    });

  if (isFetching || isLoading || isUninitialized) {
    return <Skeleton {...props} />;
  }

  if (!props.children) {
    return <></>;
  }

  return props.children({ data });
}
