"use client";

import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-ecommerce"
      data-model="attribute-key"
      data-variant={props.variant}
      className="flex items-center"
    >
      <p className="text-md font-bold capitalize">{props.data.title}</p>
    </div>
  );
}
