"use client";

import { Component as RbacModuleWidget } from "../../../../rbac/widget/index";
import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as SocialModuleProfile } from "../../../../social/profile/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";
import { aiChatProfileHref } from "../../../layout/singlepage/ai-chat-landing/routes";
export interface IThreadCreatePageProps {
  variant?: string;
  profileId: string;
  chatId: string;
}
export function Component({
  variant = "rbac-module-subject-me-social-module-profile-id-chat-id-thread-create-ai-chat",
  profileId,
  chatId,
}: IThreadCreatePageProps) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="ai-chat-dashboard"
        page="chat"
        profileSelect={(props) => (
          <SocialModuleProfile
            profileId={profileId}
            {...props}
            variant="select-ai-chat-project"
          />
        )}
        subjectAccount={({ onNavigate }) => (
          <RbacModuleSubject
            variant="me-account"
            showTokens
            page="chat"
            onNavigate={onNavigate}
          />
        )}
      >
        <RbacModuleWidget
          variant="subject-me-social-module-profile-id-chat-id-thread-create-ai-chat"
          profileId={profileId}
          chatId={chatId}
          cancelHref={aiChatProfileHref(profileId)}
        />
      </HostModuleLayout>
    </div>
  );
}
