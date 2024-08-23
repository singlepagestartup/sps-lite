"use server";
import "server-only";

import { IComponentProps, variant, IModel } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/host/relations/pages-to-widgets/sdk/server";
import { query } from "@sps/host/relations/pages-to-widgets/sdk/model";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.find({
    ...query,
    ...props.apiProps,
    params: {
      ...query.params,
      ...props.apiProps?.params,
    },
  });

  if (!data) {
    return <></>;
  }

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}
