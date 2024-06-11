import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Footer } from "@sps/sps-website-builder-models-footer-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="layouts-to-footers"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Footer
        isServer={props.isServer}
        data={props.data.footer}
        variant={props.data.footer.variant}
      />
    </div>
  );
}
