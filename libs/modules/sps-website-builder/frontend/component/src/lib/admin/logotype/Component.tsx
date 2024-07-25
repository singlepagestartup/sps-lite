"use client";

import { Component as ParentComponent } from "@sps/sps-website-builder/models/logotype/frontend/component";
import { Component as LogotypesToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/frontend/component";
import { Component as FooterBlocksToLogotypes } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/frontend/component";
import { Component as NavbarBlocksToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/frontend/component";

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
            logotypesToSpsFileStorageModuleWidgets={({
              data,
              hostUrl,
              isServer,
            }) => {
              if (!data) {
                return;
              }

              return (
                <LogotypesToSpsFileStorageModuleWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "logotypeId",
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
                <FooterBlocksToLogotypes
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "logotypeId",
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
            navbarBlocksToLogotypes={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <NavbarBlocksToLogotypes
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "logotypeId",
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
