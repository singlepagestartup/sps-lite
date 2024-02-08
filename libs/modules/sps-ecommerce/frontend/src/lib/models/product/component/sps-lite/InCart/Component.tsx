"use client";

import { IComponentPropsExtended } from "../../interface";
import { Component as File } from "@sps/sps-file-storage-frontend/lib/models/file/component";
import { Button } from "@sps/ui-adapter";
import { Component as Attribute } from "../../../../attribute/component";
import { api } from "../../../api/client";

export function Component(props: IComponentPropsExtended) {
  const [removeFromCart, { data: removeFromCartData }] =
    api.useRemoveFromCartMutation();

  return (
    <div className="flex gap-2 items-center text-gray-500">
      {props.media?.length ? (
        <File
          variant="image"
          isServer={false}
          containerClassName="relative w-[100px] flex-shrink-0 h-[100px] overflow-hidden rounded-md bg-gray-100"
          className="object-cover object-center"
          {...props.media[0]}
        />
      ) : null}
      <div className={"flex flex-col text-left w-full gap-2 py-6"}>
        <h3 className="font-medium text-gray-900">{props.title}</h3>
        {props.attributes?.map((attribute, index) => {
          return (
            <Attribute
              isServer={false}
              variant="default"
              key={index}
              {...attribute}
            />
          );
        })}
      </div>
      <Button
        ui="shadcn"
        onClick={() => {
          removeFromCart({ id: props.id });
        }}
        variant="secondary"
        className="w-fit"
      >
        Remove from cart
      </Button>
    </div>
  );
}
