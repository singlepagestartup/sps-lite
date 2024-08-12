"use client";

import { Component as ParentComponent } from "@sps/sps-ecommerce/models/products-list-block/frontend/component";
import { Component as WidgetsToProductsListBlocks } from "@sps/sps-ecommerce/relations/widgets-to-products-list-blocks/frontend/component";

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
            widgetsToProductsListBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToProductsListBlocks
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "productsListBlockId",
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
