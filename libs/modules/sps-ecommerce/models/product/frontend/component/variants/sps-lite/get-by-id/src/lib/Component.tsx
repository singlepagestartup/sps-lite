import React from "react";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-ecommerce"
      data-model="product"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <p className="font-bold">Generated variant</p>
      <p className="font-bold text-4xl">Model: product</p>
      <p className="font-bold text-4xl">Variant: get-by-id</p>
    </div>
  );
}
