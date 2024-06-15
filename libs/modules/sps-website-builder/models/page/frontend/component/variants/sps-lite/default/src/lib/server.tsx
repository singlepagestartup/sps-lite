"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { Component } from "./Component";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-server";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  if (!props.data || !props.data.url) {
    return <></>;
  }

  const data = await api.fetch.getPage({ url: props.data.url });

  if (!data) {
    return <></>;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
