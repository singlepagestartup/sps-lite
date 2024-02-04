import { getFileUrl } from "@sps/utils";
import Image from "next/image";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div>
      {props.media?.length ? (
        <Image
          src={getFileUrl(props.media[0])}
          alt=""
          className="object-contain object-left"
          width={200}
          height={200}
        />
      ) : null}
    </div>
  );
}
