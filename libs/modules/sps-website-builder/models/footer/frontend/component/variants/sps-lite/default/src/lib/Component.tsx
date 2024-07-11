import { IComponentPropsExtended } from "./interface";
import { Component as FootersToWidgets } from "@sps/sps-website-builder/relations/footers-to-widgets/frontend/component/root";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="footer"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      <div className="footer-container">
        {props.data.footersToWidgets.map((entity, index) => {
          return (
            <FootersToWidgets
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
