"use client";

import { IComponentProps } from "./interface";
import { Component as WidgetSpsLiteAdminTable } from "@sps/sps-billing/models/widget/frontend/component/root/src/lib/sps-lite/admin-table";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";

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
      module="sps-billing"
    />
  );
}
