import { IComponentPropsExtended } from "./interface";
import { Component as PagesToLayouts } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component";
import { Component as PagesToWidgets } from "@sps/sps-website-builder-relations-pages-to-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <section
      data-module="sps-website-builder"
      data-model="page"
      data-variant="default"
    >
      {props.data.pagesToLayouts?.length ? (
        <PagesToLayouts
          isServer={props.isServer}
          variant="get-layout"
          data={props.data.pagesToLayouts[0]}
        >
          {props.data.pagesToWidgets?.map((widget, index) => {
            return (
              <PagesToWidgets
                key={index}
                isServer={props.isServer}
                variant="default"
                data={widget}
              />
            );
          })}
        </PagesToLayouts>
      ) : null}
    </section>
  );
}
5;
