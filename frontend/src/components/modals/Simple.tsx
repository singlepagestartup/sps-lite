import { useState, Fragment, useEffect, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { IModal, IModalComponent, IModals } from "types";
import { useGetModalsQuery } from "~redux/services/backend/models/modals";
import PageBlocks from "~components/layout/page-blocks";

export default function Simple(props: IModalComponent) {
  const router = useRouter();
  const { isOpen, setIsOpen, dialogPanelClassName, pageBlocks } = props;

  return (
    <Transition show={isOpen} as={`div`}>
      <Dialog
        onClose={() => {
          setIsOpen(false);
          /**
           * Without asPath on close route
           * "/products/1?opened_popup=simple"
           * becomes "/products/[id]"
           */
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
          leave="ease-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
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
          {props.pageBlocks ? (
            <div className="fixed inset-0 overflow-y-scroll p-4 flex h-screen">
              <Dialog.Panel
                className={`m-auto rounded bg-white ${
                  dialogPanelClassName || `w-full`
                }`}
              >
                <PageBlocks pageBlocks={pageBlocks} setIsOpen={setIsOpen} />
              </Dialog.Panel>
            </div>
          ) : null}
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
