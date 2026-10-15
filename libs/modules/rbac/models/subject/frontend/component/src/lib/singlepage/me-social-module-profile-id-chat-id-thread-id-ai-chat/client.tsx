"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";

export default function Client(props: IComponentProps) {
  const threads = api.socialModuleChatFindByIdThreadFind({
    id: props.data.id,
    socialModuleChatId: props.project?.chat.id || "",
    reactQueryOptions: { enabled: !!props.project },
  });
  return (
    <Component
      {...props}
      threads={threads.data}
      threadsLoading={!!props.project && threads.isPending}
      threadsError={threads.error?.message}
      retryThreads={() => {
        void threads.refetch();
      }}
    />
  );
}
