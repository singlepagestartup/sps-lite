import { Button } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";

export function Skeleton(props: IComponentProps) {
  return (
    <Button
      ui="sps"
      data-module="sps-website-builder"
      data-model="elements.button"
      data-variant={props.variant}
      data-ui-variant={props.data.variant}
      className={`${props.data.className || "w-full"}`}
      {...(props.data.url ? { url: props.data.url } : {})}
      {...(props.onClick ? { onClick: props.onClick } : {})}
    >
      <div className="button-container">{props.data.title}</div>
    </Button>
  );
}
