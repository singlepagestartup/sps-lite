import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  const socialModuleChatId = props.routeParams?.["social.chats.id"];
  const socialModuleThreadId = props.routeParams?.["social.threads.id"];
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
}
