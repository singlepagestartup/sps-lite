import { BACKEND_URL, getFileUrl } from "@sps/utils";
import { IComponent as IFeature } from "@sps/sps-website-builder-contracts/lib/components/elements/feature/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/feature/populate";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export async function Component(props: IFeature) {
  const data = await fetch(
    `${BACKEND_URL}/api/features/1?populate=${populate}`,
  );

  return (
    <div className="flex flex-col gap-3">
      {/* <div>
        {props?.media?.length ? (
          <Image
            src={getFileUrl(feature.media[0])}
            height={100}
            width={100}
            alt=""
            className="object-contain"
          />
        ) : null}
      </div> */}
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
