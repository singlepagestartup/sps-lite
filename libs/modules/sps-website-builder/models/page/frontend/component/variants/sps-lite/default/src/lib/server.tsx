"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { Component } from "./Component";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-server";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.fetch.getPage({ url: props.url });

  if (!data) {
    return <></>;
  }

  return <Component {...props} data={data} />;
}
