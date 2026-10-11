"use client";
import { Component as SocialModuleProfile } from "../../../../social/profile";
import { useStudioAccount } from "../../../subject/singlepage/me/account/Account";
import { Component as RbacModuleSubject } from "../../../subject";
export interface ISubjectProfileSettingsProps {
  variant?: string;
  subjectId?: string;
  profileId: string;
}
export function Component({
  variant = "subject-me-social-module-profile-id-settings-ai-chat",
  subjectId,
  profileId,
}: ISubjectProfileSettingsProps) {
  const { account } = useStudioAccount();
  const actor = subjectId ?? account.subject?.id;
  return (
    <div
      data-ds-block={`rbac.widget.${variant}`}
      data-module="rbac"
      data-model="widget"
      data-variant={variant}
      data-subject-id={actor}
      data-profile-id={profileId}
    >
      <SocialModuleProfile
        variant="id-ai-chat-project"
        profileId={profileId}
        selected="settings"
      >
        {(navigation) => (
          <SocialModuleProfile
            variant="settings-ai-chat-project"
            profileId={profileId}
            navigation={navigation}
          >
            <RbacModuleSubject
              variant="me-social-module-profile-id-update-name-ai-chat"
              profileId={profileId}
              subjectId={actor}
            />
          </SocialModuleProfile>
        )}
      </SocialModuleProfile>
    </div>
  );
}
