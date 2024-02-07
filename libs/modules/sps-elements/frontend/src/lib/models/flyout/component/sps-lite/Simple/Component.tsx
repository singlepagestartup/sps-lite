"use client";

import { Component as PageBlock } from "../../../../../components/page-block/component";
import { IComponentPropsExtended } from "../../interface";
import { Popover, PopoverContent, PopoverTrigger } from "@sps/shadcn";

export function Component(props: IComponentPropsExtended) {
  return (
    <Popover>
      <PopoverTrigger asChild={true}>{props.children}</PopoverTrigger>
      <PopoverContent>
        <div className="flyout-container">
          {props.pageBlocks?.length
            ? props.pageBlocks.map((pageBlock, index) => {
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
