import Image from "next/image";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-file-storage"
      data-model="file"
      data-variant={props.variant}
      className={`relative ${props.data.containerClassName || "w-full"}`}
    >
      {props.data.file ? (
        <Image
          src={props.data.file}
          alt=""
          fill={true}
          className={props.data.className || ""}
        />
      ) : null}
    </div>
  );
}
