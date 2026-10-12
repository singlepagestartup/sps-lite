import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-model="widget"
      data-variant={props.variant}
      data-id={props.data.id}
      className="w-full min-w-0"
    >
      <Subject
        isServer={props.isServer}
        variant="me-authentication-email-and-password-authentication-form-ai-chat"
      />
    </div>
  );
}
