import { IComponentPropsExtended } from "./interface";
import { Component as LayoutsToNavbars } from "@sps/sps-website-builder-relations-layouts-to-navbars-frontend-component";
import { Component as LayoutsToFooters } from "@sps/sps-website-builder-relations-layouts-to-footers-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      {props.data.SPSWBLayoutsToNavbars.map((layoutsToNavbars, index) => {
        return (
          <LayoutsToNavbars
            isServer={props.isServer}
            key={index}
            variant="default"
            data={layoutsToNavbars}
          />
        );
      })}
      <div className="w-full mx-auto">{props.children}</div>
      {props.data.SPSWBLayoutsToFooters.map((layoutsToFooters, index) => {
        return (
          <LayoutsToFooters
            key={index}
            isServer={props.isServer}
            variant="default"
            data={layoutsToFooters}
          />
        );
      })}
    </div>
  );
}
