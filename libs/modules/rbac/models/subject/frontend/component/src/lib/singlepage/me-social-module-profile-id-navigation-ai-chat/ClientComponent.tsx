"use client";
import { getAIChatDocument } from "@sps/rbac/models/subject/sdk/model";
import { AI_CHAT_DOCUMENTS } from "@sps/shared-utils";
import { Component as Profile } from "@sps/social/models/profile/frontend/component";
import { Component as Thread } from "@sps/social/models/thread/frontend/component";
import {
  projectHref,
  projectBaseHref,
  findProjectThreads,
  findProjectProfile,
} from "../me-social-module-profile-id-chat-id-thread-id-ai-chat/utils";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  const project = props.project;
  const threads = {
    ...props.threadsRead,
    refetch: props.threadsRead.refetch || (() => window.location.reload()),
  };
  const documents = AI_CHAT_DOCUMENTS.flatMap((definition) =>
    (threads.data || []).filter((thread) => {
      const document = getAIChatDocument(thread.metadata);
      return (
        document?.profileId === project.profile.id &&
        document.key === definition.key
      );
    }),
  );
  return (
    <Profile
      isServer={false}
      variant="sidebar-ai-chat-project"
      language={props.language}
      data={project.profile}
      apiProps={{
        reactQueryOptions: {
          initialData: project.profile,
          queryFn: () =>
            findProjectProfile({
              subjectId: props.data.id,
              profileId: project.profile.id,
            }),
        },
      }}
      settingsHref={`${projectBaseHref(project)}/settings`}
      newThreadHref={`${projectBaseHref(project)}/threads/create`}
      settingsSelected={props.selected === "settings"}
      creatingThread={props.selected === "create"}
      threads={
        <>
          {threads.data
            ?.filter((thread) => !getAIChatDocument(thread.metadata))
            .map((thread) => (
              <Thread
                key={thread.id}
                isServer={false}
                variant="list-item-sidebar-ai-chat"
                language={props.language}
                data={thread}
                apiProps={{
                  reactQueryOptions: {
                    initialData: thread,
                    queryFn: async () =>
                      (
                        await findProjectThreads({
                          subjectId: props.data.id,
                          chatId: project.chat.id,
                        })
                      ).find((item) => item.id === thread.id),
                  },
                }}
                href={projectHref(project, thread.id)}
                selected={thread.id === props.threadId}
                topic
              />
            ))}
        </>
      }
    >
      <Profile
        isServer={false}
        variant="thread-list-sidebar-ai-chat"
        language={props.language}
        data={project.profile}
        apiProps={{
          reactQueryOptions: {
            initialData: project.profile,
            queryFn: () =>
              findProjectProfile({
                subjectId: props.data.id,
                profileId: project.profile.id,
              }),
          },
        }}
        className="my-4"
        documents={documents.map((thread) => ({
          data: thread,
          apiProps: {
            reactQueryOptions: {
              initialData: thread,
              queryFn: async () =>
                (
                  await findProjectThreads({
                    subjectId: props.data.id,
                    chatId: project.chat.id,
                  })
                ).find((item) => item.id === thread.id),
            },
          },
          href: projectHref(project, thread.id),
          selected: thread.id === (props.threadId || project.thread.id),
        }))}
      />
    </Profile>
  );
}
