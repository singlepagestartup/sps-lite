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
  const locale = headersList.get("x-sps-website-builder-locale") || "";

  const data = await api.fetch.getByUrl({
    url: pathname,
    locale,
  });

  if (!data) {
    return <></>;
  }

  if (!data) {
    return <></>;
  }

  if (props?.children) {
    return props.children({ data });
  }

  return <></>;
}
