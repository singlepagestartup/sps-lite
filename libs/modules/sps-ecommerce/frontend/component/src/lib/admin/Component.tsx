import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-panel/Component";
import { Component as Widget } from "./widget/Component";
import { Component as Product } from "./product/Component";
import { Component as Attribute } from "./attribute/Component";
import { Component as AttributeKey } from "./attribute-key/Component";
import { Component as Order } from "./order/Component";
import { Component as ProductsListBlock } from "./products-list-block/Component";
import { Component as ProductOverviewBlock } from "./product-overview-block/Component";
import { Component as OrdersListBlock } from "./orders-list-block/Component";

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
    {
      name: "attribute",
      Comp: Attribute,
    },
    {
      name: "attribute-key",
      Comp: AttributeKey,
    },
    {
      name: "order",
      Comp: Order,
    },
    {
      name: "products-list-block",
      Comp: ProductsListBlock,
    },
    {
      name: "product-overview-block",
      Comp: ProductOverviewBlock,
    },
    {
      name: "orders-list-block",
      Comp: OrdersListBlock,
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
