import Link from "next/link";
import useGetButtonParams from "../hooks/use-get-button-params";
import { ISpsLiteButton } from ".";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Menus from "~components/menus";

export default function Secondary(props: ISpsLiteButton) {
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

  if (props?.menu) {
    return (
      <div className={props?.className || ``}>
        <Popover className="inline-flex">
          {({ open }) => (
            <div className="inline-flex relative">
              <Popover.Button className="button-secondary">
                {props.title}
                <ChevronDownIcon
                  className={`ml-2 h-5 w-5`}
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
                <Popover.Panel className="absolute left-1/2 z-10 mt-16 w-screen max-w-xs -translate-x-1/2 transform">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2 bg-white">
                    {props.menu ? <Menus {...props.menu} /> : null}
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          )}
        </Popover>
      </div>
    );
  }

  if (props?.onClick) {
    return (
      <div className={props?.className || ``}>
        <button
          {...additionalAttributes}
          onClick={props.onClick}
          className="button-secondary"
        >
          {props.title}
        </button>
      </div>
    );
  }

  if (url) {
    return (
      <div className={props?.className || ``}>
        <Link
          {...additionalAttributes}
          href={url}
          aria-selected={isActive}
          className="button-secondary"
        >
          {props.title}
        </Link>
      </div>
    );
  }

  return <></>;
}
