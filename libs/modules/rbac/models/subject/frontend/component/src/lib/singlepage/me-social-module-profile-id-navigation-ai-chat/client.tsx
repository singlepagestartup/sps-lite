"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default function Client(props: IComponentProps) {
  const project = props.project;
  const threads = api.socialModuleChatFindByIdThreadFind({
    id: props.data.id,
    socialModuleChatId: project.chat.id,
  });
  return (
    <Component
      {...props}
      threadsRead={{
        data: threads.data,
        isPending: threads.isPending,
        isFetching: threads.isFetching,
        isError: threads.isError,
        error: threads.error ? { message: threads.error.message } : undefined,
        refetch: () => {
          void threads.refetch();
        },
      }}
    />
  );
}
