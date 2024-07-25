"use client";

import { Component as ParentComponent } from "@sps/sps-website-builder/models/features-section-block/frontend/component";
import { Component as FeaturesSectionBlocksToFeatures } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/frontend/component";
import { Component as WidgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-features-section-blocks/frontend/component";

export function Component() {
  return (
    <ParentComponent
      hostUrl="/"
      isServer={false}
      variant="admin-table"
      adminForm={(props) => {
        return (
          <ParentComponent
            {...props}
            variant="admin-form"
            featuresSectionBlocksToFeatures={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <FeaturesSectionBlocksToFeatures
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "featuresSectionBlockId",
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
            widgetsToFeaturesSectionBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToFeaturesSectionBlocks
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "featuresSectionBlockId",
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
