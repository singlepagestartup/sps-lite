import { Component as RbacModuleSubject } from "@sps/rbac/models/subject/frontend/component";
import type { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <RbacModuleSubject
      isServer={props.isServer}
      variant="me-navigation-controls-ai-chat"
      language={props.language}
      routeParams={props.routeParams}
      settingsSelected={props.url === "/ai-chat/settings"}
    />
  );
}
