import { cn } from "@sps/shared-frontend-client-utils";
import { IComponentPropsExtended } from "./interface";
import { Component as Authentication } from "@sps/sps-rbac/models/authentication/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="authentication-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className || "")}
    >
      <Authentication
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="logout-action"
      />
    </div>
  );
}
