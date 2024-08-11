"use client";

import { Component as ParentComponent } from "@sps/sps-billing/models/invoice/frontend/component";
import { Component as PaymentIntentsToInvoices } from "@sps/sps-billing/relations/payment-intents-to-invoices/frontend/component";

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
                            column: "invoiceId",
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
