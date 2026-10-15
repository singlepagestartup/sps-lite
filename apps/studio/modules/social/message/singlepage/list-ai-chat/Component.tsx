"use client";
import type { IComponentProps, IMessageListProps } from "./interface";
export type { IMessageListProps } from "./interface";

import { Component as KnowledgeModuleSource } from "../../../../knowledge/source/index";
import { useProfileSources } from "../../../../knowledge/source/singlepage/id/ai-chat/Source";
import { Component as Profile } from "../../../profile/index";
import { Component as MessageOverview } from "../id/ai-chat/index";
import {
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { type IProjectAgent } from "../../../profile/singlepage/agent/id/ai-chat/resolver";
import type { IProjectMessage } from "../../../profile/singlepage/scope/ai-chat/project/state";

export function Component({
  variant = "list-ai-chat",
  threadId,
  messages,
  className = "",
}: IComponentProps) {
  const sources = useProfileSources();
  const [profile, setProfile] = useState<IProjectAgent | null>(null);
  const selectProfile = useCallback(
    (selected: IProjectAgent) => setProfile(selected),
    [],
  );
  const end = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const followingLatest = useRef(true);
  const latest = messages[messages.length - 1];
  useLayoutEffect(() => {
    const pane = list.current?.closest<HTMLElement>("[data-ai-chat-messages]");
    if (pane) {
      followingLatest.current = true;
      pane.scrollTop = pane.scrollHeight;
    }
  }, [latest?.id, latest?.text, messages.length]);
  useEffect(() => {
    const content = list.current,
      pane = content?.closest<HTMLElement>("[data-ai-chat-messages]");
    if (!content || !pane) return;
    const onScroll = () => {
      followingLatest.current =
        pane.scrollHeight - pane.scrollTop - pane.clientHeight < 80;
    };
    pane.addEventListener("scroll", onScroll, { passive: true });
    const observer =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(() => {
            if (followingLatest.current) pane.scrollTop = pane.scrollHeight;
          });
    observer?.observe(content);
    return () => {
      pane.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);
  return (
    <>
      <div
        ref={list}
        data-ds-block="social.message.list-ai-chat"
        data-thread-id={threadId}
        role="log"
        aria-label="Messages"
        aria-live="polite"
        className={`${className} space-y-6 p-4 @[640px]:p-6`}
        data-module="social"
        data-model="message"
        data-variant={variant}
      >
        {messages.map((message) => (
          <MessageOverview
            key={message.id}
            message={message}
            agent={message.agent ?? null}
            onSelect={selectProfile}
            showContext
          />
        ))}
        <div ref={end} />
      </div>
      <Profile
        variant="agent-id-ai-chat"
        agent={profile}
        knowledgeCount={sources.length}
        knowledge={
          sources.length
            ? sources.map((source) => (
                <KnowledgeModuleSource
                  key={source.id}
                  variant="id-sidebar-ai-chat"
                  data={source}
                />
              ))
            : undefined
        }
        onClose={() => setProfile(null)}
      />
    </>
  );
}
