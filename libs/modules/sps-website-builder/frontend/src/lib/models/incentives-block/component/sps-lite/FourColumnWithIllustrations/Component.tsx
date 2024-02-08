import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";
import { Component as Feature } from "../../../../feature/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-gray-50 mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      {props.title ? (
        <h3 className="text-3xl mb-3">
          <ReactMarkdown>{props.title}</ReactMarkdown>
        </h3>
      ) : null}
      {props.description ? (
        <ReactMarkdown className="mb-6">{props.description}</ReactMarkdown>
      ) : null}
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {props.features?.length
          ? props.features.map((feature, index) => {
              return (
                <Feature
                  isServer={props.isServer}
                  key={index}
                  {...feature}
                  variant="default"
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
