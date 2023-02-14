import Image from "next/image";
import { ILogoCloud } from "types";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import Link from "next/link";

export default function SplitWithGridOnRight(props: ILogoCloud) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {props.title}
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              {props.description}
            </p>
            <div className="mt-8 sm:flex">
              {props.buttons?.map((button, index) => {
                return (
                  <Link
                    key={index}
                    href={button.url}
                    className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700"
                  >
                    {button.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {props.logos.map((logo, index) => {
              return (
                <div
                  key={index}
                  className="col-span-1 flex justify-center bg-gray-50 py-8 px-8"
                >
                  <Link href={logo?.url} className="relative h-12 w-full">
                    <Image
                      fill={true}
                      src={getImageUrl(logo.logo, { BACKEND_URL })}
                      alt="Tuple"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
