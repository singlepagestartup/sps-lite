"use client";

import { Component as ParentComponent } from "@sps/ecommerce/models/category/frontend/component";
import { Component as CategoriesToProducts } from "@sps/ecommerce/relations/categories-to-products/frontend/component";
import { Component as CategoriesToFileStorageModuleWidgets } from "@sps/ecommerce/relations/categories-to-file-storage-module-widgets/frontend/component";

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
            categoriesToProducts={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <CategoriesToProducts
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "categoryId",
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
            categoriesToFileStorageModuleWidgets={({
              data,
              hostUrl,
              isServer,
            }) => {
              if (!data) {
                return;
              }

              return (
                <CategoriesToFileStorageModuleWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "categoryId",
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
