"use client";

import { Component as ParentComponent } from "@sps/sps-website-builder/models/slider/frontend/component";
import { Component as SlidersToSlides } from "@sps/sps-website-builder/relations/sliders-to-slides/frontend/component";
import { Component as ContentSectionBlocksToSliders } from "@sps/sps-website-builder/relations/content-section-blocks-to-sliders/frontend/component";

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
            slidersToSlides={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <SlidersToSlides
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "sliderId",
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
            sliderBlocksToSliders={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <ContentSectionBlocksToSliders
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "sliderId",
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
