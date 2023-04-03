import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import { IFeaturesSectionBlock } from ".";
import { BACKEND_URL } from "~utils/envs";
import { useMemo } from "react";

export default function SimpleThreeColumn(props: IFeaturesSectionBlock) {
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
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:col-span-1 mb-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props?.title}
          </h2>
        </div>
        <p className="mb-6">{props?.description}</p>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {props.features?.map((feature, index) => (
            <div key={index}>
              <dt>
                {feature?.media?.length ? (
                  <Image
                    src={getImageUrl(feature.media[0], { BACKEND_URL })}
                    height={100}
                    width={100}
                    alt=""
                    className="object-contain"
                  />
                ) : null}
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
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
