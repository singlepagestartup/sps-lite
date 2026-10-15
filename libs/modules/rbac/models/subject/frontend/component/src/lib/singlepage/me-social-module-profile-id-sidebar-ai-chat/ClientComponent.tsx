"use client";
import { api as serverApi } from "@sps/rbac/models/subject/sdk/server";
import { clientHost } from "@sps/rbac/models/subject/sdk/model";
import { saturateHeaders } from "@sps/shared-frontend-client-utils";
import { findProjectProfile } from "../me-social-module-profile-id-chat-id-thread-id-ai-chat/utils";
import { Component as Profile } from "@sps/social/models/profile/frontend/component";
import { Component as Skill } from "@sps/social/models/skill/frontend/component";
import { Component as Source } from "@sps/knowledge/models/source/frontend/component";
import { Component as File } from "@sps/file-storage/models/file/frontend/component";
import type { IComponentPropsExtended, ISourceFilesProps } from "./interface";

export function Component(props: IComponentPropsExtended) {
  const scope = {
    id: props.data.id,
    socialModuleProfileId: props.project.requesterProfileId,
    socialModuleChatId: props.project.chat.id,
  };
  const profiles = props.profilesRead;
  const profile = profiles.data?.find((item) => item.id === props.profileId);
  const skills = props.skillsRead;
  const knowledge = props.knowledgeRead;
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
      apiProps={{
        reactQueryOptions: {
          initialData: profile,
          queryFn: () =>
            findProjectProfile({
              subjectId: props.data.id,
              profileId: profile.id,
            }),
        },
      }}
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
              apiProps={{
                reactQueryOptions: {
                  initialData: skill,
                  queryFn: async () => {
                    const records =
                      await serverApi.socialModuleProfileFindByIdChatFindByIdProfileFindByIdSkillFind(
                        {
                          ...scope,
                          targetSocialModuleProfileId: profile.id,
                          host: clientHost,
                          options: {
                            headers: saturateHeaders({
                              "Cache-Control": "no-store",
                            }),
                          },
                        },
                      );
                    const current = records.find(
                      (record) => record.id === skill.id,
                    );
                    if (!current)
                      throw new Error(
                        "Skill is no longer linked to this assistant.",
                      );
                    return current;
                  },
                },
              }}
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
            apiProps={{
              reactQueryOptions: {
                initialData: source,
                queryFn: async () => {
                  const records =
                    await serverApi.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFind(
                      {
                        ...scope,
                        targetSocialModuleProfileId: profile.id,
                        host: clientHost,
                        options: {
                          headers: saturateHeaders({
                            "Cache-Control": "no-store",
                          }),
                        },
                      },
                    );
                  const current = records.find(
                    (record) => record.id === source.id,
                  );
                  if (!current)
                    throw new Error(
                      "Source is no longer linked to this assistant.",
                    );
                  return current;
                },
              },
            }}
          >
            {props.sourceFiles?.[source.id]}
          </Source>
        ))
      ) : (
        <p className="text-sm text-muted-foreground">No linked knowledge.</p>
      )}
    </Profile>
  );
}
export function SourceFiles({ files, error }: ISourceFilesProps) {
  return (
    <div className="mt-3 space-y-2 border-t border-border pt-3">
      <p className="text-xs text-muted-foreground">
        Files · {files?.length || 0}
      </p>
      {error && <p role="alert">{error}</p>}
      {files?.map(({ file }) => (
        <File
          key={file.id}
          isServer={false}
          variant="attachment-ai-chat"
          data={file}
          apiProps={{
            reactQueryOptions: { initialData: file, queryFn: async () => file },
          }}
        />
      ))}
    </div>
  );
}
