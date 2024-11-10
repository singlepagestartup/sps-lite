"use client";

import { Component as ParentComponent } from "@sps/ecommerce/models/store/frontend/component";
import { Component as StoresToAttributes } from "@sps/ecommerce/relations/stores-to-attributes/frontend/component";
import { Component as StoresToProducts } from "@sps/ecommerce/relations/stores-to-products/frontend/component";

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
            storesToAttributes={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <StoresToAttributes
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "storeId",
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
            storesToProducts={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <StoresToProducts
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "storeId",
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
