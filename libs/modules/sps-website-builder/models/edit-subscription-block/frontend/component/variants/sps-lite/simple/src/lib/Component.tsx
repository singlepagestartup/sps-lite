import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "./interface";
import { Component as Subscription } from "@sps/sps-subscription-models-subscription-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.edit-subscription-block"
      data-variant={props.variant}
      className=""
    >
      <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            {props.data.subtitle ? (
              <h2 className="text-lg font-semibold leading-8 text-indigo-400">
                <ReactMarkdown>{props.data.subtitle}</ReactMarkdown>
              </h2>
            ) : null}
            {props.data.title ? (
              <ReactMarkdown className="mt-2 text-4xl font-bold tracking-tight">
                {props.data.title}
              </ReactMarkdown>
            ) : null}
            {props.data.description ? (
              <ReactMarkdown className="mt-6 text-lg leading-8">
                {props.data.description}
              </ReactMarkdown>
            ) : null}
          </div>
          <Subscription isServer={props.isServer} variant="update-by-email" />
        </div>
      </div>
    </div>
  );
}
