"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { api } from "@sps/rbac/models/identity/sdk/server";

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
