import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as WidgetsToAuthenticationBlocks } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/frontend/component";
import { Component as WidgetsToIdentitiesBlocks } from "@sps/sps-rbac/relations/widgets-to-identities-blocks/frontend/component";
import { Component as WidgetsToSubjectsBlocks } from "@sps/sps-rbac/relations/widgets-to-subjects-blocks/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full", props.data.className)}
    >
      <WidgetsToAuthenticationBlocks
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
              <WidgetsToAuthenticationBlocks
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                data={entity}
                variant={entity.variant as any}
              />
            );
          });
        }}
      </WidgetsToAuthenticationBlocks>
      <WidgetsToIdentitiesBlocks
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
              <WidgetsToIdentitiesBlocks
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                data={entity}
                variant={entity.variant as any}
              />
            );
          });
        }}
      </WidgetsToIdentitiesBlocks>
      <WidgetsToSubjectsBlocks
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
              <WidgetsToSubjectsBlocks
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                data={entity}
                variant={entity.variant as any}
              />
            );
          });
        }}
      </WidgetsToSubjectsBlocks>
    </div>
  );
}
