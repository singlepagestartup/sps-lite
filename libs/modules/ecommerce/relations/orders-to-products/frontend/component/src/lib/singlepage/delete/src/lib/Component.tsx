"use client";

import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { api } from "@sps/ecommerce/relations/orders-to-products/sdk/client";
import { Component as Order } from "@sps/ecommerce/models/order/frontend/component";
import { useEffect } from "react";

export function Component(props: IComponentPropsExtended) {
  const deleteEntity = api.delete();

  useEffect(() => {
    if (deleteEntity.isSuccess && typeof props.successCallback === "function") {
      props.successCallback(deleteEntity.data);
    }
  }, [deleteEntity.isSuccess]);

  return (
    <div
      data-module="ecommerce"
      data-relation="orders-to-products"
      data-variant={props.variant}
      className={cn("w-full flex", props.className)}
    >
      <Order
        isServer={false}
        hostUrl={props.hostUrl}
        variant="delete"
        data={{
          id: props.data.orderId,
        }}
        successCallback={(data) => {
          // deleteEntity.mutate({
          //   id: props.data.id,
          // });

          if (typeof props.successCallback === "function") {
            props.successCallback(props.data);
          }
        }}
      />
    </div>
  );
}
