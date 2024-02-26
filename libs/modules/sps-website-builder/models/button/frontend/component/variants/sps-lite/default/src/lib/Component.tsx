"use client";

import { Button } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
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
