"use client";

import { Component as PageBlocks } from "../../../../../../../frontend/src/lib/components/page-blocks/component";
import { IComponentPropsExtended } from "./interface";
import { Popover, PopoverContent, PopoverTrigger } from "@sps/shadcn";

export function Component(props: IComponentPropsExtended) {
  return (
    <Popover data-collection-type="flyout">
      <PopoverTrigger asChild={true}>{props.children}</PopoverTrigger>
      <PopoverContent>
        <div className="flyout-container">
          <PageBlocks variant="default" isServer={false} data={props.data} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
