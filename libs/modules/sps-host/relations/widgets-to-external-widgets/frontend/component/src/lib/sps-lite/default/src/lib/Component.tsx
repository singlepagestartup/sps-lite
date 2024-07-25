import { IComponentPropsExtended } from "./interface";
import { Component as SpsWebsiteBuilderWidget } from "@sps/sps-website-builder/models/widget/frontend/component";
// import { App as Startup } from "@sps/startup/frontend/root";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-relation="widgets-to-external-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className || "")}
    >
      {props.data.externalModule === "sps-website-builder" ? (
        <SpsWebsiteBuilderWidget
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="find"
          apiProps={{
            params: {
              filters: {
                and: [
                  {
                    column: "id",
                    method: "eq",
                    value: props.data.externalWidgetId,
                  },
                ],
              },
            },
          }}
        >
          {({ data }) => {
            return data?.map((widget) => {
              return (
                <SpsWebsiteBuilderWidget
                  key={widget.id}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  data={widget}
                  variant={widget.variant as any}
                />
              );
            });
          }}
        </SpsWebsiteBuilderWidget>
      ) : null}
      {/* {props.data.externalModule === "startup" ? (
        <Startup
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant={props.data.variant}
          props={props.data.externalModuleProps}
        />
      ) : null} */}
    </div>
  );
}
