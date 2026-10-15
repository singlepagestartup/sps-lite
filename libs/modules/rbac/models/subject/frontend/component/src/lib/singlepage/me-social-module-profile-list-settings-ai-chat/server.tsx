"use server";
import "server-only";
import { api } from "@sps/rbac/models/subject/sdk/server";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default async function Server(props: IComponentProps) {
  try {
    const data = await api.socialModuleProfileFind({
      id: props.data.id,
      params: {
        filters: {
          and: [{ column: "variant", method: "eq", value: "default" }],
        },
      },
      options: props.apiProps?.options,
    });
    return (
      <Component
        {...props}
        profilesRead={{ data, isPending: false, isError: false }}
      />
    );
  } catch (error) {
    return (
      <Component
        {...props}
        profilesRead={{
          isPending: false,
          isError: true,
          error: {
            message:
              error instanceof Error
                ? error.message
                : "Data could not be loaded.",
          },
        }}
      />
    );
  }
}
