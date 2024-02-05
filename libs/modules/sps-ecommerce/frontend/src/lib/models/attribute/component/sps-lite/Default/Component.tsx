"use client";

import { IComponentPropsExtended } from "../../interface";
import { Component as AttributeKey } from "../../../../attribute-key/component";
import { Component as Currency } from "@sps/sps-billing-frontend/lib/models/currency/component";
import { Button } from "@sps/ui-adapter";
import { api } from "../../../api/client";

export function Component(props: IComponentPropsExtended) {
  const [refetch, { data }] = api.useLazyFindOneQuery();

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
        <Button
          ui="shadcn"
          variant="ghost"
          onClick={() => {
            refetch({ id: props.id });
          }}
        >
          Refetch attribute
        </Button>
      </div>
    </div>
  );
}
