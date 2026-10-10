"use client";

import { Component as SocialModuleProfile } from "../../../../profile/index";
import { Component as MessageOverview } from "../../overview/ai-chat/index";
import { useCallback, useRef, useEffect, useState } from "react";
import { type IProjectAgent } from "../../../../profile/singlepage/agent/overview/ai-chat/resolver";
import type { IProjectMessage } from "../../../../profile/singlepage/scope/ai-chat/project/state";

export interface IMessageListProps {
  threadId: string;
  messages: IProjectMessage[];
  className?: string;
}
export function Component({
  threadId,
  messages,
  className = "",
}: IMessageListProps) {
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
        data-module="social"
        data-model="message"
        data-thread-id={threadId}
        data-variant="list-ai-chat"
        role="log"
        aria-label="Messages"
        aria-live="polite"
        className={`${className} space-y-6 p-4 @[640px]:p-6`}
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
        variant="agent-overview-ai-chat"
        agent={profile}
        onClose={() => setProfile(null)}
      />
    </>
  );
}
