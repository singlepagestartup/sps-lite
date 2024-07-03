"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { Skeleton } from "./Skeleton";
import { api } from "@sps/sps-notification/models/widget/frontend/api/client";

export default function Client(props: IComponentProps) {
  if (props.data) {
    const { data, isFetching, isLoading } = api.findById({
      id: props.data?.id,
    });

    if (isFetching || isLoading) {
      return <Skeleton {...props} />;
    }

    return (
      <ErrorBoundary fallback={Error}>
        <Component {...props} data={data} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={props.data} />
    </ErrorBoundary>
  );
}
