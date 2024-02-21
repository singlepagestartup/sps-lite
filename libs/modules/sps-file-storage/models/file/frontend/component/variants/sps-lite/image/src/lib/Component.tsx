import { getFileUrl } from "@sps/utils";
import { IComponentPropsExtended } from "./interface";
import Image from "next/image";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-collection-type="file"
      data-variant="image"
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
