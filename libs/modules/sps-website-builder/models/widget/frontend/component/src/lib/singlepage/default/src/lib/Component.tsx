import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as WidgetsToContentSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-content-section-blocks/frontend/component";
import { Component as WidgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-features-section-blocks/frontend/component";
import { Component as WidgetsToNavbarBlocks } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/frontend/component";
import { Component as WidgetsToFooterBlocks } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/frontend/component";
import { Component as WidgetsToSliderBlocks } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      <WidgetsToContentSectionBlocks
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
              <WidgetsToContentSectionBlocks
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              ></WidgetsToContentSectionBlocks>
            );
          });
        }}
      </WidgetsToContentSectionBlocks>
      <WidgetsToFeaturesSectionBlocks
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
              <WidgetsToFeaturesSectionBlocks
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              ></WidgetsToFeaturesSectionBlocks>
            );
          });
        }}
      </WidgetsToFeaturesSectionBlocks>
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
      <WidgetsToSliderBlocks
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
              <WidgetsToSliderBlocks
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              ></WidgetsToSliderBlocks>
            );
          });
        }}
      </WidgetsToSliderBlocks>
    </div>
  );
}
