"use client";

import { Component as ParentComponent } from "@sps/sps-ecommerce/models/product/frontend/component";
import { Component as ProductsToAttributes } from "@sps/sps-ecommerce/relations/products-to-attributes/frontend/component";

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
            productsToAttributes={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <ProductsToAttributes
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "productId",
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
