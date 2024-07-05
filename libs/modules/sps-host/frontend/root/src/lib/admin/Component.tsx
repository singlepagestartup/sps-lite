import dynamic from "next/dynamic";
import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";
const Widget = dynamic(() =>
  import("@sps/sps-host/models/widget/frontend/component/root").then(
    (mod) => mod.Component,
  ),
);
const Page = dynamic(() =>
  import("@sps/sps-host/models/page/frontend/component/root").then(
    (mod) => mod.Component,
  ),
);
const Layout = dynamic(() =>
  import("@sps/sps-host/models/layout/frontend/component/root").then(
    (mod) => mod.Component,
  ),
);

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
