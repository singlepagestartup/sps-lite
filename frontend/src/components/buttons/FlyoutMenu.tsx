import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from "@headlessui/react";
import { IFlyoutMenu } from "types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(` `);
}

export default function FlyoutMenu(props: IFlyoutMenu) {
  const { title, buttonsArrays } = props;

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
            <Popover.Panel className="absolute left-1/2 z-10 mt-16 -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden flex rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                {buttonsArrays.map((buttonsArray, index) => {
                  return (
                    <div
                      key={index}
                      className="relative min-w-[200px] grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                    >
                      {buttonsArray?.buttons?.map((button, index) => (
                        <Link
                          key={index}
                          href={button.url}
                          className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                        >
                          <p className="text-base font-medium text-gray-900">
                            {button.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {button.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}
