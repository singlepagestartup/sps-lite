"use client";

import { IComponentPropsExtended } from "./interface";
import { Component as OrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";
import { Component as AddToCart } from "./assets/AddToCart";
import { Component as DeleteFromCart } from "./assets/DeleteFromCart";
import { Component as UpdateInCart } from "./assets/UpdateInCart";
import { Component as Checkout } from "./assets/Checkout";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-relation="ecommerce-order-product-cart"
      data-variant={props.variant}
      className="w-full flex flex-col"
    >
      <OrdersToProducts
        isServer={false}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "orderId",
                  method: "inArray",
                  value: props.data.map(
                    (entity) => entity.ecommerceModuleOrderId,
                  ),
                },
                {
                  column: "productId",
                  method: "eq",
                  value: props.product.id,
                },
              ],
            },
          },
        }}
      >
        {({ data: ordersWithCurrentProduct }) => {
          if (!ordersWithCurrentProduct?.length) {
            return <AddToCart {...props} />;
          }

          return props.data.map((entity, index) => {
            return (
              <OrdersToProducts
                key={index}
                isServer={false}
                hostUrl={props.hostUrl}
                variant="find"
                apiProps={{
                  params: {
                    filters: {
                      and: [
                        {
                          column: "orderId",
                          method: "eq",
                          value: entity.ecommerceModuleOrderId,
                        },
                        {
                          column: "productId",
                          method: "eq",
                          value: props.product.id,
                        },
                      ],
                    },
                  },
                }}
              >
                {({ data }) => {
                  return data?.map((orderToProduct, index) => {
                    return (
                      <div key={index} className="flex flex-col gap-2">
                        <UpdateInCart
                          isServer={false}
                          hostUrl={props.hostUrl}
                          orderToProduct={orderToProduct}
                          data={entity}
                        />
                        <DeleteFromCart
                          isServer={false}
                          hostUrl={props.hostUrl}
                          orderToProduct={orderToProduct}
                          data={entity}
                        />
                        <Checkout
                          isServer={false}
                          hostUrl={props.hostUrl}
                          orderToProduct={orderToProduct}
                          data={entity}
                        />
                      </div>
                    );
                  });
                }}
              </OrdersToProducts>
            );
          });
        }}
      </OrdersToProducts>
    </div>
  );
}
