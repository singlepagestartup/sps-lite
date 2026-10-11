"use client";

import { Component as SocialModuleThread } from "../../../../thread/index";
import type { ReactNode } from "react";

export interface IChatIdProps {
  variant?: string;
  chatId?: string;
  navigation?: ReactNode;
  messageCreate?: ReactNode;
  thread?: ReactNode;
}
export function Component({
  variant = "id-ai-chat",
  chatId = "project-chat",
  navigation,
  messageCreate,
  thread,
}: IChatIdProps) {
  return (
    <section
      data-ds-block="social.chat.id-ai-chat"
      data-id={chatId}
      data-chat-id={chatId}
      className="@container/chat flex min-h-0 min-w-0 flex-1 flex-col"
      aria-label="Active chat"
      data-module="social"
      data-model="chat"
      data-variant={variant}
    >
      {thread ?? (
        <SocialModuleThread
          variant="id-ai-chat"
          navigation={navigation}
          messageCreate={messageCreate}
        />
      )}
    </section>
  );
}
