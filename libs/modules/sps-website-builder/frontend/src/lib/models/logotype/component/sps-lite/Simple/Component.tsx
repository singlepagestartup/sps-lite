import { IComponentPropsExtended } from "../../interface";
import { Component as File } from "@sps/sps-file-storage-frontend/lib/models/file/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex items-center">
      {props.media?.length ? (
        <File
          isServer={false}
          variant="image"
          {...props.media[0]}
          containerClassName="relative w-[200px] h-[50px]"
          className="object-contain object-left"
        />
      ) : null}
    </div>
  );
}
