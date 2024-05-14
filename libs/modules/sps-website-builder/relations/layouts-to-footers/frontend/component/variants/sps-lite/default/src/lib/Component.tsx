import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Footer } from "@sps/sps-website-builder-models-footer-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="layouts-to-footers"
      data-variant={props.variant}
      className=""
    >
      <Footer
        isServer={props.isServer}
        data={props.data.footer}
        variant={props.data.footer.variant}
      />
    </div>
  );
}