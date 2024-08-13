"use client";
import "client-only";

import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/ecommerce/relations/orders-to-products/sdk/client";
import { ErrorBoundary } from "@sps/ui-adapter";

export default function Client(props: IComponentProps) {
  const { data, isLoading } = api.findById({
    id: props.data.id,
    ...props.apiProps,
  });

  if (isLoading || !data) {
    return <Skeleton />;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} isServer={false} data={data} />
    </ErrorBoundary>
  );
}
