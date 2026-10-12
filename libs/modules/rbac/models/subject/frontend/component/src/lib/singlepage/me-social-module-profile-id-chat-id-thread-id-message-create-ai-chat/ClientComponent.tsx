"use client";
import { useRef, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Paperclip, Send } from "lucide-react";
import { Icon } from "@sps/ui-adapter";
import { api } from "@sps/rbac/models/subject/sdk/client";
import {
  getAIChatDocument,
  RBAC_AI_REACTION_REQUEST_METADATA_KEY,
} from "@sps/rbac/models/subject/sdk/model";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  const project = props.project;
  const scope = {
    id: props.data.id,
    socialModuleProfileId: project.requesterProfileId,
    socialModuleChatId: project.chat.id,
    targetSocialModuleProfileId: project.profile.id,
  };

  const messageScope = {
    id: props.data.id,
    socialModuleProfileId: project.requesterProfileId,
    socialModuleChatId: project.chat.id,
    socialModuleThreadId: props.thread.id,
  };
  const document = getAIChatDocument(props.thread.metadata);
  const isDocument = document?.profileId === project.profile.id;
  const sources =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFind(
      { ...scope, reactQueryOptions: { enabled: isDocument } },
    );
  const documentSources =
    document?.profileId === project.profile.id
      ? (sources.data || []).filter((source) =>
          document.sourceIds.includes(source.id),
        )
      : [];
  const selectedSource = isDocument
    ? documentSources.find((source) => source.id === props.target)
    : undefined;
  const target = selectedSource?.id || "whole";
  const setTarget = props.onTargetChange;
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);
  const createMessage =
    api.socialModuleProfileFindByIdChatFindByIdThreadFindByIdMessageCreate(
      messageScope,
    );
  return (
    <form
      className="border-t border-border p-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setError("");
        try {
          await createMessage.mutateAsync({
            ...messageScope,
            data: {
              description: isDocument
                ? `${
                    selectedSource
                      ? `Working on knowledge: ${selectedSource.title} (Source ID: ${selectedSource.id}) in ${props.thread.title || "this document"}.`
                      : `Working on the whole document: ${props.thread.title || "this document"}.`
                  }\n\n${message}`
                : message,
              files,
              metadata: {
                [RBAC_AI_REACTION_REQUEST_METADATA_KEY]: {
                  version: 1,
                  modelId: "auto",
                  reasoning: "auto",
                  skillIds: [],
                  useKnowledgeSearch: true,
                },
                ...(isDocument &&
                documentSources.some((source) => source.id === target)
                  ? { aiChatDocumentSourceId: target }
                  : {}),
              },
            },
          });
          setMessage("");
          setFiles([]);
          if (fileInput.current) fileInput.current.value = "";
        } catch (error) {
          setError(
            error instanceof Error
              ? error.message
              : "Message could not be sent",
          );
        }
      }}
    >
      {isDocument && (
        <div className="mb-3 flex min-w-0 flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground">Working on</span>
          <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger asChild>
              <button
                type="button"
                aria-label="Working on"
                className="inline-flex min-h-9 min-w-0 max-w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                <Icon name="file-text" className="size-4" />
                <span className="truncate">
                  {target === "whole"
                    ? "Whole document"
                    : documentSources.find((source) => source.id === target)
                        ?.title || "Whole document"}
                </span>
                <Icon name="caret-down" className="size-4" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="start"
                sideOffset={6}
                collisionPadding={12}
                className="z-50 max-h-80 w-72 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-lg border border-border bg-card p-1 font-default text-foreground shadow-md"
              >
                <DropdownMenu.Label className="px-3 py-2 text-xs font-semibold text-muted-foreground">
                  {props.thread.title || "Products.md"} · working context
                </DropdownMenu.Label>
                <DropdownMenu.RadioGroup
                  value={target}
                  onValueChange={setTarget}
                >
                  {[
                    { id: "whole", title: "Whole document" },
                    ...documentSources,
                  ].map((item) => (
                    <DropdownMenu.RadioItem
                      key={item.id}
                      value={item.id}
                      className="relative flex min-h-10 cursor-pointer items-center rounded-md py-2 pl-8 pr-3 text-sm outline-none data-highlighted:bg-muted"
                    >
                      <DropdownMenu.ItemIndicator className="absolute left-2">
                        <Icon name="check" className="size-4" />
                      </DropdownMenu.ItemIndicator>
                      {item.title}
                    </DropdownMenu.RadioItem>
                  ))}
                </DropdownMenu.RadioGroup>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      )}
      <div className="rounded-2xl border border-border p-3">
        <textarea
          aria-label="Message"
          placeholder={
            isDocument
              ? "Discuss this knowledge or request a change."
              : "What do you want to work on?"
          }
          className="min-h-16 w-full resize-none bg-transparent text-sm outline-none"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <label className="flex min-h-10 cursor-pointer items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Paperclip className="size-4" />
            Attach files
            <input
              ref={fileInput}
              aria-label="Attach files to message"
              className="sr-only"
              type="file"
              multiple
              onChange={(event) =>
                setFiles(Array.from(event.target.files || []))
              }
            />
          </label>
          <button
            disabled={createMessage.isPending || !message.trim()}
            className="flex min-h-10 items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 text-sm font-semibold disabled:opacity-50"
          >
            <Send className="size-4" />
            {createMessage.isPending ? "Sending…" : "Send"}
          </button>
        </div>
        {files.map((file) => (
          <p
            key={`${file.name}:${file.lastModified}`}
            className="mt-2 text-xs text-muted-foreground"
          >
            {file.name}
          </p>
        ))}
      </div>
      {error && (
        <p role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </form>
  );
}
