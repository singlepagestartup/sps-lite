import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-panel/Component";
import { Component as Widget } from "./widget/Component";
import { Component as Product } from "./product/Component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: Widget,
    },
    {
      name: "product",
      Comp: Product,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="sps-ecommerce"
    />
  );
}
