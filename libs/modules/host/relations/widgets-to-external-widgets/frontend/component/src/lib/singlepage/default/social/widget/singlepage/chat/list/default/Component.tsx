import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  return (
    <RbacSubject
      isServer={props.isServer}
      language={props.language}
      variant="me-social-module-profile-chat-list-default"
    />
  );
}
