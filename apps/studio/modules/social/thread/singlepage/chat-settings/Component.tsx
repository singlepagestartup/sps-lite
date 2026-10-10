import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import * as Tabs from "@radix-ui/react-tabs";
import { forwardRef as forwardRef } from "react";
import { type ElementRef as ElementRef } from "react";
import { type ComponentPropsWithoutRef as ComponentPropsWithoutRef } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { forwardRef as forwardRefPresentation } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMergePresentation } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ChatImagePicker,
  ChatParticipantPicker,
} from "../list-default/ChatControls";
import type {
  SocialThreadListDefaultProps,
  SocialPreviewProfile,
} from "../list-default/Component";
import type { SocialPreviewAttachment } from "../../../widget/singlepage/chat-overview-default/utils";
interface IModuleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
type IconName = keyof typeof IconGlyphs;
function createIcon(name: IconName) {
  const Component = forwardRefPresentation<SVGSVGElement, IModuleIconProps>(
    function ModuleGlyph({ className, size = 20, children, ...props }, ref) {
      return (
        <span className="contents">
          <Icon
            name={name}
            className={twMergePresentation("h-5 w-5", className)}
            svgProps={{ ...props, ref, width: size, height: size }}
          />
        </span>
      );
    },
  );
  Component.displayName = `Phosphor(${name})`;
  return Component;
}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface SocialChatSettingsProps {
  open: boolean;
  onCloseAutoFocus?: Dialog.DialogContentProps["onCloseAutoFocus"];
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  threads: SocialThreadListDefaultProps["threads"];
  memberIds: string[];
  profiles: SocialPreviewProfile[];
  image?: SocialPreviewAttachment;
  onImageChange?: (file: File | null) => void;
  initialTab?: "general" | "threads" | "members";
  initialThreadId?: string;
  onChatChange?: (title: string, description: string) => void;
  onThreadsChange: (threads: SocialThreadListDefaultProps["threads"]) => void;
  onMembersChange?: (ids: string[]) => void;
}
export function Component(props: SocialChatSettingsProps) {
  const [portal, setPortal] = useState<HTMLDivElement | null>(null);
  const [tab, setTab] = useState(props.initialTab ?? "general");
  const [name, setName] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [threadName, setThreadName] = useState(
    props.threads.find((t) => t.id === props.initialThreadId)?.title ?? "",
  );
  const [threadDescription, setThreadDescription] = useState(
    props.threads.find((t) => t.id === props.initialThreadId)?.description ??
      "",
  );
  const [editingId, setEditingId] = useState(props.initialThreadId);
  const [members, setMembers] = useState(props.memberIds);
  const [status, setStatus] = useState("");
  function saveThread(event: React.FormEvent) {
    event.preventDefault();
    if (!threadName.trim()) return;
    if (editingId)
      props.onThreadsChange(
        props.threads.map((t) =>
          t.id === editingId
            ? { ...t, title: threadName.trim(), description: threadDescription }
            : t,
        ),
      );
    else
      props.onThreadsChange([
        ...props.threads,
        {
          id: crypto.randomUUID(),
          title: threadName.trim(),
          description: threadDescription,
          excerpt: "No messages yet",
          date: "Now",
          unread: 0,
        },
      ]);
    setStatus(
      editingId
        ? "Thread updated in this preview."
        : "Thread added in this preview.",
    );
    setEditingId(undefined);
    setThreadName("");
    setThreadDescription("");
  }
  return (
    <>
      {" "}
      <div ref={setPortal} data-ds-block="social.thread.chat-settings" />
      <Dialog.Root open={props.open} onOpenChange={props.onOpenChange}>
        {portal && (
          <Dialog.Portal container={portal}>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
            <Dialog.Content
              onCloseAutoFocus={props.onCloseAutoFocus}
              className="fixed left-1/2 top-1/2 z-[60] max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 text-[var(--color-sps-graphite)] shadow-xl sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <Dialog.Title className="text-2xl font-semibold">
                  Chat settings
                </Dialog.Title>
                <Dialog.Close
                  className={`${kit.plain} px-3`}
                  aria-label="Close chat settings"
                >
                  <X className="h-5 w-5" />
                </Dialog.Close>
              </div>
              <Dialog.Description className={`mt-2 text-sm ${kit.muted}`}>
                Local preview of chat details, chat-to-thread links and profile
                membership.
              </Dialog.Description>
              <SectionTabsRoot
                value={tab}
                onValueChange={(value) => setTab(value as typeof tab)}
              >
                <SectionTabsList
                  className="mt-6 grid grid-cols-3"
                  aria-label="Chat settings sections"
                >
                  {(["general", "threads", "members"] as const).map((value) => (
                    <SectionTabsTrigger
                      value={value}
                      key={value}
                      className="px-1"
                    >
                      {value === "general"
                        ? "General"
                        : value === "threads"
                          ? "Threads"
                          : "Members"}
                    </SectionTabsTrigger>
                  ))}
                </SectionTabsList>
                <SectionTabsContent value="general" className="mt-6">
                  <form
                    className="grid gap-4"
                    onSubmit={(event) => {
                      event.preventDefault();
                      props.onChatChange?.(name.trim(), description);
                      setStatus("Chat details saved in this preview.");
                    }}
                  >
                    {props.onImageChange && (
                      <ChatImagePicker
                        image={props.image}
                        onChange={props.onImageChange}
                      />
                    )}
                    <label className="grid gap-2">
                      <span className={kit.label}>Chat name</span>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={kit.field}
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className={kit.label}>Chat description</span>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={`${kit.field} min-h-24`}
                      />
                    </label>
                    <button
                      className={`${kit.button} justify-self-start`}
                      disabled={!name.trim()}
                    >
                      Save chat details
                    </button>
                  </form>
                </SectionTabsContent>
                <SectionTabsContent value="threads" className="mt-6">
                  <div className="grid gap-5">
                    <form className="grid gap-3" onSubmit={saveThread}>
                      <label className="grid gap-2">
                        <span className={kit.label}>
                          {editingId ? "Thread name" : "New thread name"}
                        </span>
                        <input
                          required
                          value={threadName}
                          onChange={(e) => setThreadName(e.target.value)}
                          className={kit.field}
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className={kit.label}>Thread description</span>
                        <textarea
                          value={threadDescription}
                          onChange={(e) => setThreadDescription(e.target.value)}
                          className={`${kit.field} min-h-20`}
                        />
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <button
                          className={kit.button}
                          disabled={!threadName.trim()}
                        >
                          {editingId ? "Save thread" : "Add thread"}
                        </button>
                        {editingId && (
                          <button
                            type="button"
                            className={kit.secondary}
                            onClick={() => {
                              setEditingId(undefined);
                              setThreadName("");
                              setThreadDescription("");
                            }}
                          >
                            Cancel edit
                          </button>
                        )}
                      </div>
                    </form>
                    <ul className="grid gap-2">
                      {props.threads.map((thread) => (
                        <li
                          key={thread.id}
                          className="flex min-w-0 flex-wrap items-center justify-between gap-2 rounded-xl bg-[var(--color-sps-grey)] p-3"
                        >
                          <span className="min-w-0 break-words text-sm font-semibold">
                            {thread.title}
                          </span>
                          <button
                            className={kit.secondary}
                            onClick={() => {
                              setEditingId(thread.id);
                              setThreadName(thread.title);
                              setThreadDescription(thread.description ?? "");
                            }}
                            aria-label={`Edit thread ${thread.title}`}
                          >
                            Edit
                          </button>
                        </li>
                      ))}
                    </ul>
                    {!props.threads.length && (
                      <p className={kit.muted}>
                        No threads yet. Add the first thread above.
                      </p>
                    )}
                  </div>
                </SectionTabsContent>
                <SectionTabsContent value="members" className="mt-6">
                  <div className="grid gap-4">
                    <p className={`text-sm ${kit.muted}`}>
                      Members belong to this chat and can participate in its
                      threads.
                    </p>
                    <ChatParticipantPicker
                      profiles={props.profiles}
                      selectedIds={members}
                      minimum={1}
                      scope="member"
                      onChange={(ids) => {
                        setMembers(ids);
                        props.onMembersChange?.(ids);
                        setStatus("Chat members updated in this preview.");
                      }}
                    />
                  </div>
                </SectionTabsContent>
              </SectionTabsRoot>
              <p role="status" className="mt-4 text-sm">
                {status}
              </p>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </Dialog.Root>
    </>
  );
}
const X = createIcon("x");
const SectionTabsContent = Tabs.Content;
const sectionIndicatorClass =
  "absolute bottom-1.5 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-[var(--color-sps-green)]";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  button: `${buttonBase} bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)] enabled:hover:brightness-95 ${focus}`,
  secondary: `${buttonBase} border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] text-[var(--color-sps-graphite)] enabled:hover:bg-[var(--color-sps-grey)] ${focus}`,
  plain: `${buttonBase} text-[var(--color-sps-muted)] enabled:hover:text-[var(--color-sps-graphite)] ${focus}`,
  field:
    "min-h-12 w-full min-w-0 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 py-2 text-base text-[var(--color-sps-graphite)] outline-none transition motion-reduce:transition-none placeholder:text-[var(--color-sps-muted)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sps-white)] disabled:cursor-not-allowed disabled:bg-[var(--color-sps-grey)] disabled:text-[var(--color-sps-muted)] disabled:opacity-60 [&[readonly]]:bg-[var(--color-sps-grey)] aria-invalid:border-[var(--color-sps-danger)] aria-invalid:focus-visible:ring-[var(--color-sps-danger)]",
  muted: "text-[var(--color-sps-muted)]",
  label: "text-sm font-semibold text-[var(--color-sps-graphite)]",
  focus: focus,
};
const sectionChoiceClass = `relative inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition ${kit.focus} disabled:cursor-not-allowed disabled:opacity-50`;
const SectionTabsTrigger = forwardRef<
  ElementRef<typeof Tabs.Trigger>,
  ComponentPropsWithoutRef<typeof Tabs.Trigger>
>(function SectionTabsTrigger({ className, children, ...props }, ref) {
  return (
    <Tabs.Trigger
      ref={ref}
      className={twMerge(
        sectionChoiceClass,
        "group text-[var(--color-sps-muted)] hover:text-[var(--color-sps-graphite)] data-[state=active]:bg-[var(--color-sps-white)] data-[state=active]:text-[var(--color-sps-graphite)]",
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className={`${sectionIndicatorClass} hidden group-data-[state=active]:block`}
      />
    </Tabs.Trigger>
  );
});
const SectionTabsList = forwardRef<
  ElementRef<typeof Tabs.List>,
  ComponentPropsWithoutRef<typeof Tabs.List>
>(function SectionTabsList({ className, ...props }, ref) {
  return (
    <Tabs.List
      ref={ref}
      className={twMerge(
        "flex flex-wrap gap-1 rounded-xl bg-[var(--color-sps-grey)] p-1",
        className,
      )}
      {...props}
    />
  );
});
const SectionTabsRoot = Tabs.Root;
