import { cn } from "@sps/shared-frontend-client-utils";
import { IComponentPropsExtended } from "./interface";
// import { Component as File } from "@sps/sps-file-storage/models/file/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements.feature"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("flex flex-col", props.data.className)}
    >
      {/* <div>
        {props.data?.media?.length ? (
          <File
            isServer={false}
              hostUrl={props.hostUrl}
            variant="image"
            className="object-contain"
            containerClassName="relative w-[100px] h-[100px]"
            data={props.data.media[0]}
          />
        ) : null}
      </div> */}
      {props.data.title ? (
        <p className="text-3xl font-medium leading-6 text-gray-900">
          {props.data.title}
        </p>
      ) : null}
      {props.data?.description ? (
        <p className="text-base text-gray-500">{props.data?.description}</p>
      ) : null}
    </div>
  );
}
