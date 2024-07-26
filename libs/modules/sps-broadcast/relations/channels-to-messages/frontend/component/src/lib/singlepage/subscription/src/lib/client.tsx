"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-broadcast/relations/channels-to-messages/sdk/client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { STALE_TIME } from "@sps/shared-utils";

export default function Client(props: IComponentProps) {
  const params = useSearchParams();
  const adminQueryParams = params.get("admin");

  const [ping, setPing] = useState<number>(STALE_TIME);

  const { data, isFetching, isLoading, dataUpdatedAt, refetch } = api.find(
    props.apiProps,
  );

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      refetch();
      clearTimeout(refreshTimeout);
    }, ping);

    return () => {
      clearTimeout(refreshTimeout);
    };
  }, [dataUpdatedAt]);

  useEffect(() => {
    if (!adminQueryParams) {
      return;
    }

    setPing(1000);
  }, [adminQueryParams]);

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
