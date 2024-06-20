"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-host/models/page/frontend/api/client";
import { useEffect } from "react";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useUrlSegmentValueQuery({
      segment: props.segment,
      url: props.hostUrl,
    });

  if (isFetching || isLoading || isUninitialized) {
    return <Skeleton {...props} />;
  }

  useEffect(() => {
    if (data && props.set) {
      props.set(data);
    }
  }, [data]);

  if (!props.children) {
    return <></>;
  }

  return props.children({ data });
}
