import { Component as RbacModuleSubject } from "@sps/rbac/models/subject/frontend/component";
import type { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <RbacModuleSubject
      isServer={props.isServer}
      variant="me-navigation-controls-ai-chat"
      language={props.language}
      socialModuleProfileId={props.routeParams?.["social.profiles.id"]}
      socialModuleChatId={props.routeParams?.["social.chats.id"]}
      settingsSelected={props.url === "/ai-chat/settings"}
    />
  );
}
