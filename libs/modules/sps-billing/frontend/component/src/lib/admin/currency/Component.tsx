"use client";

import { Component as ParentComponent } from "@sps/sps-billing/models/currency/frontend/component";
import { Component as InvoicesToCurrencies } from "@sps/sps-billing/relations/invoices-to-currencies/frontend/component";

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
            invoicesToCurrencies={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <InvoicesToCurrencies
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "currencyId",
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
