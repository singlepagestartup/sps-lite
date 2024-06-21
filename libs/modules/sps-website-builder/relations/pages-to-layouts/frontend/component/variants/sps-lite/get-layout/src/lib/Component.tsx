import { IComponentPropsExtended } from "./interface";
import { Component as Layout } from "@sps/sps-website-builder/models/layout/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="pages-to-layouts"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Layout
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.layout.variant}
        data={props.data.layout}
      >
        {props.children}
      </Layout>
    </div>
  );
}
