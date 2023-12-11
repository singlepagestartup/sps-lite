import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IPageBlock } from "../..";

export default function Component(props: IPageBlock) {
  return (
    <div className="bg-gray-50 mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      {props.title ? (
        <h3 className="text-3xl mb-3">
          <ReactMarkdown>{props.title}</ReactMarkdown>
        </h3>
      ) : null}
      {props.description ? (
        <ReactMarkdown className="mb-6">{props.description}</ReactMarkdown>
      ) : null}
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {props.features?.length
          ? props.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start"
              >
                {feature.media?.length ? (
                  <Image
                    src={getFileUrl(feature.media[0])}
                    height={100}
                    width={100}
                    alt=""
                    className="object-contain"
                  />
                ) : null}
                {feature.title ? (
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    <ReactMarkdown>{feature.title}</ReactMarkdown>
                  </h3>
                ) : null}
                {feature?.description ? (
                  <ReactMarkdown className="mt-2 text-sm text-gray-500">
                    {feature?.description}
                  </ReactMarkdown>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
