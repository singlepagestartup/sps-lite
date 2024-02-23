"use client";

import { IComponentPropsExtended } from "./interface";
// import { Component as Order } from "@sps/sps-ecommerce-order-component-variants-sps-lite-default";
// import { Component as Order } from "@sps/sps-ecommerce-order-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-billing"
      data-model="invoice"
      data-variant={props.variant}
      className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <p>Invoice</p>
      </div>
    </div>
  );
}
