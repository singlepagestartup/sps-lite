import ReactMarkdown from "react-markdown";
import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";
import Button from "~components/elements/button";
import { IPageBlock } from "../..";

export default function Component(props: IPageBlock) {
  return (
    <div className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="w-2/12 mx-auto mb-8">
          <div className="aspect-w-3 aspect-h-3 relative">
            {props.media?.length ? (
              <Image src={getFileUrl(props.media[0])} alt="" fill={true} />
            ) : null}
          </div>
        </div>
        <h2 className="text-lg font-semibold text-primary-600">
          {props.subtitle}
        </h2>
        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {props.title}
        </p>
        {props.description ? (
          <ReactMarkdown className="mx-auto my-8 max-w-xl text-xl text-gray-500">
            {props.description}
          </ReactMarkdown>
        ) : null}
        <div className="flex gap-2 justify-center">
          {props.buttons?.map((button, index) => {
            return <Button key={index} {...button} />;
          })}
        </div>
      </div>
    </div>
  );
}
