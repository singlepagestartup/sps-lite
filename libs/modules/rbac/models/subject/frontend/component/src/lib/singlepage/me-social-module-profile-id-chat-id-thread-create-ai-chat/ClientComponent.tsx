"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { projectHref } from "../me-social-module-profile-id-chat-id-thread-id-ai-chat/utils";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  if (!props.project)
    return (
      <p role="alert" className="p-8">
        Choose a project.
      </p>
    );
  return (
    <CreateThread
      key={props.project.profile.id}
      {...props}
      project={props.project}
    />
  );
}
function CreateThread(
  props: IComponentPropsExtended & {
    project: NonNullable<IComponentPropsExtended["project"]>;
  },
) {
  const router = useRouter();
  const { project } = props;
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const create = api.socialModuleChatFindByIdThreadCreate({
    id: props.data.id,
    socialModuleChatId: project.chat.id,
  });
  return (
    <div className="min-w-0 flex-1">
      <header className="border-b border-border p-5">
        <p className="text-xs text-muted-foreground">Thread</p>
        <h1 className="mt-1 text-base font-semibold">New thread</h1>
      </header>
      <form
        className="mx-auto grid max-w-xl gap-4 px-5 py-8"
        onSubmit={async (event) => {
          event.preventDefault();
          if (!name.trim() || create.isPending) return;
          setError("");
          try {
            const thread = await create.mutateAsync({
              id: props.data.id,
              socialModuleChatId: project.chat.id,
              data: {
                title: name.trim(),
                variant: "ai-chat",
              },
            });
            router.push(projectHref(project, thread.id));
          } catch (error) {
            setError(
              error instanceof Error ? error.message : "Thread creation failed",
            );
          }
        }}
      >
        <p className="mb-1 text-sm leading-6 text-muted-foreground">
          Give this thread a name.
        </p>
        <label className="grid gap-3 text-sm font-semibold">
          Thread name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="What do you want to work on?"
            className="min-h-12 rounded-xl border border-border px-4 font-normal"
            required
            maxLength={200}
          />
        </label>
        <div className="mt-2 flex flex-wrap gap-3">
          <button
            disabled={create.isPending || !name.trim()}
            className="flex min-h-11 items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 text-sm font-semibold disabled:opacity-50"
          >
            <MessageCircle className="size-4" />
            {create.isPending ? "Creating…" : "Create thread"}
          </button>
          <Link
            href={projectHref(project)}
            className="inline-flex min-h-11 items-center rounded-xl border border-border px-5 text-sm font-semibold"
          >
            Cancel
          </Link>
        </div>
        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
