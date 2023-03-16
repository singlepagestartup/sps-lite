import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import { IFeatureSections } from ".";
import { BACKEND_URL } from "~utils/envs";
import { StarIcon } from "@heroicons/react/20/solid";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import { useMemo } from "react";

export default function WithProductScreenshotOnLeft(props: IFeatureSections) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  return (
    <div className="bg-white py-12" {...additionalAttributes}>
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 gap-6 flex flex-col-reverse justify-center lg:grid lg:grid-cols-2">
        <div className="relative overflow-hidden aspect-w-2 aspect-h-3">
          {props?.media?.length ? (
            <Image
              src={getImageUrl(props.media[0], { BACKEND_URL })}
              alt=""
              className="object-contain object-left"
              fill={true}
            />
          ) : null}
        </div>
        <div className="">
          <div className="lg:col-span-1 mb-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {props?.title}
            </h2>
          </div>
          <p className="mb-6">{props?.description}</p>
          <dl className="flex flex-col gap-3">
            {props.features.map((feature, index) => (
              <div key={index}>
                <div>
                  {feature?.icon ? (
                    <Image
                      src={getImageUrl(feature.icon, { BACKEND_URL })}
                      height={100}
                      width={100}
                      alt=""
                      className="object-contain"
                    />
                  ) : null}
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                    {feature.title}
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  {feature?.description}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
