"use client";
import "client-only";

import { Component } from "./Component";
import { IComponentProps } from "./interface";
import { api } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/client";
import { Skeleton } from "./Skeleton";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading } = api.find(props.apiProps);

  if (isFetching || isLoading || !data) {
    return <Skeleton />;
  }

  return <Component {...props} data={data} />;
}
