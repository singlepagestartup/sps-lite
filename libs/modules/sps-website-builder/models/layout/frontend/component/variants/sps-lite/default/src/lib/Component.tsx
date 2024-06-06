import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as LayoutsToNavbars } from "@sps/sps-website-builder-relations-layouts-to-navbars-frontend-component";
import { Component as LayoutsToFooters } from "@sps/sps-website-builder-relations-layouts-to-footers-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      {props.data.layoutsToNavbars.map((layoutsToNavbars, index) => {
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
      {props.data.layoutsToFooters.map((layoutsToFooters, index) => {
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
