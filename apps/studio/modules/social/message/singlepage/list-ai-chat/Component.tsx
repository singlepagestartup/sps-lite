"use client";

import { Component as KnowledgeModuleSource } from "../../../../knowledge/source/index";
import { useProfileSources } from "../../../../knowledge/source/singlepage/id/ai-chat/Source";
import { Component as SocialModuleProfile } from "../../../profile/index";
import { Component as MessageOverview } from "../id/ai-chat/index";
import { useCallback, useRef, useEffect, useState } from "react";
import { type IProjectAgent } from "../../../profile/singlepage/agent/id/ai-chat/resolver";
import type { IProjectMessage } from "../../../profile/singlepage/scope/ai-chat/project/state";

export interface IMessageListProps {
  variant?: string;
  threadId: string;
  messages: IProjectMessage[];
  className?: string;
}
export function Component({
  variant = "list-ai-chat",
  threadId,
  messages,
  className = "",
}: IMessageListProps) {
  const sources = useProfileSources();
  const [profile, setProfile] = useState<IProjectAgent | null>(null);
  const selectProfile = useCallback(
    (selected: IProjectAgent) => setProfile(selected),
    [],
  );
  const end = useRef<HTMLDivElement>(null);
  const previous = useRef(messages.length);
  useEffect(() => {
    if (messages.length > previous.current)
      end.current?.scrollIntoView({ block: "nearest", behavior: "instant" });
    previous.current = messages.length;
  }, [messages.length]);
  return (
    <>
      <div
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
      <SocialModuleProfile
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
