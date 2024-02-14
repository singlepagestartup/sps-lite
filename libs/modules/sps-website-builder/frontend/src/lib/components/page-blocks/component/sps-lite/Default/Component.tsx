import { IComponentProps } from "../../../interface";
import { Component as PageBlock } from "../../../../page-block/component";

export function Component(props: IComponentProps) {
  return (
    <div className="page-blocks">
      {props.data.pageBlocks?.length
        ? props.data.pageBlocks.map((pageBlock, index) => {
            return (
              <PageBlock
                key={index}
                isServer={props.isServer}
                data={pageBlock}
              />
            );
          })
        : null}
    </div>
  );
}
