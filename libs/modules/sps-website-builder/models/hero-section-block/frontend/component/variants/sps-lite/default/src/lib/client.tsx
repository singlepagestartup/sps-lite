"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import {
  IModelExtended,
  tag,
} from "@sps/sps-website-builder/models/hero-section-block/frontend/api/model";
import { query } from "@sps/sps-website-builder/models/hero-section-block/frontend/api/client";
import { useQuery } from "@tanstack/react-query";

export default function Client(props: IComponentProps) {
  const { data, isLoading } = useQuery<IModelExtended>({
    queryKey: [tag],
    queryFn: query({ id: props.data.id || "" }),
    enabled: props.data.id ? true : false,
  });

  if (isLoading || !data) {
    return <Skeleton {...props} />;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} isServer={false} data={data} />
    </ErrorBoundary>
  );
}
