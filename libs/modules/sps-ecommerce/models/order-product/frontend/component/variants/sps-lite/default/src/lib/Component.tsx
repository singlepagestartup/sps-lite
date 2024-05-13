import { IComponentPropsExtended } from "./interface";
import { Component as Attribute } from "@sps/sps-ecommerce-models-attribute-frontend-component";
import { Component as Product } from "@sps/sps-ecommerce-models-product-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-ecommerce"
      data-model="order-product"
      data-variant={props.variant}
      className="w-full border gap-3 border-gray-500 p-4 rounded-md grid grid-cols-8"
    >
      <div className="col-span-6">
        {props.data.product ? (
          <Product
            isServer={false}
            variant="in-cart"
            data={props.data.product}
          />
        ) : null}
      </div>
      <div className="col-span-2 flex items-center justify-center">
        {props.data.attributes?.map((attribute, index) => {
          return (
            <Attribute
              key={index}
              isServer={false}
              variant="default"
              data={attribute}
            />
          );
        })}
      </div>
    </div>
  );
}
