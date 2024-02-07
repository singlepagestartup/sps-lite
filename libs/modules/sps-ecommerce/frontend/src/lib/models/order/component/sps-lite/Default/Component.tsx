import { IComponentPropsExtended } from "../../interface";
import { Component as OrderProduct } from "../../../../order-product/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="border border-gray-500 rounded-md p-4 flex flex-col gap-2">
      {props.orderProducts?.map((orderProduct, index) => {
        return (
          <OrderProduct
            key={index}
            variant="default"
            isServer={false}
            {...orderProduct}
          />
        );
      })}
    </div>
  );
}
