import Image from "next/image";
import { IHeaderSectionBlock } from ".";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";

export default function BrandedWithBackgroundImage(props: IHeaderSectionBlock) {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        {props.media?.length ? (
          <div className="h-full w-full object-cover">
            <Image
              src={getImageUrl(props.media[0], { BACKEND_URL })}
              alt="Your Company"
              className="object-cover"
              fill={true}
            />
          </div>
        ) : null}
        <div
          className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {props.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
          {props.description}
        </p>
      </div>
    </div>
  );
}
