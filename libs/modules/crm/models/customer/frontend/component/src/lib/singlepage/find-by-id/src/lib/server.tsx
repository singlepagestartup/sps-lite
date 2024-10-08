"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/crm/models/customer/sdk/server";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.findById({
    id: props.id,
  });

  if (!data) {
    return <></>;
  }

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}
