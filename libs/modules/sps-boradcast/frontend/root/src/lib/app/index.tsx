import { IComponentProps } from "./interface";
import { Component as Channel } from "@sps/sps-boradcast/models/channel/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  return (
    <div data-module="startup" className={cn("w-full flex", props.className)}>
      <Channel
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
