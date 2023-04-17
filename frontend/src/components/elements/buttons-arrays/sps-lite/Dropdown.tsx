import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { IButtonsArray } from ".";
import Buttons from "~components/elements/buttons";

export default function Dropdown(props: IButtonsArray) {
  const { title, buttons } = props;

  return (
    <Popover className="inline-flex">
      {({ open }) => (
        <div className="inline-flex relative">
          <Popover.Button className="button-secondary">
            {title}
            <ChevronDownIcon className={`ml-2 h-5 w-5`} aria-hidden="true" />
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
                <div className="relative grid gap-3 bg-white p-3">
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
