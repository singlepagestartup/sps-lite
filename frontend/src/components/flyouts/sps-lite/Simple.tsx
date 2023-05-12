import { Popover, Transition } from "@headlessui/react";
import { ISpsLiteFlyout } from ".";
import PageBlocks from "~components/page-blocks";
import { Fragment } from "react";

export default function Simple(props: ISpsLiteFlyout) {
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
      <Popover.Panel
        data-collection-type="flyout"
        data-variant={props.variant}
        className={props.className || ""}
      >
        <div className="flyout-container">
          <PageBlocks
            pageBlocks={props.pageBlocks}
            showSkeletons={props.showSkeletons}
          />
        </div>
      </Popover.Panel>
    </Transition>
  );
}
