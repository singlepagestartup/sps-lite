import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="startup"
      data-model="article"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <div className="flex flex-col w-full gap-3">
        <p className="font-bold text-4xl w-full text-center">
          {props.data.title}
        </p>
      </div>
    </div>
  );
}
