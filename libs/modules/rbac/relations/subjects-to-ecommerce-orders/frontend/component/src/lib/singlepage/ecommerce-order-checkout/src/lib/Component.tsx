import { IComponentPropsExtended } from "./interface";
import { Component as Order } from "@sps/ecommerce/models/order/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-relation="ecommerce-order-checkout"
      data-variant={props.variant}
      className="w-full flex flex-col"
    >
      <Order
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="checkout"
        data={{ id: props.data.ecommerceOrderId }}
      />
    </div>
  );
}
