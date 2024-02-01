import { getFileUrl } from "@sps/utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        {props?.media?.length ? (
          <Image
            src={getFileUrl(props.media[0])}
            height={100}
            width={100}
            alt=""
            className="object-contain"
          />
        ) : null}
      </div>
      {props.title ? (
        <ReactMarkdown className="text-lg font-medium leading-6 text-gray-900">
          {props.title}
        </ReactMarkdown>
      ) : null}
      {props?.description ? (
        <ReactMarkdown className="text-base text-gray-500">
          {props?.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
