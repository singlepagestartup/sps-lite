"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-website-builder/models/hero-section-block/frontend/api/client";

export default function Client(props: IComponentProps) {
  const { data, isLoading } = api.findById({ id: props.data.id });
  const { data: findRes } = api.find();
  console.log(`🚀 ~ Client ~ findRes:`, findRes);

  // const { data, isLoading } = useQuery<IModelExtended>({
  //   queryKey: [tag],
  //   queryFn: query({ id: props.data.id || "" }),
  //   enabled: props.data.id ? true : false,
  // });

  if (isLoading || !data) {
    return <Skeleton {...props} />;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} isServer={false} data={data} />
    </ErrorBoundary>
  );
}
