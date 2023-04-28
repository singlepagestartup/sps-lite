"use client";

import Image from "next/image";
import { ISpsLiteHeroSectionBlock } from ".";
import Buttons from "~components/elements/buttons";
import getFileUrl from "~utils/api/get-file-url";

export default function SimpleCentered(props: ISpsLiteHeroSectionBlock) {
  if (props.showSkeletons) {
    return (
      <div className="relative flex flex-col items-center justify-between overflow-hidden bg-white mx-auto max-w-7xl">
        <div className="relative pt-6 pb-16 w-full">
          <main className="mx-auto mt-16 max-w-2xl lg:max-w-7xl px-4 sm:mt-24 flex justify-center items-center flex-col">
            <div className="w-6/12 h-16 skeleton"></div>
            <div className="w-7/12 h-5 skeleton mt-3"></div>
            <div className="w-4/12 h-5 skeleton mt-3"></div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-between overflow-hidden bg-white mx-auto max-w-7xl">
      {props.background ? (
        <Image
          src={getFileUrl(props.background)}
          alt=""
          fill={true}
          className="object-cover object-center"
        />
      ) : null}

      <div className="relative pt-6 pb-16">
        <main className="mx-auto mt-16 max-w-2xl lg:max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight xl:inline text-gray-900 sm:text-5xl md:text-6xl">
              {props?.title}
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              {props?.description}
            </p>
            <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
              {props?.buttons?.map((button, index) => {
                return <Buttons key={index} {...button} />;
              })}
            </div>
          </div>
        </main>
      </div>
      {props.media?.length ? (
        <div className="w-full relative aspect-w-4 aspect-h-2">
          <Image
            src={getFileUrl(props.media[0])}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      ) : null}
    </div>
  );
}
