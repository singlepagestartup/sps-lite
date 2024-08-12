"use client";

import { Component as ParentComponent } from "@sps/website-builder/models/button/frontend/component";
import { Component as ButtonsArraysToButtons } from "@sps/website-builder/relations/buttons-arrays-to-buttons/frontend/component";
import { Component as ButtonsToSpsFileStorageModuleWidgets } from "@sps/website-builder/relations/buttons-to-file-storage-module-widgets/frontend/component";

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
            buttonsArraysToButtons={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <ButtonsArraysToButtons
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "buttonId",
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
            buttonsSpsFileStorageModuleWidgets={({
              data,
              hostUrl,
              isServer,
            }) => {
              if (!data) {
                return;
              }

              return (
                <ButtonsToSpsFileStorageModuleWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "buttonId",
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
