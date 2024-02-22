import { IComponentPropsExtended } from "./interface";
import { Component as Attribute } from "@sps/sps-ecommerce-models-attribute-frontend-component";
import { Component as Product } from "@sps/sps-ecommerce-models-product-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="w-full border flex items-center gap-3 border-gray-500 p-4 rounded-md">
      <div className="w-2/3">
        {props.data.product ? (
          <Product
            isServer={false}
            variant="in-cart"
            data={props.data.product}
          />
        ) : null}
      </div>
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
  );
}
