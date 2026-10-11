"use client";

import { Component as SocialModuleMessage } from "../../../../../message/index";
import { useThread } from "../../../id/ai-chat/Thread";

export interface IThreadMessageListProps {
  variant?: string;
  className?: string;
}

export function Component({
  variant = "message-list-ai-chat",
  className,
}: IThreadMessageListProps) {
  const { thread, messages } = useThread();
  return (
    <div
      data-ds-block="social.thread.message-list-ai-chat"
      data-thread-id={thread.id}
      className="min-w-0"
      data-module="social"
      data-model="thread"
      data-variant={variant}
    >
      <SocialModuleMessage
        variant="list-ai-chat"
        threadId={thread.id}
        messages={messages}
        className={className}
      />
    </div>
  );
}
