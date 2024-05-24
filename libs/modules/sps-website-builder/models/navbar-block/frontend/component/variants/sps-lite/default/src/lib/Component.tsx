"use client";

import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { usePathname, useSearchParams } from "next/navigation";
import { IComponentPropsExtended } from "./interface";
import { Component as NavbarsToButtonsArrays } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-arrays-frontend-component";
import { Component as NavbarsToLogotypes } from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <Disclosure
      data-module="sps-website-builder"
      data-model="navbar-block"
      data-variant={props.variant}
      as="div"
      className="w-full"
    >
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
  props: IComponentPropsExtended;
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
      <div className="mx-auto flex flex-row w-full overflow-hidden">
        <div className="flex w-full justify-between">
          <div className="flex w-full px-2 lg:px-0 items-center justify-between">
            <div className="flex w-full items-center h-16">
              <div className="w-fit">
                {props.data.navbarBlocksToLogotypes.map((entity, index) => {
                  return (
                    <NavbarsToLogotypes
                      key={index}
                      variant="default"
                      isServer={false}
                      data={entity}
                    />
                  );
                })}
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-2 items-center">
                {props.data.navbarBlocksToButtonsArrays.map((entity, index) => {
                  return (
                    <NavbarsToButtonsArrays
                      key={index}
                      variant="default"
                      data={entity}
                      isServer={false}
                    />
                  );
                })}
              </div>
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
          {props.data.navbarBlocksToButtonsArrays.map((entity, index) => {
            return (
              <NavbarsToButtonsArrays
                key={index}
                variant="default"
                data={entity}
                isServer={false}
              />
            );
          })}
        </div>
      </Disclosure.Panel>
    </>
  );
}
