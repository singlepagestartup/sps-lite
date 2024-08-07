import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/sps-rbac/models/widget/frontend/component/root";
import { cn } from "@sps/shared-frontend-client-utils";

export function App(props: IComponentProps) {
  return (
    <div
      data-module="sps-rbac"
      className={cn("flex w-full", props.className || "")}
    >
      <Widget
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="default"
        data={{
          id: props.widgetId,
        }}
      />
    </div>
  );
}
