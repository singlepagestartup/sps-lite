"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-server";
import { Component } from "./Component";
import { headers } from "next/headers";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const headersList = headers();
  const pathname = headersList.get("x-sps-website-builder-pathname") || "";

  const data = await api.fetch.getUrlModelId({
    url: pathname,
    modelName: props.model,
  });

  if (!data && props.children) {
    return props.children({ data: undefined });
  }

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}
