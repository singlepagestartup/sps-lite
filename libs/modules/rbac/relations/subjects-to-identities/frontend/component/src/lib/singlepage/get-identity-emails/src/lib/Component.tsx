import { cn } from "@sps/shared-frontend-client-utils";
import { IComponentPropsExtended } from "./interface";
import { Component as Identity } from "@sps/rbac/models/identity/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-relation="subjects-to-identities"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.className)}
    >
      <Identity
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find-by-id"
        id={props.data.identityId}
      >
        {({ data }) => {
          if (!data) {
            return null;
          }

          if (!props.children) {
            return;
          }

          return props.children({ data: data.email });
        }}
      </Identity>
    </div>
  );
}
