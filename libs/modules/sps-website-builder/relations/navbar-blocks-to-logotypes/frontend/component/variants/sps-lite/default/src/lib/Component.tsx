import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Logotype } from "@sps/sps-website-builder-models-logotype-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="navbar-blocks-to-logotypes"
      data-variant={props.variant}
      className="w-full"
    >
      <Logotype
        isServer={props.isServer}
        variant={props.data.logotype.variant}
        data={props.data.logotype}
      />
    </div>
  );
}
