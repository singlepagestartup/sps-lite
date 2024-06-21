import { cn } from "@sps/shared-frontend-utils-client";
import { IComponentPropsExtended } from "./interface";
import { Component as PagesToWidgets } from "@sps/sps-website-builder/relations/pages-to-widgets/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <section
      data-module="sps-website-builder"
      data-model="page"
      data-variant="default"
      className={cn("flex flex-col w-full", props.data.className)}
    >
      {props.data.pagesToWidgets?.map((widget, index) => {
        return (
          <PagesToWidgets
            key={index}
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="default"
            data={widget}
          />
        );
      })}
    </section>
  );
}
