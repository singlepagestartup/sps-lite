import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { IHeroSection } from "types";
import { BACKEND_URL } from "~utils/envs";

export default function SplitWithScreenshotOnDark(props: IHeroSection) {
  return (
    <div className="flex flex-col border-b border-gray-200 lg:border-0">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
        />
        <div className="relative bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
            <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
              <div className="lg:pr-16">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
                  {props.title}
                </h1>
                <ReactMarkdown className="mt-4 text-xl text-gray-400">
                  {props.description}
                </ReactMarkdown>
                <div className="mt-6 flex gap-2 flex-wrap">
                  {props.buttons?.map((button, index) => {
                    return (
                      <Link
                        key={index}
                        href={button.url}
                        className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700"
                      >
                        {button.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
          <div className="relative h-full w-full object-cover object-center">
            {props.media?.length ? (
              <Image
                src={getImageUrl(props.media[0], { BACKEND_URL })}
                alt=""
                fill={true}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
