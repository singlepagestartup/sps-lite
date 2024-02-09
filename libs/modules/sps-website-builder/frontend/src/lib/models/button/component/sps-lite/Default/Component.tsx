"use client";

import { Button } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "../../interface";
import { Component as Flyout } from "../../../../flyout/component";

export function Component(props: IComponentPropsExtended) {
  if (props.flyout) {
    return (
      <Flyout isServer={false} {...props.flyout}>
        <Button
          ui="sps"
          data-component="elements.button"
          data-ui-variant={props.variant ?? "default"}
        >
          {props.title}
        </Button>
      </Flyout>
    );
  }

  return (
    <Button
      ui="sps"
      data-component="elements.button"
      data-ui-variant={props.variant}
      {...(props.url ? { url: props.url } : {})}
    >
      {props.title}
    </Button>
  );
}
