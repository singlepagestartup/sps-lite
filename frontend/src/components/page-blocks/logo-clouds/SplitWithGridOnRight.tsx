import Image from "next/image";
import { ILogoCloudBlock } from ".";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import Link from "next/link";
import SimpleButtons from "~components/buttons/simple-buttons";

export default function SplitWithGridOnRight(props: ILogoCloudBlock) {
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
                return <SimpleButtons key={index} {...button} />;
              })}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {props.logos?.map((logo, index) => {
              if (!logo.logo) {
                return <></>;
              }

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
