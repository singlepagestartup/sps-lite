import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-panel/Component";
import { Component as Widget } from "./widget/Component";
import { Component as Customer } from "./customer/Component";
import { Component as RequestBlock } from "./request-block/Component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: Widget,
    },
    {
      name: "customer",
      Comp: Customer,
    },
    {
      name: "request-block",
      Comp: RequestBlock,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="crm"
    />
  );
}
