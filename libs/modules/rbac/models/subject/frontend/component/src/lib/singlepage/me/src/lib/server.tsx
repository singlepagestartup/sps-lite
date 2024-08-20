"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { api } from "@sps/rbac/models/subject/sdk/server";
import { cookies } from "next/headers";

async function me(props: IComponentProps) {
  const jwt = cookies().get("rbac.subject.jwt")?.value;

  const headers: HeadersInit = jwt ? { Authorization: `Bearer ${jwt}` } : {};

  const data = await api
    .me({
      ...props.apiProps,
      options: {
        ...props.apiProps?.options,
        headers,
        next: {
          revalidate: 0,
          cache: "no-store",
        },
      },
    })
    .catch(() => {
      return;
    });

  return data;
}

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await me(props);

  if (!data) {
    return <></>;
  }

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}