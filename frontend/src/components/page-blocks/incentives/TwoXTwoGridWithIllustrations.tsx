import Image from "next/image";
import { IIncentivesBlock } from ".";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";

export default function TwoXTwoGridWithIllustrations(props: IIncentivesBlock) {
  return (
    <div className="bg-gray-50">
      <h2 className="sr-only">{props.title}</h2>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {props?.features?.map((feature, index) => (
            <div key={index} className="sm:flex">
              <div className="sm:flex-shrink-0">
                {feature?.media?.length ? (
                  <div className="flow-root h-24 w-28 relative">
                    <Image
                      src={getImageUrl(feature.media[0], { BACKEND_URL })}
                      height={100}
                      width={100}
                      alt=""
                      className=""
                    />
                  </div>
                ) : null}
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <h3 className="text-sm font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
