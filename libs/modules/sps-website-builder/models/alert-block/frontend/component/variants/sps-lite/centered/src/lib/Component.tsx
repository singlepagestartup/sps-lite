import ReactMarkdown from "react-markdown";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.alert-block"
      data-variant={props.variant}
      className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <div className="w-2/12 mx-auto mb-8">
          {props.data.media?.length ? (
            <File
              isServer={false}
              variant="image"
              data={props.data.media[0]}
              containerClassName="aspect-w-3 aspect-h-3 relative"
              className=""
            />
          ) : null}
        </div>
        <h2 className="text-lg font-semibold text-primary-600">
          {props.data.subtitle}
        </h2>
        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {props.data.title}
        </p>
        {props.data.description ? (
          <ReactMarkdown className="mx-auto my-8 max-w-xl text-xl text-gray-500">
            {props.data.description}
          </ReactMarkdown>
        ) : null}
        <div className="flex gap-2 justify-center">
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
    </div>
  );
}
