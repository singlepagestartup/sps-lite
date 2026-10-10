"use client";

import { Component as SocialModuleThread } from "../../../../thread/index";
import type { ReactNode } from "react";

export interface IChatOverviewProps {
  variant?: string;
  chatId?: string;
  navigation?: ReactNode;
  messageCreate?: ReactNode;
}
export function Component({
  variant = "overview-ai-chat",
  chatId = "project-chat",
  navigation,
  messageCreate,
}: IChatOverviewProps) {
  return (
    <section
      data-ds-block="social.chat.overview-ai-chat"
      data-id={chatId}
      data-chat-id={chatId}
      className="@container/chat flex min-h-0 min-w-0 flex-1 flex-col"
      aria-label="Active chat"
      data-module="social"
      data-model="chat"
      data-variant={variant}
    >
      <SocialModuleThread
        variant="overview-ai-chat"
        navigation={navigation}
        messageCreate={messageCreate}
      />
    </section>
  );
}
