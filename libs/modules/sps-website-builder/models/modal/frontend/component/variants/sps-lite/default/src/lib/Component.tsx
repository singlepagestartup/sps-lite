"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IComponentPropsExtended } from "./interface";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function Component(props: IComponentPropsExtended) {
  return (
    <Transition show={props.isOpen} as={Fragment}>
      <Dialog
        onClose={() => {
          props.close();
        }}
        data-module="sps-website-builder"
        data-model="modal"
        data-id={props.data?.id || ""}
        data-variant={props.variant}
        as="div"
        className=""
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-out duration-300"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        ></Transition.Child>
      </Dialog>
    </Transition>
  );
}
