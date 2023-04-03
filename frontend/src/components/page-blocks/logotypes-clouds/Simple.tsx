import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { ILogotypesCloudBlock } from ".";

export default function Simple(props: ILogotypesCloudBlock) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  return (
    <div className="bg-white" {...additionalAttributes}>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {props.logotypes?.map((logotype, index) => {
            if (!logotype.media) {
              return <></>;
            }

            return (
              <div
                key={index}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                {logotype?.url ? (
                  <Link
                    href={logotype.url || ``}
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
                ) : (
                  <div className="relative h-12 w-full">
                    {logotype.media.length ? (
                      <Image
                        fill={true}
                        src={getImageUrl(logotype.media[0], { BACKEND_URL })}
                        alt="Tuple"
                      />
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
