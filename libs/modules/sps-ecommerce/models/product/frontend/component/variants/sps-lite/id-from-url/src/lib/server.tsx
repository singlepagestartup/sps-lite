"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { headers } from "next/headers";
import { getPageUrlModelId } from "@sps/utils";
import { api } from "@sps/sps-ecommerce-models-product-frontend-api";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const headersList = headers();
  const pathname = headersList.get("x-sps-website-builder-pathname") || "";
  const locale = headersList.get("x-sps-website-builder-locale") || "";

  const id = await getPageUrlModelId({
    url: pathname,
    locale,
    modelName: "product",
  });

  if (!id) {
    return <></>;
  }

  const data = await api.server.findOne({
    id,
  });

  if (!data) {
    return <></>;
  }

  return <Component {...props} data={data} />;
}
