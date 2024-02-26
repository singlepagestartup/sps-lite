import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "./interface";
import { Component as Feature } from "@sps/sps-website-builder-models-feature-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.incentives-block"
      data-variant={props.variant}
      className="bg-gray-50 mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8"
    >
      {props.data.title ? (
        <h3 className="text-3xl mb-3">
          <ReactMarkdown>{props.data.title}</ReactMarkdown>
        </h3>
      ) : null}
      {props.data.description ? (
        <ReactMarkdown className="mb-6">{props.data.description}</ReactMarkdown>
      ) : null}
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {props.data.features?.length
          ? props.data.features.map((feature, index) => {
              return (
                <Feature
                  isServer={props.isServer}
                  key={index}
                  variant="default"
                  data={feature}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
