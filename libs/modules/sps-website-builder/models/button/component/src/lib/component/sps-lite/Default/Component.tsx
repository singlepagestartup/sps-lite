"use client";

import { Button } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import { Component as Flyout } from "@sps/sps-website-builder-flyout-component";

export function Component(props: IComponentPropsExtended) {
  if (props.data.flyout) {
    return (
      <Flyout
        isServer={false}
        variant={props.data.flyout.variant}
        data={props.data.flyout}
      >
        <Button
          ui="sps"
          data-component="elements.button"
          data-ui-variant={props.data.variant ?? "default"}
        >
          {props.data.title}
        </Button>
      </Flyout>
    );
  }

  return (
    <Button
      ui="sps"
      data-component="elements.button"
      data-ui-variant={props.data.variant}
      {...(props.data.url ? { url: props.data.url } : {})}
    >
      {props.data.title}
    </Button>
  );
}
