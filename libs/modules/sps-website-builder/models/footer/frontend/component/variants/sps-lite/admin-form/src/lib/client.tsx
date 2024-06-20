"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-website-builder/models/footer/frontend/api/client";

export default function Client(props: IComponentProps) {
  if (props.data) {
    const { data, isFetching, isLoading } = api.rtk.useFindByIdQuery(
      {
        id: props.data?.id,
      },
      { skip: !props.data.id },
    );

    if (isFetching || isLoading || !data) {
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
      <Component {...props} data={undefined} />
    </ErrorBoundary>
  );
}
