import Image from "next/image";
import { IIncentivesBlock } from ".";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";

export default function ThreeColumnWithIllustrationsAndHeading(
  props: IIncentivesBlock
) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {props?.title}
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
              {props?.features?.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center sm:flex-row lg:block"
                >
                  {feature.icon ? (
                    <div className="sm:flex-shrink-0 h-16 w-16 relative">
                      <Image
                        src={getImageUrl(feature.icon, { BACKEND_URL })}
                        height={100}
                        width={100}
                        alt=""
                        className=""
                      />
                    </div>
                  ) : null}
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
