import { getFileUrl } from "@sps/utils";
import { IComponentPropsExtended } from "../../interface";
import Image from "next/image";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className={props.containerClassName ?? ""}>
      <Image
        src={getFileUrl(props)}
        alt=""
        fill={true}
        className={props.className ?? ""}
      />
    </div>
  );
}
