import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-model="sidebar"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      <PageBlocks
        variant="default"
        isServer={props.isServer}
        data={props.data}
      />
    </div>
  );
}
