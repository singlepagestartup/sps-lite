"use client";

import { Button } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import Link from "next/link";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <Button
      ui="shadcn"
      data-module="website-builder"
      data-model="elements.button"
      data-id={props.data?.id || ""}
      data-variant={props.data.variant}
      className={cn("w-full", props.data.className)}
      variant="default"
      asChild={true}
    >
      <Link href={props.data.url || "/"}>{props.data.title}</Link>
    </Button>
  );
}
