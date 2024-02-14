"use client";

import { Component as PageBlock } from "../../../../../../components/page-block/component";
import { IComponentPropsExtended } from "../../interface";
import { Popover, PopoverContent, PopoverTrigger } from "@sps/shadcn";

export function Component(props: IComponentPropsExtended) {
  return (
    <Popover data-collection-type="flyout">
      <PopoverTrigger asChild={true}>{props.children}</PopoverTrigger>
      <PopoverContent>
        <div className="flyout-container">
          {props.data.pageBlocks?.length
            ? props.data.pageBlocks.map((pageBlock, index) => {
                return (
                  <PageBlock key={index} isServer={false} {...pageBlock} />
                );
              })
            : null}
        </div>
      </PopoverContent>
    </Popover>
  );
}
