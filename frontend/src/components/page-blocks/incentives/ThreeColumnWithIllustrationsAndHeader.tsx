import Image from "next/image";
import { IIncentives } from ".";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";

export default function ThreeColumnWithIllustrationsAndHeader(
  props: IIncentives
) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              {props.title}
            </h2>
            <p className="mt-4 text-gray-500">{props.description}</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {props.features.map((feature) => (
              <div key={feature.title} className="sm:flex lg:block">
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
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
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
    </div>
  );
}
