"use client";
import { Component as SocialModuleProfile } from "../../../../social/profile";
import { Component as SocialModuleChat } from "../../../../social/chat";
import { Component as SocialModuleThread } from "../../../../social/thread";
import { useStudioAccount } from "../../../subject/singlepage/me/account/Account";
import { Component as RbacModuleSubject } from "../../../subject";
import { Component as WorkspaceSkeleton } from "../subject-me-social-module-profile-id-chat-id-thread-id-ai-chat/Skeleton";
import { Component as WorkspaceNotice } from "../subject-me-social-module-profile-id-chat-id-thread-id-ai-chat/Error";
import type { ISubjectThreadWorkspaceProps } from "../subject-me-social-module-profile-id-chat-id-thread-id-ai-chat/Component";
export interface ISubjectThreadCreateProps {
  variant?: string;
  state?: ISubjectThreadWorkspaceProps["state"];
  errorMessage?: string;
  onRetry?: () => void;
  subjectId?: string;
  profileId: string;
  chatId: string;
  cancelHref: string;
}
export function Component({
  variant = "subject-me-social-module-profile-id-chat-id-thread-create-ai-chat",
  state = "ready",
  errorMessage,
  onRetry,
  subjectId,
  profileId,
  chatId,
  cancelHref,
}: ISubjectThreadCreateProps) {
  const { account } = useStudioAccount();
  const actor = subjectId ?? account.subject?.id;
  if (
    state === "checking-session" ||
    state === "loading-projects" ||
    state === "loading-chat"
  )
    return <WorkspaceSkeleton variant={variant} stage={state} />;
  if (
    state === "sign-in-required" ||
    state === "access-denied" ||
    state === "error"
  )
    return (
      <WorkspaceNotice
        variant={variant}
        state={state}
        message={errorMessage}
        onRetry={onRetry}
      />
    );

  return (
    <div
      data-ds-block={`rbac.widget.${variant}`}
      data-module="rbac"
      data-model="widget"
      data-variant={variant}
      data-subject-id={actor}
      data-profile-id={profileId}
      data-chat-id={chatId}
    >
      <SocialModuleProfile
        variant="id-ai-chat-project"
        profileId={profileId}
        chatId={chatId}
        selected="thread-create"
      >
        {(navigation) => (
          <SocialModuleChat
            variant="id-ai-chat"
            chatId={chatId}
            thread={
              <SocialModuleThread
                variant="create-ai-chat"
                navigation={navigation}
                chatId={chatId}
              >
                <RbacModuleSubject
                  variant="me-social-module-profile-id-chat-id-thread-create-form-ai-chat"
                  subjectId={actor}
                  profileId={profileId}
                  chatId={chatId}
                  cancelHref={cancelHref}
                />
              </SocialModuleThread>
            }
          />
        )}
      </SocialModuleProfile>
    </div>
  );
}
