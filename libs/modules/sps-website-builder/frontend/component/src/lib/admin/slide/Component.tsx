"use client";

import { Component as ParentComponent } from "@sps/sps-website-builder/models/slide/frontend/component";
import { Component as SlidersToSlides } from "@sps/sps-website-builder/relations/sliders-to-slides/frontend/component";
import { Component as SlidesToButtonsArrays } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/frontend/component";
import { Component as SlidesToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/frontend/component";

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
                            column: "slideId",
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
            slidesToButtonsArrays={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <SlidesToButtonsArrays
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "slideId",
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
            slidesToSpsFileStorageModuleWidgets={({
              data,
              hostUrl,
              isServer,
            }) => {
              if (!data) {
                return;
              }

              return (
                <SlidesToSpsFileStorageModuleWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "slideId",
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
