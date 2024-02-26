"use client";

import { IComponentPropsExtended } from "./interface";
import { Component as AttributeKey } from "@sps/sps-ecommerce-models-attribute-key-frontend-component";
// import { Component as Currency } from "@sps/sps-billing-frontend/lib/models/currency/component";

export function Component(props: IComponentPropsExtended) {
  if (!props.data.attributeKey) {
    return <></>;
  }

  return (
    <div
      data-module="sps-ecommerce"
      data-model="attribute"
      data-variant={props.variant}
      className="py-2 flex items-end gap-2"
    >
      {props.data.attributeKey ? (
        <AttributeKey
          isServer={props.isServer}
          variant="default"
          data={props.data.attributeKey}
        />
      ) : null}
      <div className="flex items-end gap-1">
        <p className="text-md font-bold">
          {props.data[props.data.attributeKey.type]}
        </p>
        {/* {props.data.currency ? (
          <Currency
            isServer={props.isServer}
            variant="default"
            {...props.data.currency}
          />
        ) : null} */}
      </div>
    </div>
  );
}
