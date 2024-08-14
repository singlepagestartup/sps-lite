"use client";

import { Component as ParentComponent } from "@sps/ecommerce/models/order/frontend/component";
import { Component as OrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";
import { Component as OrdersToBillingPaymentIntents } from "@sps/ecommerce/relations/orders-to-billing-payment-intents/frontend/component";

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
            ordersToBillingPaymentIntents={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <OrdersToBillingPaymentIntents
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
