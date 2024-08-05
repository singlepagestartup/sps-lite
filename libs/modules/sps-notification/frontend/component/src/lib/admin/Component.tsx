import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-panel/Component";
import { Component as Widget } from "./widget/Component";
import { Component as Notification } from "./notification/Component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: Widget,
    },
    {
      name: "notification",
      Comp: Notification,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="sps-notification"
    />
  );
}
