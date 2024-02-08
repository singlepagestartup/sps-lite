import { Component as PageBlocks } from "../../../../../components/page-blocks/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <nav
      data-collection-type="navbar"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="navbar-container">
        <PageBlocks
          variant="default"
          isServer={props.isServer}
          pageBlocks={props.pageBlocks}
        />
      </div>
    </nav>
  );
}
