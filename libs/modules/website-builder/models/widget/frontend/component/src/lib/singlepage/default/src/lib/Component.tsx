import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as WidgetsToContentBlocks } from "@sps/website-builder/relations/widgets-to-content-blocks/frontend/component";
import { Component as WidgetsToNavbarBlocks } from "@sps/website-builder/relations/widgets-to-navbar-blocks/frontend/component";
import { Component as WidgetsToFooterBlocks } from "@sps/website-builder/relations/widgets-to-footer-blocks/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="website-builder"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      <WidgetsToContentBlocks
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "widgetId",
                  method: "eq",
                  value: props.data.id,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <WidgetsToContentBlocks
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              ></WidgetsToContentBlocks>
            );
          });
        }}
      </WidgetsToContentBlocks>
      <WidgetsToNavbarBlocks
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "widgetId",
                  method: "eq",
                  value: props.data.id,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <WidgetsToNavbarBlocks
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              ></WidgetsToNavbarBlocks>
            );
          });
        }}
      </WidgetsToNavbarBlocks>
      <WidgetsToFooterBlocks
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "widgetId",
                  method: "eq",
                  value: props.data.id,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <WidgetsToFooterBlocks
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              ></WidgetsToFooterBlocks>
            );
          });
        }}
      </WidgetsToFooterBlocks>
    </div>
  );
}
