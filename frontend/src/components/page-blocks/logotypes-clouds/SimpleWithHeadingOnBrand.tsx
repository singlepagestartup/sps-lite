import Image from "next/image";
import { ILogotypesCloudBlock } from ".";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import Link from "next/link";

export default function SimpleWithHeadingOnBrand(props: ILogotypesCloudBlock) {
  return (
    <div className="bg-indigo-700">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          {props.title}
        </h2>
        <div className="mt-8 flow-root lg:mt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {props.logotypes?.map((logotype, index) => {
              if (!logotype.media) {
                return <></>;
              }

              return (
                <div
                  key={index}
                  className="flex flex-shrink-0 flex-grow justify-center lg:flex-grow-0"
                >
                  <Link href={logotype?.url} className="relative h-12 w-full">
                    {logotype.media.length ? (
                      <Image
                        fill={true}
                        src={getImageUrl(logotype.media[0], { BACKEND_URL })}
                        alt="Tuple"
                      />
                    ) : null}
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
