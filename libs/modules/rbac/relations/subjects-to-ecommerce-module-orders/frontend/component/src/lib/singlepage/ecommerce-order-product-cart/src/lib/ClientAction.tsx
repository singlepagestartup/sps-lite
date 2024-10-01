"use client";

import { IComponentPropsExtended } from "./interface";
import { Component as Order } from "@sps/ecommerce/models/order/frontend/component";
import { Component as OrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";
import { Component as AddToCart } from "./assets/AddToCart";
import { cn } from "@sps/shared-frontend-client-utils";
import { api } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/client";

export function Component(props: IComponentPropsExtended) {
  const deleteEntity = api.delete();

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
                                <OrdersToProducts
                                  isServer={false}
                                  hostUrl={props.hostUrl}
                                  variant="quantity"
                                  data={orderToProduct}
                                />
                                <OrdersToProducts
                                  isServer={false}
                                  hostUrl={props.hostUrl}
                                  variant="delete"
                                  data={orderToProduct}
                                  successCallback={(data) => {
                                    deleteEntity.mutate({
                                      id: subjectToEcommerceModuleOrder.id,
                                    });
                                  }}
                                />
                                <Order
                                  isServer={false}
                                  hostUrl={props.hostUrl}
                                  variant="checkout"
                                  data={{
                                    id: subjectToEcommerceModuleOrder.ecommerceModuleOrderId,
                                  }}
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
