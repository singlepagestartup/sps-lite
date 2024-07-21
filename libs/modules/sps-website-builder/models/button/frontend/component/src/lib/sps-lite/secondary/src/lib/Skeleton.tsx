import { Button } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";

export function Skeleton(props: IComponentProps) {
  return (
    <Button
      ui="shadcn"
      data-module="sps-website-builder"
      data-model="elements.button"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      variant="secondary"
      className={`${props.data.className || "w-full"}`}
      {...(props.data.url ? { url: props.data.url } : {})}
      {...(props.onClick ? { onClick: props.onClick } : {})}
    >
      <div className="button-container">{props.data.title}</div>
    </Button>
  );
}
