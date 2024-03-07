"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IComponentPropsExtended } from "./interface";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <Transition show={props.isOpen} as={Fragment}>
      <Dialog
        onClose={() => {
          props.close();
        }}
        data-module="sps-website-builder"
        data-model="modal"
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
        >
          {props.data?.pageBlocks ? (
            <div className="modal-container">
              <Dialog.Panel className={`dialog-panel w-full`}>
                <button
                  onClick={() => {
                    props.close();
                  }}
                  className="button-close"
                >
                  <XMarkIcon />
                </button>
                <PageBlocks
                  variant="default"
                  isServer={false}
                  data={props.data}
                />
              </Dialog.Panel>
            </div>
          ) : null}
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
