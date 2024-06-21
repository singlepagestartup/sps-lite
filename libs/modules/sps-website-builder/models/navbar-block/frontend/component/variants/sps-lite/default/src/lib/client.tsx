"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-website-builder/models/navbar-block/frontend/api/client";
import { Component as Logotype } from "./assets/logotype";
import { Component as Content } from "./assets/content";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useFindByIdQuery({
      id: props.data.id,
    });

  if (isFetching || isLoading || isUninitialized || !data) {
    return <Skeleton {...props} />;
  }

  const logotype = <Logotype {...props} data={data} />;
  const content = <Content {...props} data={data} />;

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} content={content} logotype={logotype} />
    </ErrorBoundary>
  );
}
