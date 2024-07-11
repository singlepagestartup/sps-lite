import { IComponentProps } from "./interface";
import { Component as Page } from "@sps/sps-host/models/page/frontend/component/root";

import { cn } from "@sps/shared-frontend-client-utils";

export function App(props: IComponentProps) {
  return (
    <div data-module="sps-host" className={cn("w-full flex", props.className)}>
      <Page
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find-by-url"
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
