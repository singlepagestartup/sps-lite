"use client";

import { IModel } from "../interface";
import { api } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/client";
import { IModel as IOrderToProduct } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { Component as EcommerceModuleOrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";

export function Component(
  props: ISpsComponentBase & {
    orderToProduct: IOrderToProduct;
    data: IModel;
  },
) {
  const deleteEntity = api.delete();

  return (
    <EcommerceModuleOrdersToProducts
      isServer={false}
      hostUrl={props.hostUrl}
      variant="delete"
      data={{ id: props.orderToProduct.id }}
      successCallback={(data) => {
        deleteEntity.mutate({
          id: props.data.id,
        });
      }}
    />
  );
}
