import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import PageBlocks from "~components/page-blocks";
import { ISpsLiteSlideOverBlock } from ".";

export default function Simple(props: ISpsLiteSlideOverBlock) {
  const router = useRouter();

  return (
    <Transition show={props.isOpen} as={Fragment}>
      <Dialog
        onClose={() => {
          props.setIsOpen(false);
          router.replace(router.asPath.split(`?`)[0], undefined, {
            shallow: true,
          });
        }}
        className="relative z-50"
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
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
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
          <div className={`slide__over__simple ${props.className || ""}`}>
            <Dialog.Panel className="w-full rounded bg-white flex flex-col justify-between">
              <PageBlocks pageBlocks={props.pageBlocks} />
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
