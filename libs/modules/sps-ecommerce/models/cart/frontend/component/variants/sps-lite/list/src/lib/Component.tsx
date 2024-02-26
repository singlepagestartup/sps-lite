import { IComponentPropsExtended } from "./interface";
import { Component as Cart } from "@sps/sps-ecommerce-models-cart-frontend-component-variants-sps-lite-default";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-ecommerce"
      data-model="cart"
      data-variant={props.variant}
      className="w-full"
    >
      {props.data.map((cart, index) => {
        return (
          <Cart key={index} isServer={false} variant="default" data={cart} />
        );
      })}
    </div>
  );
}
