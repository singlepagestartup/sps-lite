import React from "react";
import { IComponentPropsExtended } from "./interface";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@sps/shadcn";
import { Component as WidgetsToHeroSectionBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      {props.data?.SPSWBWidgetsToHeroSectionBlocks.length ? (
        props.data?.SPSWBWidgetsToHeroSectionBlocks.map(
          (widgetsToHeroSectionBlock, index) => {
            return (
              <WidgetsToHeroSectionBlocksSpsLiteSelectRight
                key={index}
                isServer={props.isServer}
                variant="select-right"
                data={widgetsToHeroSectionBlock}
              />
            );
          },
        )
      ) : (
        <WidgetsToHeroSectionBlocksSpsLiteSelectRight
          isServer={props.isServer}
          variant="select-right"
          widgetId={props.data?.id}
          data={undefined}
        />
      )}
    </div>
  );
}
