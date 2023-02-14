import { IFaqs, ILogoCloud } from "types";
import ReactMarkdown from "react-markdown";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function Simple(props: ILogoCloud) {
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
          {props.logos.map((logo, index) => {
            return (
              <div
                key={index}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                {logo?.url ? (
                  <Link href={logo.url} className="relative h-12 w-full">
                    <Image
                      fill={true}
                      src={getImageUrl(logo.logo, { BACKEND_URL })}
                      alt="Tuple"
                    />
                  </Link>
                ) : (
                  <div className="relative h-12 w-full">
                    <Image
                      fill={true}
                      src={getImageUrl(logo.logo, { BACKEND_URL })}
                      alt="Tuple"
                    />
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
