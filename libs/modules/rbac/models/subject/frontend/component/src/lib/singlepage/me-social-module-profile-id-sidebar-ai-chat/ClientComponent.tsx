"use client";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component as Profile } from "@sps/social/models/profile/frontend/component";
import { Component as Skill } from "@sps/social/models/skill/frontend/component";
import { Component as Source } from "@sps/knowledge/models/source/frontend/component";
import { Component as File } from "@sps/file-storage/models/file/frontend/component";
import type { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
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
  if (profiles.isPending)
    return (
      <p role="status" className="p-4">
        Loading assistant profile…
      </p>
    );
  if (!profile || profiles.error)
    return (
      <p role="alert" className="p-4 text-destructive">
        {profiles.error?.message ||
          "Assistant profile is unavailable in this Chat."}
      </p>
    );
  return (
    <Profile
      isServer={false}
      variant="agent-id-ai-chat"
      data={profile}
      language="en"
      onClose={props.onClose}
      skillsCount={skills.data?.length}
      knowledgeCount={knowledge.data?.length}
      skills={
        skills.isPending ? (
          <p role="status">Loading skills…</p>
        ) : skills.error ? (
          <p role="alert">{skills.error.message}</p>
        ) : skills.data?.length ? (
          skills.data.map((skill) => (
            <Skill
              key={skill.id}
              isServer={false}
              variant="id-ai-chat"
              data={skill}
              language="en"
            />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No linked skills.</p>
        )
      }
    >
      {knowledge.isPending ? (
        <p role="status">Loading knowledge…</p>
      ) : knowledge.error ? (
        <p role="alert">{knowledge.error.message}</p>
      ) : knowledge.data?.length ? (
        knowledge.data.map((source) => (
          <Source
            key={source.id}
            isServer={false}
            variant="id-sidebar-ai-chat"
            data={source}
          >
            <SourceFiles
              subjectId={props.data.id}
              project={props.project}
              profileId={profile.id}
              sourceId={source.id}
            />
          </Source>
        ))
      ) : (
        <p className="text-sm text-muted-foreground">No linked knowledge.</p>
      )}
    </Profile>
  );
}
interface ISourceFilesProps {
  subjectId: string;
  project: IComponentPropsExtended["project"];
  profileId: string;
  sourceId: string;
}
function SourceFiles(props: ISourceFilesProps) {
  const files =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFindByIdFilesFind(
      {
        id: props.subjectId,
        socialModuleProfileId: props.project.requesterProfileId,
        socialModuleChatId: props.project.chat.id,
        targetSocialModuleProfileId: props.profileId,
        knowledgeModuleSourceId: props.sourceId,
      },
    );
  return (
    <div className="mt-3 space-y-2 border-t border-border pt-3">
      <p className="text-xs text-muted-foreground">
        Files · {files.data?.length || 0}
      </p>
      {files.error && <p role="alert">{files.error.message}</p>}
      {files.data?.map(({ file }) => (
        <File
          key={file.id}
          isServer={false}
          variant="default"
          language="en"
          data={file}
        />
      ))}
    </div>
  );
}
