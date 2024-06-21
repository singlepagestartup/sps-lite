import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as Layout } from "@sps/sps-host/models/layout/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-relation="pages-to-layouts"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
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
