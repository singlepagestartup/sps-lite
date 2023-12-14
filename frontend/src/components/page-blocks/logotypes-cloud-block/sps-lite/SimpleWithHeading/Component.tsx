import Image from "next/image";
import Link from "next/link";
import getFileUrl from "~utils/api/get-file-url";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IPageBlock } from "../..";

export default function Component(props: IPageBlock) {
  return (
    <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div>
          {props.title ? (
            <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left mb-4">
              <ReactMarkdown>{props.title}</ReactMarkdown>
            </h2>
          ) : null}
          {props.subtitle ? (
            <ReactMarkdown className="mb-4">{props.subtitle}</ReactMarkdown>
          ) : null}
          {props.description ? (
            <ReactMarkdown className="mb-6">{props.description}</ReactMarkdown>
          ) : null}
        </div>
        <div className="mt-8 flow-root self-center lg:mt-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {props.logotypes?.map((logotype, index) => {
              if (!logotype.media) {
                return <></>;
              }

              return (
                <div
                  key={index}
                  className="flex flex-shrink-0 flex-grow justify-center lg:flex-grow-0"
                >
                  <Link
                    href={logotype?.url || ""}
                    className="relative h-12 w-full"
                  >
                    {logotype.media.length ? (
                      <Image
                        fill={true}
                        src={getFileUrl(logotype.media[0])}
                        alt="Tuple"
                      />
                    ) : null}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
