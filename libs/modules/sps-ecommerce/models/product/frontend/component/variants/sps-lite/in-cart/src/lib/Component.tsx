"use client";

import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import { Button } from "@sps/ui-adapter";
import { Component as Attribute } from "@sps/sps-ecommerce-models-attribute-frontend-component";
import { api } from "@sps/sps-ecommerce-models-product-frontend-api-client";

export function Component(props: IComponentPropsExtended) {
  const [removeFromCart, { data: removeFromCartData }] =
    api.rtk.useRemoveFromCartMutation();

  return (
    <div
      data-module="sps-ecommerce"
      data-model="product"
      data-variant={props.variant}
      className="flex gap-2 items-center text-gray-500"
    >
      <Button
        ui="shadcn"
        onClick={() => {
          removeFromCart({ id: props.data.id });
        }}
        variant="secondary"
        className="w-fit"
      >
        Remove
      </Button>

      {props.data.media?.length ? (
        <File
          variant="image"
          isServer={false}
          containerClassName="relative w-[100px] flex-shrink-0 h-[100px] overflow-hidden rounded-md bg-gray-100"
          className="object-cover object-center"
          data={props.data.media[0]}
        />
      ) : null}
      <div className={"flex flex-col text-left w-full gap-2 py-6"}>
        <h3 className="font-medium text-gray-900">{props.data.title}</h3>
        {props.data.attributes?.map((attribute, index) => {
          return (
            <Attribute
              isServer={false}
              variant="default"
              key={index}
              data={attribute}
            />
          );
        })}
      </div>
    </div>
  );
}
