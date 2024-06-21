import { IComponentProps } from "./interface";
import { Component as Page } from "@sps/sps-website-builder/models/page/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  const parsedProps = JSON.parse(props.props || "{}");
  const model = parsedProps.model || "page";

  if (props.variant === "default") {
    if (model === "page") {
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
    } else if (model === "navbar") {
      return <div className="p-5 bg-red-400 w-full"></div>;
    }
  }

  return null;
}
