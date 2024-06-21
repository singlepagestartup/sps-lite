import { IComponentPropsExtended } from "./interface";
import { App as SpsWebsiteBuilder } from "@sps/sps-website-builder/frontend/root";
import { App as Startup } from "@sps/startup/frontend/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-relation="widgets-to-external-modules"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className || "")}
    >
      {props.data.externalModule === "sps-website-builder" ? (
        <SpsWebsiteBuilder
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant={props.data.variant}
          props={props.data.externalModuleProps}
        />
      ) : null}
      {props.data.externalModule === "startup" ? (
        <Startup
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant={props.data.variant}
          props={props.data.externalModuleProps}
        />
      ) : null}
    </div>
  );
}
