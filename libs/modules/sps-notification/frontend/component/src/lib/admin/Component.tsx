import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/sps-notification/models/widget/frontend/component";
import { Component as Notification } from "@sps/sps-notification/models/notification/frontend/component";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";

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
