import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.header-section-block"
      data-variant={props.variant}
      className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        {props.data.subtitle ? (
          <h2 className="text-lg font-semibold text-primary-600">
            <ReactMarkdown>{props.data.subtitle}</ReactMarkdown>
          </h2>
        ) : null}
        {props.data.title ? (
          <ReactMarkdown className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {props.data.title}
          </ReactMarkdown>
        ) : null}
        {props.data.description ? (
          <ReactMarkdown className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            {props.data.description}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
