"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/ecommerce/relations/orders-to-products/sdk/server";
import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";

export default async function Server(props: IComponentProps) {
  if (!props.data.id) {
    return <></>;
  }

  const data = await api.findById({
    id: props.data.id,
    ...props.apiProps,
  });

  if (!data) {
    return <></>;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
