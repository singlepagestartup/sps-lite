"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "../../../api/client";
import { Skeleton } from "./Skeleton";
import { Component } from "./Component";

// default is required for dynamic import
export default function Client(props: IComponentProps) {
  const id = 1;

  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: id,
  });

  if (isFetching || isLoading || isUninitialized || !data) {
    return <Skeleton {...props} />;
  }

  return <Component {...props} data={data} />;
}
