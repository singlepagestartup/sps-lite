"use client";
import { Component as SocialModuleProfile } from "../../../../social/profile";
import { Component as SocialModuleChat } from "../../../../social/chat";
import { Component as SocialModuleThread } from "../../../../social/thread";
import { useStudioAccount } from "../../../subject/singlepage/me/account/Account";
import { useThread } from "../../../../social/thread/singlepage/id/ai-chat/Thread";
import { ProjectProvider } from "../../../../social/profile/singlepage/scope/ai-chat/project/Profile";
import { useSource } from "../../../../knowledge/source/singlepage/id/ai-chat/Source";
import { Component as RbacModuleSubject } from "../../../subject";
import type { ReactNode } from "react";
export interface ISubjectThreadWorkspaceProps {
  variant?: string;
  subjectId?: string;
  profileId: string;
  chatId: string;
  threadId?: string;
}
interface IThreadWorkspaceContentProps
  extends Omit<ISubjectThreadWorkspaceProps, "variant"> {
  navigation: ReactNode;
}
function ThreadWorkspaceContent({
  subjectId,
  profileId,
  chatId,
  threadId,
  navigation,
}: IThreadWorkspaceContentProps) {
  const { source } = useSource();
  const { thread } = useThread();
  const selected = threadId ?? thread.id;
  if (thread.id !== selected)
    return <p role="status">Thread unavailable in this project preview.</p>;
  return (
    <SocialModuleChat
      variant="id-ai-chat"
      chatId={chatId}
      thread={
        <SocialModuleThread
          variant="id-ai-chat"
          navigation={navigation}
          messageCreate={
            <RbacModuleSubject
              variant="me-social-module-profile-id-chat-id-thread-id-message-create-ai-chat"
              subjectId={subjectId}
              profileId={profileId}
              chatId={chatId}
              threadId={selected}
            />
          }
          knowledgeSourceIds={[source.id]}
          documentDownload={
            <SocialModuleThread
              variant="download-ai-chat"
              threadId={selected}
              fileName={thread.title}
              sources={[source]}
            />
          }
          knowledgeUpdate={
            <RbacModuleSubject
              variant="me-social-module-profile-id-chat-id-thread-id-knowledge-module-source-update-ai-chat"
              subjectId={subjectId}
              profileId={profileId}
              chatId={chatId}
              threadId={selected}
            />
          }
          knowledge={
            <>
              <RbacModuleSubject
                variant="me-social-module-profile-id-chat-id-thread-id-knowledge-module-source-list-document-ai-chat"
                subjectId={subjectId}
                profileId={profileId}
                chatId={chatId}
                threadId={selected}
              />
              <RbacModuleSubject
                variant="me-social-module-profile-id-chat-id-thread-id-knowledge-module-source-list-document-ai-chat"
                subjectId={subjectId}
                profileId={profileId}
                chatId={chatId}
                threadId={selected}
              />
            </>
          }
        />
      }
    />
  );
}
function SubjectThreadWorkspace({
  variant = "subject-me-social-module-profile-id-chat-id-thread-id-ai-chat",
  subjectId,
  profileId,
  chatId,
  threadId,
}: ISubjectThreadWorkspaceProps) {
  const { account } = useStudioAccount();
  const actor = subjectId ?? account.subject?.id;
  const { thread } = useThread();
  const selected = threadId ?? thread.id;
  return (
    <div
      data-ds-block={`rbac.widget.${variant}`}
      data-module="rbac"
      data-model="widget"
      data-variant={variant}
      data-subject-id={actor}
      data-profile-id={profileId}
      data-chat-id={chatId}
      data-thread-id={selected}
    >
      <SocialModuleProfile
        variant="id-ai-chat-project"
        profileId={profileId}
        chatId={chatId}
        selected="products"
      >
        {(navigation) => (
          <ThreadWorkspaceContent
            subjectId={actor}
            profileId={profileId}
            chatId={chatId}
            threadId={selected}
            navigation={navigation}
          />
        )}
      </SocialModuleProfile>
    </div>
  );
}

export function Component(props: ISubjectThreadWorkspaceProps) {
  return (
    <ProjectProvider profileId={props.profileId}>
      <SubjectThreadWorkspace {...props} />
    </ProjectProvider>
  );
}
