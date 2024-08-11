"use client";

import { Component as ParentComponent } from "@sps/sps-ecommerce/models/order/frontend/component";
import { Component as OrdersToProducts } from "@sps/sps-ecommerce/relations/orders-to-products/frontend/component";

export function Component() {
  return (
    <ParentComponent
      hostUrl="/"
      isServer={false}
      variant="admin-table"
      adminForm={(props) => {
        return (
          <ParentComponent
            isServer={false}
            hostUrl={props.hostUrl}
            data={props.data}
            variant="admin-form"
            ordersToProducts={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <OrdersToProducts
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "orderId",
                            method: "eq",
                            value: data.id,
                          },
                        ],
                      },
                    },
                  }}
                />
              );
            }}
          />
        );
      }}
    />
  );
}
