import { getFileUrl } from "@sps/utils";
import Image from "next/image";
import { IElementExtended } from "../..";

export function Component(props: IElementExtended) {
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
