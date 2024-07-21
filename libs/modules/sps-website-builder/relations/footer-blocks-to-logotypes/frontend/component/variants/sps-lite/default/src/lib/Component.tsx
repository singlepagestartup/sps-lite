import { IComponentPropsExtended } from "./interface";
import { Component as Logotype } from "@sps/sps-website-builder/models/logotype/frontend/component";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="footer-blocks-to-logotypes"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Logotype
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.logotype.variant as any}
        data={props.data.logotype}
      />
    </div>
  );
}
