"use server";
import "server-only";
import { api } from "@sps/rbac/models/subject/sdk/server";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default async function Server(props: IComponentProps) {
  const project = props.project;
  try {
    const data = await api.socialModuleChatFindByIdThreadFind({
      id: props.data.id,
      socialModuleChatId: project.chat.id,
      options: props.apiProps?.options,
    });
    return (
      <Component
        {...props}
        threadsRead={{ data, isPending: false, isError: false }}
      />
    );
  } catch (error) {
    return (
      <Component
        {...props}
        threadsRead={{
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
