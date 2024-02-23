import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.not-found-block"
      data-variant={props.variant}
      className="mx-auto max-w-max min-h-[90vh] bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
    >
      <main className="sm:flex">
        {props.data.title ? (
          <ReactMarkdown className="text-4xl font-bold tracking-tight text-primary-600 sm:text-5xl">
            {props.data.title}
          </ReactMarkdown>
        ) : null}
        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            {props.data.subtitle ? (
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                <ReactMarkdown>{props.data.subtitle}</ReactMarkdown>
              </h1>
            ) : null}
            {props.data.description ? (
              <ReactMarkdown className="mt-1 text-base text-gray-500">
                {props.data.description}
              </ReactMarkdown>
            ) : null}
          </div>
          <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            {props.data.buttons?.map((button, index) => {
              return (
                <Button
                  isServer={props.isServer}
                  key={index}
                  variant={button.variant}
                  data={button}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
