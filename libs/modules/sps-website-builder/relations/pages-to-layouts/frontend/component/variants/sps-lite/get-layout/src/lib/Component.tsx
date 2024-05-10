import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Layout } from "@sps/sps-website-builder-models-layout-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="pages-to-layouts"
      data-variant={props.variant}
      className=""
    >
      <Layout
        isServer={props.isServer}
        variant={props.data.layout.variant}
        data={props.data.layout}
      >
        {props.children}
      </Layout>
    </div>
  );
}
