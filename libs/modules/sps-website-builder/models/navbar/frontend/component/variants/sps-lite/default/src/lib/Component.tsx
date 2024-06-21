import { IComponentPropsExtended } from "./interface";
import { Component as NavbarsToWidgets } from "@sps/sps-website-builder/relations/navbars-to-widgets/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="navbar"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn(
        "bg-white border-b border-input w-screen z-30 fixed",
        props.data.className,
      )}
    >
      <div className="w-full mx-auto max-w-7xl">
        {props.data.navbarsToWidgets.map((entity, index) => {
          return (
            <NavbarsToWidgets
              key={index}
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="default"
              data={entity}
            />
          );
        })}
      </div>
    </div>
  );
}
