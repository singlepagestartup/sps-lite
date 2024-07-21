"use client";

import { Button } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <Button
      ui="shadcn"
      data-module="sps-website-builder"
      data-model="elements.button"
      data-id={props.data?.id || ""}
      data-variant={props.data.variant}
      variant="default"
      {...(props.data.url ? { url: props.data.url } : {})}
    >
      {props.data.title}
    </Button>
  );
}
