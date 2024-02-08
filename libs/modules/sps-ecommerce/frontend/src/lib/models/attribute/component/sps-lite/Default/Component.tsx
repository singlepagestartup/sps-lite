"use client";

import { IComponentPropsExtended } from "../../interface";
import { Component as AttributeKey } from "../../../../attribute-key/component";
import { Component as Currency } from "@sps/sps-billing-frontend/lib/models/currency/component";

export function Component(props: IComponentPropsExtended) {
  if (!props.attributeKey) {
    return <></>;
  }

  return (
    <div className="py-2 flex items-end gap-2">
      <AttributeKey
        isServer={props.isServer}
        variant="default"
        {...props.attributeKey}
      />
      <div className="flex items-end gap-1">
        <p className="text-md font-bold">{props[props.attributeKey.type]}</p>
        {props.currency ? (
          <Currency
            isServer={props.isServer}
            variant="default"
            {...props.currency}
          />
        ) : null}
      </div>
    </div>
  );
}
