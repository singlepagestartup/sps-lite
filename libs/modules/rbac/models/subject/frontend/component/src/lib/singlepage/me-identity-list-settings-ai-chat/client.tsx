"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default function Client(props: IComponentProps) {
  const identities = api.identityFind({
    id: props.data.id,
    reactQueryOptions: { retry: false },
  });
  return (
    <Component
      {...props}
      identitiesRead={{
        data: identities.data,
        isPending: identities.isPending,
        isFetching: identities.isFetching,
        isError: identities.isError,
        error: identities.error
          ? { message: identities.error.message }
          : undefined,
        refetch: () => {
          void identities.refetch();
        },
      }}
    />
  );
}
