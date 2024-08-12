"use client";

import { Component as ParentComponent } from "@sps/website-builder/models/content-block/frontend/component";
import { Component as WidgetsToContentBlocks } from "@sps/website-builder/relations/widgets-to-content-blocks/frontend/component";
import { Component as ContentBlocksToButtonsArrays } from "@sps/website-builder/relations/content-blocks-to-buttons-arrays/frontend/component";
import { Component as ContentBlocksToFeatures } from "@sps/website-builder/relations/content-blocks-to-features/frontend/component";
import { Component as ContentBlocksToSpsFileStorageModuleWidgets } from "@sps/website-builder/relations/content-blocks-to-file-storage-module-widgets/frontend/component";

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
            widgetsToContentBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToContentBlocks
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "contentBlockId",
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
            contentBlocksToButtonsArrays={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <ContentBlocksToButtonsArrays
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "contentBlockId",
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
            contentBlocksToFeatures={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <ContentBlocksToFeatures
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "contentBlockId",
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
            contentBlocksToSpsFileStorageModuleWidgets={({
              data,
              hostUrl,
              isServer,
            }) => {
              if (!data) {
                return;
              }

              return (
                <ContentBlocksToSpsFileStorageModuleWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "contentBlockId",
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
