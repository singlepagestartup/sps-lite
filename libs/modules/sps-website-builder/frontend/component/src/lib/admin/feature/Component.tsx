"use client";

import { Component as ParentComponent } from "@sps/sps-website-builder/models/feature/frontend/component";
import { Component as ContentBlocksToFeatures } from "@sps/sps-website-builder/relations/content-blocks-to-features/frontend/component";
import { Component as FeaturesToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-widgets/frontend/component";

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
                            column: "featureId",
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
            featuresToSpsFileStorageModuleWidgets={({
              data,
              hostUrl,
              isServer,
            }) => {
              if (!data) {
                return;
              }

              return (
                <FeaturesToSpsFileStorageModuleWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "featureId",
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
