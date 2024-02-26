import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements.feature"
      data-variant={props.variant}
      className="flex flex-col gap-3"
    >
      <div>
        {props.data?.media?.length ? (
          <File
            isServer={false}
            variant="image"
            className="object-contain"
            containerClassName="relative w-[100px] h-[100px]"
            data={props.data.media[0]}
          />
        ) : null}
      </div>
      {props.data.title ? (
        <ReactMarkdown className="text-lg font-medium leading-6 text-gray-900">
          {props.data.title}
        </ReactMarkdown>
      ) : null}
      {props.data?.description ? (
        <ReactMarkdown className="text-base text-gray-500">
          {props.data?.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
