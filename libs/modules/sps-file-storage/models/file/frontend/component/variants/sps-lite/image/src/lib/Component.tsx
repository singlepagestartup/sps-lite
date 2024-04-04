import { getFileUrl } from "@sps/shared-utils";
import { IComponentPropsExtended } from "./interface";
import Image from "next/image";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-file-storage"
      data-model="file"
      data-variant={props.variant}
      className={props.containerClassName ?? ""}
    >
      <Image
        src={getFileUrl(props.data)}
        alt=""
        fill={true}
        className={props.className ?? ""}
      />
    </div>
  );
}
