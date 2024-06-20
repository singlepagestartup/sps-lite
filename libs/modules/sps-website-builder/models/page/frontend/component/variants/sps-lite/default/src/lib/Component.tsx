import { IComponentPropsExtended } from "./interface";
import { Component as PagesToLayouts } from "@sps/sps-website-builder/relations/pages-to-layouts/frontend/component/root";
import { Component as PagesToWidgets } from "@sps/sps-website-builder/relations/pages-to-widgets/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <section
      data-module="sps-website-builder"
      data-model="page"
      data-variant="default"
      className="flex flex-col w-full"
    >
      {props.data.pagesToLayouts?.length ? (
        <PagesToLayouts
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="get-layout"
          data={props.data.pagesToLayouts[0]}
        >
          {props.data.pagesToWidgets?.map((widget, index) => {
            return (
              <PagesToWidgets
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="default"
                data={widget}
                hostChildren={props.hostChildren}
              />
            );
          })}
        </PagesToLayouts>
      ) : null}
    </section>
  );
}
