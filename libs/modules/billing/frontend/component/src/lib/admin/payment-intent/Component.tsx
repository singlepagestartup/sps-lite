"use client";

import { Component as ParentComponent } from "@sps/billing/models/payment-intent/frontend/component";
import { Component as PaymentIntentsToInvoices } from "@sps/billing/relations/payment-intents-to-invoices/frontend/component";
import { Component as PaymentIntentsToCurrencies } from "@sps/billing/relations/payment-intents-to-currencies/frontend/component";

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
            paymentIntentsToCurrencies={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <PaymentIntentsToCurrencies
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "paymentIntentId",
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
            paymentIntentsToInvoices={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <PaymentIntentsToInvoices
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "paymentIntentId",
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
