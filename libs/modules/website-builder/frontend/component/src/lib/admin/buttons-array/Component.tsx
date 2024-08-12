"use client";

import { Component as ParentComponent } from "@sps/website-builder/models/buttons-array/frontend/component";
import { Component as ButtonsArraysToButtons } from "@sps/website-builder/relations/buttons-arrays-to-buttons/frontend/component";
import { Component as FooterBlocksToButtonsArrays } from "@sps/website-builder/relations/footer-blocks-to-buttons-arrays/frontend/component";
import { Component as ContentBlocksToButtonsArrays } from "@sps/website-builder/relations/content-blocks-to-buttons-arrays/frontend/component";
import { Component as NavbarBlocksToButtonsArrays } from "@sps/website-builder/relations/navbar-blocks-to-buttons-arrays/frontend/component";
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
