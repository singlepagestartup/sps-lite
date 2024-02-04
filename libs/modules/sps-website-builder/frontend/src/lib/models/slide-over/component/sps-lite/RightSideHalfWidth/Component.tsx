"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Component as PageBlocks } from "../../../../../components/page-blocks/component";
import { usePathname, useRouter } from "next/navigation";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Transition show={props.isOpen} as={Fragment}>
      <Dialog
        data-collection-type="slide-over"
        data-variant={props.variant}
        className={props.className || ""}
        onClose={() => {
          props.setIsOpen(false);
          if (pathname) {
            router.replace(pathname);
          }
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 -right-[100%]"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 -right-[100%]"
        >
          <div className="slide-over-container">
            <Dialog.Panel className="dialog-panel">
              <PageBlocks
                variant="default"
                isServer={false}
                pageBlocks={props.pageBlocks}
              />
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
