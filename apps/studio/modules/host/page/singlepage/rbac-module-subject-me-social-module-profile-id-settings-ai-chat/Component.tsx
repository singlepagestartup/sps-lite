"use client";

import { Component as RbacModuleWidget } from "../../../../rbac/widget/index";
import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as SocialModuleProfile } from "../../../../social/profile/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";
import type { IProfilePageProps as IWorkspacePageProps } from "../rbac-module-subject-me-social-module-profile-id-chat-id-thread-id-ai-chat";
export interface IProfilePageProps {
  variant?: string;
  state?: IWorkspacePageProps["state"];
  errorMessage?: string;
  onRetry?: () => void;
  profileId: string;
}
export function Component({
  variant = "rbac-module-subject-me-social-module-profile-id-settings-ai-chat",
  state = "ready",
  errorMessage,
  onRetry,
  profileId,
}: IProfilePageProps) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="ai-chat-dashboard"
        page="chat"
        profileSelect={
          state === "ready"
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
          variant="subject-me-social-module-profile-id-settings-ai-chat"
          state={state}
          errorMessage={errorMessage}
          onRetry={onRetry}
          profileId={profileId}
        />
      </HostModuleLayout>
    </div>
  );
}
