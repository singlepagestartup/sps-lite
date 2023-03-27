import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { IButtonsArray } from "types";
import Link from "next/link";
import Buttons from "..";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(` `);
}

export default function Dropdown(props: IButtonsArray) {
  const { title, buttons } = props;

  return (
    <Popover className="inline-flex">
      {({ open }) => (
        <div className="inline-flex relative">
          <Popover.Button
            className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
              open ? `border-primary-500 text-gray-900` : ``
            }`}
          >
            <span>{title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? `text-gray-600` : `text-gray-400`,
                `ml-2 h-5 w-5 group-hover:text-gray-500`
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-16 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {buttons?.map((button, index) => {
                    return <Buttons key={index} {...button} />;
                  })}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}
