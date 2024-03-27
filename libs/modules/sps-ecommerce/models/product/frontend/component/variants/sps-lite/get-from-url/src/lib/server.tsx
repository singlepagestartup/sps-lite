"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-ecommerce-models-product-frontend-api";
import { Component } from "./Component";
import { headers } from "next/headers";
import { api as pageApi } from "@sps/sps-website-builder-models-page-frontend-api";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const headersList = headers();
  const pathname = headersList.get("x-sps-website-builder-pathname") || "";
  const locale = headersList.get("x-sps-website-builder-locale") || "";

  const id = await pageApi.fetch.getUrlModelId({
    url: pathname,
    locale,
    modelName: "product",
  });

  if (!id) {
    return <></>;
  }

  const data = await api.fetch.findOne({
    id,
  });

  if (!data) {
    return <></>;
  }

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}
