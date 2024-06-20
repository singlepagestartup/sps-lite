import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as WidgetsToExternalModules } from "@sps/sps-host/relations/widgets-to-external-modules/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className || "")}
    >
      {props.data.widgetsToExternalModules.map((entity, index) => {
        return (
          <WidgetsToExternalModules
            key={index}
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant={entity.variant}
            data={entity}
            hostChildren={props.hostChildren}
          />
        );
      })}
    </div>
  );
}
