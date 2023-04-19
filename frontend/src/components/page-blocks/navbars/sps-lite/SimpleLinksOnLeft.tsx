"use client";

import Image from "next/image";
import Link from "next/link";
import nextUtils from "@rogwild/next-utils";
import { BACKEND_URL } from "~utils/envs";
import { ISpsLiteNavbarBlock } from ".";
import Buttons from "~components/elements/buttons";
const { getFileUrl } = nextUtils.api;

export default function SimpleLinksOnLeft(props: ISpsLiteNavbarBlock) {
  return (
    <div className="mx-auto max-w-7xl px-2">
      <div className="flex h-16 justify-between">
        <div className="flex w-full px-2 lg:px-0 justify-between">
          <div className="flex">
            {props.logotype?.media?.length ? (
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="relative w-32 h-8">
                  <Image
                    src={getFileUrl(props.logotype.media[0], {
                      BACKEND_URL,
                    })}
                    alt=""
                    className="object-contain object-left"
                    fill={true}
                  />
                </Link>
              </div>
            ) : null}
            <div className="hidden lg:ml-6 lg:flex lg:space-x-6 items-center">
              {props.buttons?.map((button, index) => {
                return <Buttons key={index} {...button} />;
              })}
            </div>
          </div>
          <div className="hidden lg:flex lg:space-x-2 items-center">
            {props.additionalButtons?.map((button, index) => {
              return <Buttons key={index} {...button} />;
            })}
          </div>
        </div>
        <div className="hidden lg:ml-4 lg:flex lg:items-center gap-3">
          {/* <button
                  type="button"
                  className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
        </div>
      </div>
    </div>
  );
}
