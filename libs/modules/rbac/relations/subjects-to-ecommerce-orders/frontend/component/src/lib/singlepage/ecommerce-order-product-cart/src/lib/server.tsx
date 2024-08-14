"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { Component } from "./Component";
import { api } from "@sps/rbac/relations/subjects-to-ecommerce-orders/sdk/server";

export default async function Server(props: IComponentProps) {
  const data = await api.find(props.apiProps);

  if (!data) {
    return <></>;
  }

  return <Component {...props} data={data} />;
}
