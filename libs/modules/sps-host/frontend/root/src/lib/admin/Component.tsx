import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";
import { Component as Widget } from "@sps/sps-host/models/widget/frontend/component";
import { Component as Page } from "@sps/sps-host/models/page/frontend/component";
import { Component as Layout } from "@sps/sps-host/models/layout/frontend/component";
import { Component as Metadata } from "@sps/sps-host/models/metadata/frontend/component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: Widget,
    },
    {
      name: "page",
      Comp: Page,
    },
    {
      name: "layout",
      Comp: Layout,
    },
    {
      name: "metadata",
      Comp: Metadata,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="sps-host"
    />
  );
}
