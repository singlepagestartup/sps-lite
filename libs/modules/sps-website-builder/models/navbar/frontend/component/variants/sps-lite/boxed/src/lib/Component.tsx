import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <nav
      data-module="sps-website-builder"
      data-model="navbar"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      <div className="navbar-container">
        <PageBlocks
          variant="default"
          isServer={props.isServer}
          data={props.data}
        />
      </div>
    </nav>
  );
}
