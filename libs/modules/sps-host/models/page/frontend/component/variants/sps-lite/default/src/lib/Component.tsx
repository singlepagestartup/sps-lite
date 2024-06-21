import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as PagesToLayouts } from "@sps/sps-host/relations/pages-to-layouts/frontend/component/root";
import { Component as PagesToWidgets } from "@sps/sps-host/relations/pages-to-widgets/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-model="page"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      {props.data.pagesToLayouts?.map((entity, index) => {
        return (
          <PagesToLayouts
            key={index}
            isServer={props.isServer}
            variant="default"
            hostUrl={props.hostUrl}
            data={entity}
          >
            {props.data.pagesToWidgets?.map((entity, index) => {
              return (
                <PagesToWidgets
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="default"
                  data={entity}
                />
              );
            })}
          </PagesToLayouts>
        );
      })}
    </div>
  );
}
