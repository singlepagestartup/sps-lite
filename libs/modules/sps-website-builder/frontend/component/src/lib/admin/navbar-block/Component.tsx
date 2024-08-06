"use client";

import { Component as ParentComponent } from "@sps/sps-website-builder/models/navbar-block/frontend/component";
import { Component as NavbarBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/frontend/component";
import { Component as NavbarBlocksToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/frontend/component";
import { Component as WidgetsToNavbarBlocks } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/frontend/component";

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
            navbarBlocksToButtonsArrays={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <NavbarBlocksToButtonsArrays
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "navbarBlockId",
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
            navbarBlocksToLogotypes={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <NavbarBlocksToLogotypes
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "navbarBlockId",
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
            widgetsToNavbarBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToNavbarBlocks
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "navbarBlockId",
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
