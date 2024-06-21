import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/startup/models/widget/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  return (
    <div data-module="startup" className={cn("w-full flex", props.className)}>
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
