"use server";
import "server-only";
import { api } from "@sps/rbac/models/subject/sdk/server";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";

export default async function Server(props: IComponentProps) {
  try {
    const threads = props.project
      ? await api.socialModuleChatFindByIdThreadFind({
          id: props.data.id,
          socialModuleChatId: props.project.chat.id,
          options: props.apiProps?.options,
        })
      : [];
    return <Component {...props} threads={threads} threadsLoading={false} />;
  } catch (error) {
    return (
      <Component
        {...props}
        threadsLoading={false}
        threadsError={
          error instanceof Error ? error.message : "Thread could not be loaded."
        }
      />
    );
  }
}
