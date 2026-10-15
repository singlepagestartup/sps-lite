"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default function Client(props: IComponentProps) {
  const messages =
    api.socialModuleProfileFindByIdChatFindByIdThreadFindByIdMessageFind({
      id: props.data.id,
      socialModuleProfileId: props.project.requesterProfileId,
      socialModuleChatId: props.project.chat.id,
      socialModuleThreadId: props.thread.id,
      reactQueryOptions: { refetchInterval: 5000 },
    });
  return (
    <Component
      {...props}
      messagesRead={{
        data: messages.data,
        isPending: messages.isPending,
        isFetching: messages.isFetching,
        isError: messages.isError,
        error: messages.error ? { message: messages.error.message } : undefined,
        refetch: () => {
          void messages.refetch();
        },
      }}
    />
  );
}
