"use client";

import { IComponentPropsExtended } from "./interface";
import { Component as Order } from "@sps/ecommerce/models/order/frontend/component";
import { Component as OrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";
import { Component as AddToCart } from "./assets/AddToCart";
import { Component as DeleteFromCart } from "./assets/DeleteFromCart";
import { Component as UpdateInCart } from "./assets/UpdateInCart";
import { Component as Checkout } from "./assets/Checkout";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-relation="ecommerce-order-product-cart"
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.className)}
    >
      <Order
        isServer={false}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "id",
                  method: "inArray",
                  value: props.data.map(
                    (entity) => entity.ecommerceModuleOrderId,
                  ),
                },
                {
                  column: "type",
                  method: "eq",
                  value: "cart",
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          if (!data || !data?.length) {
            return <AddToCart {...props} />;
          }

          return (
            <OrdersToProducts
              isServer={false}
              hostUrl={props.hostUrl}
              variant="find"
              apiProps={{
                params: {
                  filters: {
                    and: [
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
                if (
                  !ordersWithCurrentProduct ||
                  !ordersWithCurrentProduct?.length
                ) {
                  return <AddToCart {...props} />;
                }

                const cartOrdersWithCurrentProduct =
                  ordersWithCurrentProduct.filter(
                    (ordersWithCurrentProduct) => {
                      return data.find((order) => {
                        return order.id === ordersWithCurrentProduct.orderId;
                      });
                    },
                  );

                if (!cartOrdersWithCurrentProduct.length) {
                  return <AddToCart {...props} />;
                }

                return data?.map((order, index) => {
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
                                value: order.id,
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
                          return;
                        }

                        return ordersWithCurrentProduct
                          .filter((ordersWithCurrentProduct) => {
                            return props.data.find(
                              (subjectToEcommerceModuleOrder) => {
                                return (
                                  subjectToEcommerceModuleOrder.ecommerceModuleOrderId ===
                                  ordersWithCurrentProduct.orderId
                                );
                              },
                            );
                          })
                          .map((orderToProduct, index) => {
                            const subjectToEcommerceModuleOrder =
                              props.data.find(
                                (subjectToEcommerceModuleOrder) => {
                                  return (
                                    subjectToEcommerceModuleOrder.ecommerceModuleOrderId ===
                                    orderToProduct.orderId
                                  );
                                },
                              );

                            if (!subjectToEcommerceModuleOrder) {
                              return;
                            }

                            return (
                              <div key={index} className="flex flex-col gap-2">
                                <UpdateInCart
                                  isServer={false}
                                  hostUrl={props.hostUrl}
                                  orderToProduct={orderToProduct}
                                  data={subjectToEcommerceModuleOrder}
                                />
                                <DeleteFromCart
                                  isServer={false}
                                  hostUrl={props.hostUrl}
                                  orderToProduct={orderToProduct}
                                  data={subjectToEcommerceModuleOrder}
                                />
                                <Checkout
                                  isServer={false}
                                  hostUrl={props.hostUrl}
                                  orderToProduct={orderToProduct}
                                  data={subjectToEcommerceModuleOrder}
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
          );
        }}
      </Order>
    </div>
  );
}
