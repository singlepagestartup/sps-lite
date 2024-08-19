"use client";

import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { api } from "@sps/ecommerce/relations/orders-to-products/sdk/client";
import { Component as Order } from "@sps/ecommerce/models/order/frontend/component";
import { useEffect } from "react";

export function Component(props: IComponentPropsExtended) {
  const createEntity = api.create();

  useEffect(() => {
    if (createEntity.isSuccess && typeof props.successCallback === "function") {
      props.successCallback(createEntity.data);
    }
  }, [createEntity.isSuccess]);

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
        variant="create"
        successCallback={(data) => {
          createEntity.mutate({
            data: {
              orderId: data.id,
              productId: props.product.id,
            },
          });
        }}
      />
    </div>
  );
}
