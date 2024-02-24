"use client";

import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";
import { IComponentPropsExtended } from "./interface";
import { Popover, PopoverContent, PopoverTrigger } from "@sps/shadcn";

export function Component(props: IComponentPropsExtended) {
  return (
    <Popover
      data-module="sps-website-builder"
      data-model="flyout"
      data-variant={props.variant}
    >
      <PopoverTrigger>Flyout</PopoverTrigger>
      <PopoverContent>
        <div className="flyout-container">
          <PageBlocks variant="default" isServer={false} data={props.data} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
