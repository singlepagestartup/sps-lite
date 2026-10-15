"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default function Client(props: IComponentProps) {
  const profiles = api.socialModuleProfileFind({
    id: props.data.id,
    params: {
      filters: { and: [{ column: "variant", method: "eq", value: "default" }] },
    },
    reactQueryOptions: { retry: false },
  });
  return (
    <Component
      {...props}
      profilesRead={{
        data: profiles.data,
        isPending: profiles.isPending,
        isFetching: profiles.isFetching,
        isError: profiles.isError,
        error: profiles.error ? { message: profiles.error.message } : undefined,
        refetch: () => {
          void profiles.refetch();
        },
      }}
    />
  );
}
