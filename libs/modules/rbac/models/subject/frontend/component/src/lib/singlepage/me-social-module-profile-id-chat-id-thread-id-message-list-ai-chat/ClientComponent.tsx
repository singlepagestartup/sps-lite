"use client";
import { api as serverApi } from "@sps/rbac/models/subject/sdk/server";
import { clientHost } from "@sps/rbac/models/subject/sdk/model";
import { saturateHeaders } from "@sps/shared-frontend-client-utils";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { getAIChatDocument } from "@sps/rbac/models/subject/sdk/model";
import { AI_CHAT_DOCUMENTS } from "@sps/shared-utils";
import { Component as Messages } from "@sps/social/models/message/frontend/component";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  const messages =
    api.socialModuleProfileFindByIdChatFindByIdThreadFindByIdMessageFind({
      id: props.data.id,
      socialModuleProfileId: props.project.requesterProfileId,
      socialModuleChatId: props.project.chat.id,
      socialModuleThreadId: props.thread.id,
      reactQueryOptions: { refetchInterval: 5000 },
    });
  if (messages.error)
    return (
      <p role="alert" className="p-4 text-destructive">
        {messages.error.message}
      </p>
    );
  const ordered = [...(messages.data || [])].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );
  const document = getAIChatDocument(props.thread.metadata);
  const definition =
    document?.profileId === props.project.profile.id
      ? AI_CHAT_DOCUMENTS.find((item) => item.key === document.key)
      : undefined;
  return (
    <Messages
      isServer={false}
      variant="list-ai-chat"
      keepDataWhileFetching
      apiProps={{
        reactQueryOptions: {
          initialData: ordered,
          queryFn: () =>
            serverApi.socialModuleProfileFindByIdChatFindByIdThreadFindByIdMessageFind(
              {
                id: props.data.id,
                socialModuleProfileId: props.project.requesterProfileId,
                socialModuleChatId: props.project.chat.id,
                socialModuleThreadId: props.thread.id,
                host: clientHost,
                options: {
                  headers: saturateHeaders({ "Cache-Control": "no-store" }),
                },
              },
            ),
        },
        params: {
          filters: {
            and: [
              {
                column: "id",
                method: "inArray",
                value: ordered.map((message) => message.id),
              },
            ],
          },
        },
      }}
      documentTitle={
        definition ? props.thread.title || definition.title : undefined
      }
      emptyMessage={
        definition?.prompt ||
        "Start a conversation about your project. The assistant can use its saved knowledge and attached materials."
      }
      requesterProfileId={props.project.requesterProfileId}
      assistantProfileId={props.project.profile.id}
      onProfileOpen={props.onProfileOpen}
    />
  );
}
