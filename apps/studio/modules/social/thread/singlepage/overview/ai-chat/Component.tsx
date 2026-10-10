"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../website-builder/feature/index";

import { type ReactNode as ReactNodePresentation } from "react";
import { Component as WebsiteBuilderModuleButton } from "../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../../website-builder/feature/singlepage/icon/icons.json";
import { Component as KnowledgeModuleSource } from "../../../../../knowledge/source/index";
import { useEffect, useRef, type ReactNode } from "react";
import { useSource } from "../../../../../knowledge/source/singlepage/overview/document/ai-chat/Source";
import { Component as ThreadMessageList } from "../../message/list/ai-chat/index";
import { ThreadProvider, useThread } from "./Thread";
interface IPanelHeaderProps {
  title: string;
  label: string;
  navigation?: ReactNodePresentation;
  actions?: ReactNodePresentation;
}
function PanelHeader({ title, label, navigation, actions }: IPanelHeaderProps) {
  return (
    <header className="sticky top-18 z-10 flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-sps-line bg-sps-white p-4 @[760px]/workspace:top-0">
      <div className="flex min-w-0 items-center gap-3">
        {navigation}
        <div className="min-w-0">
          <p className={`text-xs ${kit.muted}`}>{label}</p>
          <h2 className="mt-1 break-words text-base font-semibold">{title}</h2>
        </div>
      </div>
      {actions}
    </header>
  );
}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface IThreadOverviewProps {
  variant?: string;
  navigation?: ReactNode;
  messageCreate?: ReactNode;
}
export function Component(props: IThreadOverviewProps) {
  return (
    <ThreadProvider>
      <ThreadOverview
        {...props}
        variant={props.variant ?? "overview-ai-chat"}
      />
    </ThreadProvider>
  );
}
function ThreadOverview({
  variant = "overview-ai-chat",
  navigation,
  messageCreate,
}: IThreadOverviewProps) {
  const {
    thread,
    pane,
    setPane,
    workingOn,
    discuss,
    proposal,
    apply,
    dismiss,
    error,
  } = useThread();
  const { source } = useSource();
  const proposalView = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pane === "chat" && proposal)
      proposalView.current?.scrollIntoView({ block: "nearest" });
  }, [pane, proposal]);
  return (
    <div
      data-ds-block="social.thread.overview-ai-chat"
      data-id={thread.id}
      data-thread-id={thread.id}
      data-knowledge-source-ids={source.id}
      className="flex min-h-0 min-w-0 flex-1 flex-col"
      aria-label={thread.title}
      data-module="social"
      data-model="thread"
      data-variant={variant}
    >
      <PanelHeader
        title={thread.title}
        label="Document thread"
        navigation={navigation}
        actions={
          <div className="flex rounded-lg bg-sps-grey p-1 @[900px]/chat:hidden">
            {(["chat", "document"] as const).map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={pane === item}
                onClick={() => setPane(item)}
                className={`min-h-9 rounded-md px-3 text-xs font-semibold ${kit.focus} ${pane === item ? "bg-sps-white" : kit.muted}`}
              >
                {item === "chat" ? "Chat" : "Document"}
              </button>
            ))}
          </div>
        }
      />
      <div className="grid min-h-0 min-w-0 flex-1 @[900px]/chat:grid-cols-[minmax(0,1fr)_360px]">
        <div
          className={`${pane === "chat" ? "flex" : "hidden"} min-h-0 min-w-0 flex-col overflow-y-auto @[900px]/chat:flex`}
        >
          <div className="min-h-0 flex-1 overflow-y-auto">
            <ThreadMessageList className="min-h-[50dvh] @[760px]/workspace:min-h-0" />
            {proposal && (
              <div
                ref={proposalView}
                className="mx-4 mb-4 rounded-xl border border-sps-line bg-sps-grey p-4"
              >
                <p className="text-xs font-semibold">
                  Proposed update · {source.title}
                </p>
                <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6">
                  {proposal.text}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button onClick={apply}>
                    <Icon name="pencil-simple" className="size-4" />
                    Apply to knowledge
                  </Button>
                  <Button variant="plain" onClick={dismiss}>
                    Dismiss
                  </Button>
                </div>
                {error && (
                  <p role="alert" className="mt-3 text-sm">
                    {error}
                  </p>
                )}
              </div>
            )}
          </div>
          {messageCreate}
        </div>
        <div
          className={`${pane === "document" ? "block" : "hidden"} min-h-0 min-w-0 overflow-y-auto border-sps-line @[900px]/chat:block @[900px]/chat:border-l`}
        >
          <KnowledgeModuleSource
            variant="overview-document-ai-chat"
            discussing={workingOn === "source"}
            onDiscuss={discuss}
          />
        </div>
      </div>
    </div>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  muted: "text-sps-muted",
  focus: focus,
};
const Button = forwardRefControl<
  HTMLButtonElement,
  ButtonControlProps<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "plain" | "danger";
  }
>(function Button({ variant = "primary", ...props }, ref) {
  return (
    <WebsiteBuilderModuleButton
      {...props}
      variant="control"
      appearance={variant}
      ref={ref}
    />
  );
});
