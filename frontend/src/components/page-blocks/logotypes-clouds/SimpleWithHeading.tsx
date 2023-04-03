import Image from "next/image";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import Link from "next/link";
import { ILogotypesCloudBlock } from ".";

export default function SimpleWithHeading(props: ILogotypesCloudBlock) {
  return (
    <div className="bg-indigo-200 bg-opacity-25">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left">
            {props.title}
          </h2>
          <div className="mt-8 flow-root self-center lg:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {props.logotypes?.map((logotype, index) => {
                if (!logotype.media) {
                  return <></>;
                }

                return (
                  <div
                    key={index}
                    className="flex flex-shrink-0 flex-grow justify-center lg:flex-grow-0"
                  >
                    <Link
                      href={logotype?.url || ``}
                      className="relative h-12 w-full"
                    >
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
    </div>
  );
}
