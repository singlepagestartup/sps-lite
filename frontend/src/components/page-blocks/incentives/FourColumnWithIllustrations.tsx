import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import { IIncentives } from "types";
import { BACKEND_URL } from "~utils/envs";
import { useMemo } from "react";

export default function FourColumnWithIllustrations(props: IIncentives) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  return (
    <div className="bg-gray-50" {...additionalAttributes}>
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {props.features.map((feature, index) => (
            <div key={index}>
              <Image
                src={getImageUrl(feature.icon, { BACKEND_URL })}
                height={100}
                width={100}
                alt=""
                className="object-contain"
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
