"use client";

import Image from "next/image";
import { useMemo } from "react";
import { ISpsLiteFeaturesSectionBlock } from ".";
import getFileUrl from "~utils/api/get-file-url";

export default function WithIcon(props: ISpsLiteFeaturesSectionBlock) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  // console.log(props)

  return (
    <div className="bg-white py-12" {...additionalAttributes}>
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <p className="text-lg font-semibold text-indigo-600 w-fit">
            {props?.subtitle}
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl w-fit">
            {props?.title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 text-center">
            {props.description}
          </p>
        </div>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {props.features?.map((feature, index) => (
            <div key={index}>
              <dt>
                {feature?.media?.length ? (
                  <Image
                    src={getFileUrl(feature.media[0])}
                    height={100}
                    width={100}
                    alt=""
                    className="object-contain"
                  />
                ) : null}
                <p className="text-lg font-medium leading-6 text-gray-900">
                  {feature.title}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature?.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
