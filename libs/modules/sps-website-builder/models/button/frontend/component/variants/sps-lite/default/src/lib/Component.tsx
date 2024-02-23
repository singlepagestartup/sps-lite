"use client";

import { Button } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import { Component as Flyout } from "@sps/sps-website-builder-models-flyout-frontend-component";

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
          data-module="sps-website-builder"
          data-model="elements.button"
          data-variant={props.data.variant ?? "default"}
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
      data-module="sps-website-builder"
      data-model="elements.button"
      data-variant={props.data.variant}
      data-ui-variant={props.data.variant}
      {...(props.data.url ? { url: props.data.url } : {})}
    >
      {props.data.title}
    </Button>
  );
}
