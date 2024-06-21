"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-host/models/page/frontend/api/server";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.fetch.urlSegmentValue({
    segment: props.segment,
    url: props.hostUrl,
  });

  if (!data && props.children) {
    return props.children({ data: undefined });
  }

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}