"use client";

import React, { useEffect } from "react";
// import { Disclosure } from "@headlessui/react";
import { usePathname, useSearchParams } from "next/navigation";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  // return (
  //   <Disclosure
  //     data-module="sps-website-builder"
  //     data-model="navbar-block"
  //     data-id={props.data?.id || ""}
  //     data-variant={props.variant}
  //     as="div"
  //     className="w-full"
  //   >
  //     {(disclosure) => {
  //       return <DisclosureInner disclosure={disclosure} props={props} />;
  //     }}
  //   </Disclosure>
  // );
  return <></>;
}

function DisclosureInner({
  disclosure,
  props,
}: {
  disclosure: any;
  props: IComponentPropsExtended;
}) {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // useEffect(() => {
  //   if (disclosure?.close) {
  //     disclosure.close();
  //   }
  // }, [pathname, searchParams, disclosure.close]);
  // return (
  //   <>
  //     <div className="mx-auto flex flex-row w-full overflow-hidden">
  //       {props.children}
  //       <div className="flex flex-shrink-0 items-center lg:hidden pr-2">
  //         <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
  //           <span className="sr-only">Open main menu</span>
  //           {disclosure.open ? (
  //             <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
  //           ) : (
  //             <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
  //           )}
  //         </Disclosure.Button>
  //       </div>
  //     </div>
  //     <Disclosure.Panel className="lg:hidden py-2">
  //       {props.children}
  //     </Disclosure.Panel>
  //   </>
  // );
}
