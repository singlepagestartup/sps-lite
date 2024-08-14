import { IComponentPropsExtended } from "./interface";
import { Component as OrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";
import { Component as AddToCart } from "./assets/AddToCart";
import { Component as UpdateInCart } from "./assets/UpdateInCart";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-relation="ecommerce-order-product-cart"
      data-variant={props.variant}
      className="w-full flex flex-col"
    >
      {props.data.length ? (
        <OrdersToProducts
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="find"
          apiProps={{
            params: {
              filters: {
                and: [
                  {
                    column: "orderId",
                    method: "inArray",
                    value: props.data.map((entity) => entity.ecommerceOrderId),
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
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="find"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "orderId",
                            method: "eq",
                            value: entity.ecommerceOrderId,
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
                        <UpdateInCart
                          key={index}
                          {...props}
                          orderToProduct={orderToProduct}
                          data={entity}
                        />
                      );
                    });
                  }}
                </OrdersToProducts>
              );
            });
          }}
        </OrdersToProducts>
      ) : (
        <AddToCart {...props} />
      )}
    </div>
  );
}
