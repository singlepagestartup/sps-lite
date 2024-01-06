"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "~components/elements/button";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import getFileUrl from "~utils/api/get-file-url";
import { IPageBlock } from "../..";

export default function Component(props: IPageBlock) {
  return (
    <Disclosure as="div" className="w-full">
      {(disclosure) => {
        return <DisclosureInner disclosure={disclosure} props={props} />;
      }}
    </Disclosure>
  );
}

function DisclosureInner({
  disclosure,
  props,
}: {
  disclosure: any;
  props: IPageBlock;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (disclosure?.close) {
      disclosure.close();
    }
  }, [pathname, searchParams, disclosure.close]);

  return (
    <>
      <div className="mx-auto flex flex-row w-full">
        <div className="flex w-full h-16 justify-between">
          <div className="flex w-full px-2 lg:px-0 justify-between">
            <div className="flex">
              {props.logotype?.media?.length ? (
                <div className="flex flex-shrink-0 items-center">
                  {props.logotype.url ? (
                    <Link href="/" className="relative w-32 h-8">
                      <Image
                        src={getFileUrl(props.logotype.media[0])}
                        alt=""
                        className="object-contain object-left"
                        fill={true}
                      />
                    </Link>
                  ) : (
                    <div className="relative w-32 h-8">
                      <Image
                        src={getFileUrl(props.logotype.media[0])}
                        alt=""
                        className="object-contain object-left"
                        fill={true}
                      />
                    </div>
                  )}
                </div>
              ) : null}
              <div className="hidden lg:ml-6 lg:flex lg:space-x-6 items-center">
                {props.buttons?.map((button, index) => {
                  return <Button key={index} {...button} />;
                })}
              </div>
            </div>
            <div className="hidden lg:flex lg:space-x-2 items-center">
              {props.additionalButtons?.map((button, index) => {
                return <Button key={index} {...button} />;
              })}
              {props.extraButtons?.map((button, index) => {
                return <Button key={index} {...button} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center lg:hidden pr-2">
          <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
            <span className="sr-only">Open main menu</span>
            {disclosure.open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>
      </div>

      <Disclosure.Panel className="lg:hidden py-2">
        <div className="flex flex-col gap-3 px-2 ">
          {props.buttons?.map((button, index) => {
            return <Button key={index} {...button} />;
          })}
          {props.additionalButtons?.map((button, index) => {
            return <Button key={index} {...button} />;
          })}
        </div>
      </Disclosure.Panel>
    </>
  );
}
