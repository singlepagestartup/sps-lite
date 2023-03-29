import Image from "next/image";
import { IIncentivesBlock } from ".";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";

export default function ThreeColumnWithIconsAndSupportingText(
  props: IIncentivesBlock
) {
  return (
    <div className="bg-white">
      <h2 className="sr-only">{props.title}</h2>
      <div className="mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x lg:py-8">
        {props?.features?.map((feature) => (
          <div
            key={feature.title}
            className="py-8 lg:w-1/3 lg:flex-none lg:py-0"
          >
            <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
              <div className="h-8 w-8 flex-shrink-0 text-indigo-600 relative">
                {feature.icon ? (
                  <Image
                    src={getImageUrl(feature.icon, { BACKEND_URL })}
                    height={100}
                    width={100}
                    alt=""
                    className=""
                  />
                ) : null}
              </div>
              <div className="ml-4 flex flex-auto flex-col-reverse">
                <h3 className="font-medium text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
