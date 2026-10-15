"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import { SourceFiles } from "./ClientComponent";
import type { IComponentProps, ISourceFilesReaderProps } from "./interface";
export default function Client(props: IComponentProps) {
  const scope = {
    id: props.data.id,
    socialModuleProfileId: props.project.requesterProfileId,
    socialModuleChatId: props.project.chat.id,
  };
  const profiles =
    api.socialModuleProfileFindByIdChatFindByIdProfileFind(scope);
  const profile = profiles.data?.find((item) => item.id === props.profileId);
  const target = {
    ...scope,
    targetSocialModuleProfileId: props.profileId,
    reactQueryOptions: {
      enabled: !!profile && profile.variant === "artificial-intelligence",
    },
  };
  const skills =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdSkillFind(target);
  const knowledge =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFind(
      target,
    );
  return (
    <Component
      {...props}
      profilesRead={{
        data: profiles.data,
        isPending: profiles.isPending,
        error: profiles.error ? { message: profiles.error.message } : undefined,
      }}
      skillsRead={{
        data: skills.data,
        isPending: skills.isPending,
        error: skills.error ? { message: skills.error.message } : undefined,
      }}
      knowledgeRead={{
        data: knowledge.data,
        isPending: knowledge.isPending,
        error: knowledge.error
          ? { message: knowledge.error.message }
          : undefined,
      }}
      sourceFiles={Object.fromEntries(
        (knowledge.data || []).map((source) => [
          source.id,
          <SourceFilesReader
            key={source.id}
            scope={scope}
            profileId={props.profileId}
            sourceId={source.id}
          />,
        ]),
      )}
    />
  );
}
function SourceFilesReader({
  scope,
  profileId,
  sourceId,
}: ISourceFilesReaderProps) {
  const files =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFindByIdFilesFind(
      {
        ...scope,
        targetSocialModuleProfileId: profileId,
        knowledgeModuleSourceId: sourceId,
      },
    );
  return <SourceFiles files={files.data} error={files.error?.message} />;
}
