import Image from "next/image";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-file-storage"
      data-model="file"
      data-variant={props.variant}
      className={`${props.data.className || "w-full"}`}
    >
      <div className="w-full relative aspect-w-2 aspect-h-2">
        <Image src={props.data.url} alt="" fill={true} />
      </div>
    </div>
  );
}
