import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";
import { Component as Widget } from "@sps/startup/models/widget/frontend/component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: Widget,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="startup"
    />
  );
}
