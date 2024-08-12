"use client";

import { Component as ParentComponent } from "@sps/sps-ecommerce/models/product-overview-block/frontend/component";
import { Component as WidgetsToProductOverviewBlocks } from "@sps/sps-ecommerce/relations/widgets-to-product-overview-blocks/frontend/component";

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
            widgetsToProductOverviewBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToProductOverviewBlocks
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "productOverviewBlockId",
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
