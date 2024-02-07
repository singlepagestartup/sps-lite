import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "../../../../feature/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col items-center py-16">
        {props?.subtitle ? (
          <ReactMarkdown className="text-lg font-semibold text-indigo-600 w-fit">
            {props?.subtitle}
          </ReactMarkdown>
        ) : null}
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl w-fit">
          {props?.title ? <ReactMarkdown>{props?.title}</ReactMarkdown> : null}
        </h2>
        {props.description ? (
          <ReactMarkdown className="mt-4 max-w-2xl text-xl text-gray-500 text-center">
            {props.description}
          </ReactMarkdown>
        ) : null}
      </div>
      <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        {props.features?.map((feature, index) => (
          <Feature
            isServer={props.isServer}
            key={index}
            variant="default"
            {...feature}
          />
        ))}
      </dl>
    </div>
  );
}
