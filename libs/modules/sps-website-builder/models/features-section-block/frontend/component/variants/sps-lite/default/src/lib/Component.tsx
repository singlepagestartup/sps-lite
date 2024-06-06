import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as FeaturesSectionBlocksToFeaturesSpsLiteDefault } from "@sps/sps-website-builder-relations-features-section-blocks-to-features-frontend-component-variants-sps-lite-default";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="features-section-block"
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className || "")}
    >
      <div className="w-full mx-auto max-w-7xl">
        {props.data.title ? (
          <h3 className="text-6xl font-bold">{props.data.title}</h3>
        ) : null}
        <div className="grid grid-cols-3 gap-6 py-8">
          {props.data.featuresSectionBlocksToFeatures.map((entity, index) => {
            return (
              <FeaturesSectionBlocksToFeaturesSpsLiteDefault
                key={index}
                isServer={props.isServer}
                variant="default"
                data={entity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
