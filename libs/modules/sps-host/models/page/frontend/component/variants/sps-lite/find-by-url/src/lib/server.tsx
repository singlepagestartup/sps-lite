"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-host/models/page/frontend/api/server";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.fetch.findByUrl({
    url: props.url,
    catchError: true,
  });

  if (!props.children || typeof props.children !== "function") {
    return <></>;
  }

  return props.children({ data });
}
