"use client";
import { Component as Authors } from "@sps/social/relations/profiles-to-messages/frontend/component";
import { Component as MessageFiles } from "@sps/social/relations/messages-to-file-storage-module-files/frontend/component";
import { memo, useCallback } from "react";
import { Bot, User } from "lucide-react";
import Markdown from "markdown-to-jsx";
import type { IComponentPropsExtended } from "./interface";
import type { IModel } from "@sps/social/models/message/sdk/model";

const Row = memo(function Row({
  message,
  own,
  assistantProfileId,
  onProfileOpen,
}: {
  message: IModel;
  own: boolean;
  assistantProfileId?: string;
  onProfileOpen?: (profileId: string) => void;
}) {
  const open = useCallback(() => {
    if (assistantProfileId) onProfileOpen?.(assistantProfileId);
  }, [assistantProfileId, onProfileOpen]);
  return (
    <article
      data-id={message.id}
      className={`flex gap-3 p-5 ${own ? "bg-muted/50" : "bg-card"}`}
    >
      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${own ? "bg-muted" : "bg-primary text-primary-foreground"}`}
      >
        {own ? (
          <User className="size-4" />
        ) : onProfileOpen && assistantProfileId ? (
          <button
            type="button"
            aria-label="Open assistant profile"
            className="grid size-8 place-items-center rounded-lg hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={open}
          >
            <Bot className="size-4" />
          </button>
        ) : (
          <Bot className="size-4" />
        )}
      </span>
      <div className="min-w-0 flex-1">
        <p className="mb-2 text-xs font-semibold text-muted-foreground">
          {own ? (
            "You"
          ) : onProfileOpen && assistantProfileId ? (
            <button
              type="button"
              aria-label="About this assistant"
              onClick={open}
              className="rounded-md text-left hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Knowledge assistant
            </button>
          ) : (
            "Knowledge assistant"
          )}
        </p>
        <div className="prose max-w-none break-words text-sm leading-6">
          <Markdown options={{ disableParsingRawHTML: true }}>
            {message.description || ""}
          </Markdown>
        </div>
        <MessageFiles
          isServer={false}
          variant="find"
          apiProps={{
            params: {
              filters: {
                and: [{ column: "messageId", method: "eq", value: message.id }],
              },
            },
          }}
        >
          {({ data }) =>
            data?.map((link) => (
              <MessageFiles
                key={link.id}
                isServer={false}
                variant="default"
                language="en"
                data={link}
              />
            ))
          }
        </MessageFiles>
      </div>
    </article>
  );
});
export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="social"
      data-model="message"
      data-variant="list-ai-chat"
      aria-live="polite"
    >
      {!props.data.length && (
        <div className="flex gap-3 p-5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            {props.onProfileOpen && props.assistantProfileId ? (
              <button
                type="button"
                aria-label="Open assistant profile"
                onClick={() => props.onProfileOpen?.(props.assistantProfileId!)}
                className="grid size-8 place-items-center rounded-lg hover:opacity-80 focus-visible:outline-2"
              >
                <Bot className="size-4" />
              </button>
            ) : (
              <Bot className="size-4" />
            )}
          </span>
          <div>
            <p className="mb-2 text-xs font-semibold text-muted-foreground">
              {props.onProfileOpen && props.assistantProfileId ? (
                <button
                  type="button"
                  aria-label="About this assistant"
                  onClick={() =>
                    props.onProfileOpen?.(props.assistantProfileId!)
                  }
                  className="rounded-md text-left hover:text-foreground focus-visible:outline-2"
                >
                  Knowledge assistant
                </button>
              ) : (
                "Knowledge assistant"
              )}
            </p>
            <p className="text-sm leading-6">
              {props.documentTitle &&
                `${props.documentTitle} is ready to work on. `}
              {props.emptyMessage || "Start a conversation about your project."}
            </p>
          </div>
        </div>
      )}
      {[...props.data]
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        )
        .map((message) => (
          <Authors
            key={message.id}
            isServer={false}
            variant="find"
            apiProps={{
              params: {
                filters: {
                  and: [
                    { column: "messageId", method: "eq", value: message.id },
                  ],
                },
              },
            }}
          >
            {({ data }) => (
              <Row
                message={message}
                onProfileOpen={props.onProfileOpen}
                assistantProfileId={
                  data?.find(
                    (link) => link.profileId !== props.requesterProfileId,
                  )?.profileId || props.assistantProfileId
                }
                own={
                  !!data?.some(
                    (link) => link.profileId === props.requesterProfileId,
                  )
                }
              />
            )}
          </Authors>
        ))}
    </div>
  );
}
