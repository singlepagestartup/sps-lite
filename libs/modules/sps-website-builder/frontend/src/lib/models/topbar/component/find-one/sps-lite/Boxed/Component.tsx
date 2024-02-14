"use client";

// import { PageBlocks } from "../../../../page-blocks";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className={props.className || ""}>
      <div className="bg-white w-screen fixed z-40">
        <div className="mx-auto max-w-7xl">
          {/* <PageBlocks isServer={props.isServer} pageBlocks={props.pageBlocks} /> */}
        </div>
      </div>
    </div>
  );
}
