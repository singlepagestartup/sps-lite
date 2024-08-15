"use client";

import { Component as ParentComponent } from "@sps/website-builder/models/buttons-array/frontend/component";
import { Component as ButtonsArraysToButtons } from "@sps/website-builder/relations/buttons-arrays-to-buttons/frontend/component";
import { Component as WidgetsToButtonsArrays } from "@sps/website-builder/relations/widgets-to-buttons-arrays/frontend/component";
import { Component as SlidesToButtonsArrays } from "@sps/website-builder/relations/slides-to-buttons-arrays/frontend/component";
import { Component as FeaturesToButtonsArrays } from "@sps/website-builder/relations/features-to-buttons-arrays/frontend/component";

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
                            column: "buttonsArrayId",
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
            widgetsToButtonsArrays={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToButtonsArrays
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "buttonsArrayId",
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
                            column: "buttonsArrayId",
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
            featuresToButtonsArrays={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <FeaturesToButtonsArrays
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "buttonsArrayId",
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
