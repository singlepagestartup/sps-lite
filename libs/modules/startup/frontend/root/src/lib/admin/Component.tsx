import dynamic from "next/dynamic";
import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";
const WidgetSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: WidgetSpsLiteAdminTable,
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
