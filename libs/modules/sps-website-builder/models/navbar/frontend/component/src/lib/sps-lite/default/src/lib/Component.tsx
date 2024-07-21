import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="navbar"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-screen z-30 fixed", props.data.className)}
    >
      <div className="w-full mx-auto max-w-7xl">{props.children}</div>
    </div>
  );
}
