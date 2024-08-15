"use client";
import "client-only";

import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/website-builder/models/widget/sdk/client";
import { Component as Logotype } from "./assets/logotype";
import { Component as Content } from "./assets/content";
import { ErrorBoundary } from "@sps/ui-adapter";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading } = api.findById({
    id: props.data.id,
    ...props.apiProps,
  });

  if (isFetching || isLoading || !data) {
    return <Skeleton />;
  }

  const logotype = <Logotype {...props} data={data} />;
  const content = <Content {...props} data={data} />;

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} content={content} logotype={logotype} />
    </ErrorBoundary>
  );
}
