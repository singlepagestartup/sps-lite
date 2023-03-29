import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import { IFeaturesSectionBlock } from ".";
import { BACKEND_URL } from "~utils/envs";
import { useMemo } from "react";

export default function WithProductScreenshotOnLeft(
  props: IFeaturesSectionBlock
) {
  //
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
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-2 relative overflow-hidden aspect-w-2 aspect-h-2 rounded-xl">
          {props.media?.length ? (
            <Image
              src={getImageUrl(props.media[0], { BACKEND_URL })}
              alt=""
              className="object-left"
              fill={true}
            />
          ) : null}
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold text-indigo-600">
            {props?.title}
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {props?.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {props.description}
          </p>
          <dl className="flex flex-col gap-3 mt-4">
            {props.features.map((feature, index) => (
              <div key={index}>
                <div className="flex items-center gap-4">
                  {feature.media ? (
                    <div className="w-10">
                      <Image
                        src={getImageUrl(feature.media[0], { BACKEND_URL })}
                        height={100}
                        width={100}
                        alt=""
                        className="object-contain"
                      />
                    </div>
                  ) : null}
                  <p className="text-lg font-medium leading-6 text-gray-900">
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
