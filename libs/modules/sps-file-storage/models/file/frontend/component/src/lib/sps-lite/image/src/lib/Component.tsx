import { IComponentPropsExtended } from "./interface";
import Image from "next/image";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-file-storage"
      data-model="file"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={props.containerClassName ?? ""}
    ></div>
  );
}
