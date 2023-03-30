import Image from "next/image";
import { IIncentivesBlock } from ".";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";

export default function ThreeColumnWithIcons(props: IIncentivesBlock) {
  return (
    <div className="bg-white">
      <h2 className="sr-only">{props?.title}</h2>
      <div className="flex overflow-x-auto">
        <div className="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
          {props?.features?.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center text-sm font-medium text-indigo-600"
            >
              <div className="relative mr-2 h-6 w-6 flex-none">
                {feature?.media?.length ? (
                  <Image
                    src={getImageUrl(feature.media[0], { BACKEND_URL })}
                    height={100}
                    width={100}
                    alt=""
                    className=""
                  />
                ) : null}
              </div>
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
