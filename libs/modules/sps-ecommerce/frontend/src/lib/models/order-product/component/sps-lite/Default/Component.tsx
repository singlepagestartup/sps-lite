import { IComponentPropsExtended } from "../../interface";
import { Component as Attribute } from "../../../../attribute/component";
import { Component as Product } from "../../../../product/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="w-full border flex items-center gap-3 border-gray-500 p-4 rounded-md">
      <div className="w-2/3">
        {props.product ? (
          <Product isServer={false} variant="in-cart" {...props.product} />
        ) : null}
      </div>
      {props.attributes?.map((attribute, index) => {
        return (
          <Attribute
            key={index}
            isServer={false}
            variant="default"
            {...attribute}
          />
        );
      })}
    </div>
  );
}
