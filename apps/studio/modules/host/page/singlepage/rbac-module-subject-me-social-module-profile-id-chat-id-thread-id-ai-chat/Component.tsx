"use client";

import { Component as RbacModuleWidget } from "../../../../rbac/widget/index";
import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as SocialModuleProfile } from "../../../../social/profile/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";
import { aiChatProfileChatId } from "../../../layout/singlepage/ai-chat-landing/routes";
import { useStudioAccount } from "../../../../rbac/subject/singlepage/me/account/Account";

export interface IProfilePageProps {
  variant?: string;
  profileId: string;
}
export function Component({
  variant = "rbac-module-subject-me-social-module-profile-id-chat-id-thread-id-ai-chat",
  profileId,
}: IProfilePageProps) {
  const { signedIn } = useStudioAccount();
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="ai-chat-dashboard"
        page="chat"
        profileSelect={
          signedIn
            ? (props) => (
                <SocialModuleProfile
                  profileId={profileId}
                  {...props}
                  variant="select-ai-chat-project"
                />
              )
            : undefined
        }
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
          variant="subject-me-social-module-profile-id-chat-id-thread-id-ai-chat"
          profileId={profileId}
          chatId={aiChatProfileChatId(profileId)}
        />
      </HostModuleLayout>
    </div>
  );
}
