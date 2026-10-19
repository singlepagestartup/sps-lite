import { Component as Page } from "@sps/host/models/page/frontend/component";
import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <Page
      isServer={props.isServer}
      variant="url-segment-values"
      url={props.url}
    >
      {({ data: segments }) => {
        const socialModuleChatId = segments?.["social.chats.id"];
        const socialModuleThreadId = segments?.["social.threads.id"];
        if (!socialModuleChatId) {
          return;
        }
        return (
          <RbacSubject
            isServer={props.isServer}
            language={props.language}
            variant="me-social-module-profile-chat-overview-default"
            socialModuleChatId={socialModuleChatId}
            socialModuleThreadId={socialModuleThreadId}
          />
        );
      }}
    </Page>
  );
}
