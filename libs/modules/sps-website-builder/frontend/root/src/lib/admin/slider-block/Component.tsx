"use client";

import { Component as ParentComponent } from "@sps/sps-website-builder/models/slider-block/frontend/component";
import { Component as SliderBlocksToSliders } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/frontend/component";
import { Component as WidgetsToSliderBlocks } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/frontend/component";

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
            sliderBlocksToSliders={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <SliderBlocksToSliders
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "sliderBlockId",
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
            widgetsToSliderBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToSliderBlocks
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "sliderBlockId",
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
