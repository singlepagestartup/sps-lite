import { IComponentProps } from "./interface";
import { Component as Page } from "@sps/host/models/page/frontend/component";

import { cn } from "@sps/shared-frontend-client-utils";

export function App(props: IComponentProps) {
  return (
    <div data-module="host" className={cn("w-full flex", props.className)}>
      <Page
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find-by-url"
        url={props.hostUrl}
      >
        {({ data }) => {
          if (!data) {
            return;
          }

          return (
            <Page
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant={data?.variant as any}
              data={data}
            />
          );
        }}
      </Page>
    </div>
  );
}
