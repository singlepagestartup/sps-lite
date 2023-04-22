import { Popover, Transition } from "@headlessui/react";
import { ISpsLiteFlyoutMenu } from ".";
import PageBlocks from "~components/page-blocks";
import { Fragment } from "react";

export default function Simple(props: ISpsLiteFlyoutMenu) {
  if (props.isLoading) {
    return (
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-screen max-w-xs -translate-x-1/2 transform">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2 bg-white">
            <div className="w-full py-20 bg-slate-100 rounded-md"></div>
          </div>
        </Popover.Panel>
      </Transition>
    );
  }

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-screen max-w-xs -translate-x-1/2 transform">
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2 bg-white">
          <PageBlocks pageBlocks={props.pageBlocks} />
        </div>
      </Popover.Panel>
    </Transition>
  );
}
