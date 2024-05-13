import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as NavbarBlock } from "@sps/sps-website-builder-models-navbar-block-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-navbar-blocks"
      data-variant={props.variant}
      className=""
    >
      <NavbarBlock
        isServer={props.isServer}
        variant={props.data.navbarBlock.variant}
        data={props.data.navbarBlock}
      />
    </div>
  );
}
