import { IComponentProps } from "../../../interface";
import { Component as PageBlock } from "../../../../page-block/component";

export function Component(props: IComponentProps) {
  return (
    <div className="page-blocks">
      {props.pageBlocks?.length
        ? props.pageBlocks.map((pageBlock, index) => {
            return (
              <PageBlock key={index} isServer={props.isServer} {...pageBlock} />
            );
          })
        : null}
    </div>
  );
}
