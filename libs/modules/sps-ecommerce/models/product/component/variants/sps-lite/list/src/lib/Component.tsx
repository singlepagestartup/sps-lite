import { IComponentPropsExtended } from "./interface";
import { Component as Product } from "@sps/sps-ecommerce-product-component-variants-sps-lite-default";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6">
      {props.data.map((product, index) => {
        return (
          <Product
            key={index}
            isServer={props.isServer}
            variant="default"
            data={product}
          />
        );
      })}
    </div>
  );
}
