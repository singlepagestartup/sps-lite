import { Component as PageBlocks } from "../../../../../components/page-blocks/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <footer
      data-collection-type="footer"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="footer-container">
        <PageBlocks
          variant="default"
          isServer={props.isServer}
          pageBlocks={props.pageBlocks}
        />
      </div>
    </footer>
  );
}
