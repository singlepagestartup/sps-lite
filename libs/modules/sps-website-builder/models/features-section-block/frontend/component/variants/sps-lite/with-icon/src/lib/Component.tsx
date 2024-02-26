import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "@sps/sps-website-builder-models-feature-frontend-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.features-section-block"
      data-variant={props.variant}
      className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div className="flex flex-col items-center py-16">
        {props.data?.subtitle ? (
          <ReactMarkdown className="text-lg font-semibold text-indigo-600 w-fit">
            {props.data?.subtitle}
          </ReactMarkdown>
        ) : null}
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl w-fit">
          {props.data?.title ? (
            <ReactMarkdown>{props.data?.title}</ReactMarkdown>
          ) : null}
        </h2>
        {props.data.description ? (
          <ReactMarkdown className="mt-4 max-w-2xl text-xl text-gray-500 text-center">
            {props.data.description}
          </ReactMarkdown>
        ) : null}
      </div>
      <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        {props.data.features?.map((feature, index) => (
          <Feature
            isServer={props.isServer}
            key={index}
            variant="default"
            data={feature}
          />
        ))}
      </dl>
    </div>
  );
}
