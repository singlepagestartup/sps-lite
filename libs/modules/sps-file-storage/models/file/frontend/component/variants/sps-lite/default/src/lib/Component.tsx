import Image from "next/image";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-file-storage"
      data-model="file"
      data-variant={props.variant}
      className={`w-full relative ${props.data.containerClassName || ""}`}
    >
      <Image
        src={props.data.url}
        alt=""
        fill={true}
        className={props.data.className || ""}
      />
    </div>
  );
}
