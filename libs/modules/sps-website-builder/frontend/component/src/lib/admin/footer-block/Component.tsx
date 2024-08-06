"use client";

import { Component as ParentComponent } from "@sps/sps-website-builder/models/footer-block/frontend/component";
import { Component as FooterBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/frontend/component";
import { Component as FooterBlocksToTogotypes } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/frontend/component";
import { Component as WidgetsToFooterBlocks } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/frontend/component";

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
            footerBlocksToButtonsArrays={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <FooterBlocksToButtonsArrays
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "footerBlockId",
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
            footerBlocksToLogotypes={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <FooterBlocksToTogotypes
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "footerBlockId",
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
            widgetsToFooterBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToFooterBlocks
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "footerBlockId",
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
