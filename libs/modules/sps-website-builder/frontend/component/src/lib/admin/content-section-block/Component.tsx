"use client";

import { Component as ParentComponent } from "@sps/sps-website-builder/models/content-section-block/frontend/component";
import { Component as WidgetsToContentSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-content-section-blocks/frontend/component";
import { Component as ContentSectionBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/content-section-blocks-to-buttons-arrays/frontend/component";
import { Component as ContentSectionBlocksToFeatures } from "@sps/sps-website-builder/relations/content-section-blocks-to-features/frontend/component";
import { Component as ContentSectionBlocksToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/content-section-blocks-to-sps-file-storage-module-widgets/frontend/component";

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
            widgetsToContentSectionBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToContentSectionBlocks
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "contentSectionBlockId",
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
            contentSectionBlocksToButtonsArrays={({
              data,
              hostUrl,
              isServer,
            }) => {
              if (!data) {
                return;
              }

              return (
                <ContentSectionBlocksToButtonsArrays
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "contentSectionBlockId",
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
            contentSectionBlocksToFeatures={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <ContentSectionBlocksToFeatures
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "contentSectionBlockId",
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
            contentSectionBlocksToSpsFileStorageModuleWidgets={({
              data,
              hostUrl,
              isServer,
            }) => {
              if (!data) {
                return;
              }

              return (
                <ContentSectionBlocksToSpsFileStorageModuleWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "contentSectionBlockId",
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
