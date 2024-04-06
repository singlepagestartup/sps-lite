"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-website-builder-models-layout-frontend-api-client";
import { Skeleton } from "./Skeleton";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useFindOneQuery({
      id: props.data.id,
    });

  if (isFetching || isLoading || isUninitialized || !data) {
    return <Skeleton {...props} />;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
