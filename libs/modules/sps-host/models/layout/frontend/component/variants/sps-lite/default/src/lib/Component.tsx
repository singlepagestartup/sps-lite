import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as LayoutsToWidgets } from "@sps/sps-host/relations/layouts-to-widgets/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-model="layout"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      {props.data.layoutsToWidgets.length
        ? props.data.layoutsToWidgets
            ?.filter((entity) => entity.variant === "default")
            .map((entity, index) => {
              return (
                <LayoutsToWidgets
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="default"
                  data={entity}
                />
              );
            })
        : null}
      {props.children}
      {props.data.layoutsToWidgets.length
        ? props.data.layoutsToWidgets
            ?.filter((entity) => entity.variant === "primary")
            .map((entity, index) => {
              return (
                <LayoutsToWidgets
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="default"
                  data={entity}
                />
              );
            })
        : null}
    </div>
  );
}
