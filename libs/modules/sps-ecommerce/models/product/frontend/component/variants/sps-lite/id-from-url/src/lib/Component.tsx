"use client";

import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex flex-col text-gray-500">
      {props.data.media?.length ? (
        <File
          variant="image"
          isServer={false}
          containerClassName="relative w-full aspect-w-2 aspect-h-2 overflow-hidden rounded-md bg-gray-100"
          className="object-cover object-center"
          data={props.data.media[0]}
        />
      ) : null}
      <div className={"flex flex-col gap-2 py-6"}>
        <h3 className="font-medium text-gray-900">{props.data.title}</h3>

        {props.data.description ? (
          <div className="prose prose-sm max-w-none text-gray-500">
            <ReactMarkdown>{props.data.description}</ReactMarkdown>
          </div>
        ) : null}
      </div>
    </div>
  );
}
