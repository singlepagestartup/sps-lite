import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import { IHeroSectionBlock } from "..";
import { BACKEND_URL } from "~utils/envs";
import Link from "next/link";
import SimpleButtons from "~components/buttons/simple-buttons";

const navigation = [
  { name: `Product`, href: `#` },
  { name: `Features`, href: `#` },
  { name: `Marketplace`, href: `#` },
  { name: `Company`, href: `#` },
];

export default function WithAngledImageOnRight(props: IHeroSectionBlock) {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl relative mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight xl:inline text-gray-900 sm:text-5xl md:text-6xl">
                  {props.title}
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  {props.description}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  {props.buttons?.map((button, index) => {
                    return <SimpleButtons key={index} {...button} />;
                  })}
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="relative pb-[100%] lg:pb-[60%] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {props?.media?.length ? (
            <Image
              src={getImageUrl(props.media[0], { BACKEND_URL })}
              alt=""
              fill={true}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
