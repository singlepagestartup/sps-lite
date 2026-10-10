"use client";
import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as SocialModuleProfile } from "../../../../social/profile/index";
import { Component as SocialModuleThread } from "../../../../social/thread/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

import { PanelHeader } from "../../../../../workspace/design/singlepage/interface-kit/ai-chat/ServiceDocument";
import { aiChatProfileHref } from "../../../../../workspace/utils/products/ai-chat-routes";

export interface IThreadCreatePageProps {
  profileId: string;
  chatId: string;
}
export function Component({ profileId, chatId }: IThreadCreatePageProps) {
  return (
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
          variant="account"
          showTokens
          page="chat"
          onNavigate={onNavigate}
        />
      )}
    >
      <SocialModuleProfile
        variant="overview-ai-chat-project"
        profileId={profileId}
        chatId={chatId}
        selected="thread-create"
      >
        {(navigation) => (
          <section
            aria-label="New thread"
            className="flex min-h-0 flex-1 flex-col"
          >
            <PanelHeader
              title="New thread"
              label="Thread"
              navigation={navigation}
            />
            <SocialModuleThread
              variant="create-ai-chat"
              chatId={chatId}
              cancelHref={aiChatProfileHref(profileId)}
            />
          </section>
        )}
      </SocialModuleProfile>
    </HostModuleLayout>
  );
}
