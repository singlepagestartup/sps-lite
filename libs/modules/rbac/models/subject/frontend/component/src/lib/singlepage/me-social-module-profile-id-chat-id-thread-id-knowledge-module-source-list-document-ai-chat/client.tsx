"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default function Client(props: IComponentProps) {
  const project = props.project;
  const scope = {
    id: props.data.id,
    socialModuleProfileId: project.requesterProfileId,
    socialModuleChatId: project.chat.id,
    targetSocialModuleProfileId: project.profile.id,
  };
  const sources =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFind(
      scope,
    );
  return (
    <Component
      {...props}
      sourcesRead={{
        data: sources.data,
        isPending: sources.isPending,
        isFetching: sources.isFetching,
        isError: sources.isError,
        error: sources.error ? { message: sources.error.message } : undefined,
        refetch: () => {
          void sources.refetch();
        },
      }}
    />
  );
}
