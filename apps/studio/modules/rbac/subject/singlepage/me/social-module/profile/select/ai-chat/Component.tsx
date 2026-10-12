"use client";
import { Component as SocialModuleProfile } from "../../../../../../../../social/profile";
import { useStudioAccount } from "../../../../account/Account";

export interface ISubjectProfileSelectProps {
  variant?: string;
  subjectId?: string;
  profileId?: string;
  pending?: boolean;
  onNavigate?: () => void;
  onCloseAutoFocus?: (event: Event) => void;
}

export function Component({
  variant = "me-social-module-profile-select-ai-chat",
  subjectId,
  profileId,
  pending,
  onNavigate,
  onCloseAutoFocus,
}: ISubjectProfileSelectProps = {}) {
  const { account } = useStudioAccount();
  return (
    <div
      data-module="rbac"
      data-model="subject"
      data-variant={variant}
      data-subject-id={subjectId ?? account.subject?.id}
    >
      <SocialModuleProfile
        variant="select-ai-chat-project"
        profileId={profileId}
        pending={pending}
        onNavigate={onNavigate}
        onCloseAutoFocus={onCloseAutoFocus}
      />
    </div>
  );
}
