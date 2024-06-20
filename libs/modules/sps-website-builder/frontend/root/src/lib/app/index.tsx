import React from "react";
import { IComponentProps } from "./interface";
import { Component as Page } from "@sps/sps-website-builder/models/page/frontend/component/root";

import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  return (
    <div
      data-module="sps-website-builder"
      className={cn("w-full flex", props.className)}
    >
      <Page
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="get-by-url"
        url={props.hostUrl}
      >
        {({ data: page }) => {
          if (!page) {
            return;
          }

          return (
            <Page
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant={page?.variant}
              data={page}
            />
          );
        }}
      </Page>
    </div>
  );
}
