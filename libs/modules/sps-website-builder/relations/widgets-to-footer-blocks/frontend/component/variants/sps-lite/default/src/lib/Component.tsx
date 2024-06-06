import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as FooterBlock } from "@sps/sps-website-builder-models-footer-block-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-footer-blocks"
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <FooterBlock
        isServer={props.isServer}
        variant={props.data.footerBlock.variant}
        data={props.data.footerBlock}
      />
    </div>
  );
}
