import { cn } from "@sps/shared-frontend-client-utils";
import { IComponentPropsExtended } from "./interface";
import { Component as Message } from "@sps/sps-broadcast/models/message/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-broadcast"
      data-relation="channels-to-messages"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className || props.className)}
    >
      <Message
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        data={props.data.message}
        variant="default"
      />
    </div>
  );
}
