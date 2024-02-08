import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "../../interface";
import { Component as File } from "@sps/sps-file-storage-frontend/lib/models/file/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        {props?.media?.length ? (
          <File
            isServer={false}
            variant="image"
            className="object-contain"
            containerClassName="relative w-[100px] h-[100px]"
            {...props.media[0]}
          />
        ) : null}
      </div>
      {props.title ? (
        <ReactMarkdown className="text-lg font-medium leading-6 text-gray-900">
          {props.title}
        </ReactMarkdown>
      ) : null}
      {props?.description ? (
        <ReactMarkdown className="text-base text-gray-500">
          {props?.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
