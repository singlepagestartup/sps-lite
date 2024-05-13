"use client";

import { Component as Cart } from "@sps/sps-ecommerce-models-cart-frontend-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.checkout-form-block"
      data-variant={props.variant}
      className="mx-auto max-w-7xl py-16 px-2 lg:px-0"
    >
      <p className="text-4xl font-bold pt-10 pb-2">Checkout Form Block</p>
      <p className="text-2xl pb-10">SingleStepWithCart</p>
      <div className="py-4">
        <Cart variant="checkout" isServer={false} />
      </div>
    </div>
  );
}
