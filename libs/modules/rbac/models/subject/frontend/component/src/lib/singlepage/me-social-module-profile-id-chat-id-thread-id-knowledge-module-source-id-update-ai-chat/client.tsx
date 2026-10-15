"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default function Client(props: IComponentProps) {
  const { data, project, source } = props;
  const scope = {
    id: data.id,
    socialModuleProfileId: project.requesterProfileId,
    socialModuleChatId: project.chat.id,
    targetSocialModuleProfileId: project.profile.id,
  };
  const attachments =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFindByIdFilesFind(
      { ...scope, knowledgeModuleSourceId: source.id },
    );
  return (
    <Component
      {...props}
      attachmentsRead={{
        data: attachments.data,
        isPending: attachments.isPending,
        isFetching: attachments.isFetching,
        isError: attachments.isError,
        error: attachments.error
          ? { message: attachments.error.message }
          : undefined,
        refetch: () => {
          void attachments.refetch();
        },
      }}
    />
  );
}
