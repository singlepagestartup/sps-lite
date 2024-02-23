import { IComponentPropsExtended } from "./interface";
import { Component as OrderProduct } from "@sps/sps-ecommerce-models-order-product-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-ecommerce"
      data-model="order"
      data-variant={props.variant}
      className="border border-gray-500 rounded-md p-4 flex flex-col gap-2"
    >
      {props.data.orderProducts?.map((orderProduct, index) => {
        return (
          <OrderProduct
            key={index}
            variant="default"
            isServer={false}
            data={orderProduct}
          />
        );
      })}
    </div>
  );
}
