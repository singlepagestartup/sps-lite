"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IComponentPropsExtended } from "./interface";
import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";

export function Component(props: IComponentPropsExtended) {
  const query = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const openedModal = query?.get("opened_modal");
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<
    IComponentPropsExtended["data"][number] | undefined
  >();

  useEffect(() => {
    for (const modal of props.data) {
      if (openedModal === modal.uid) {
        setModal(modal);
      }
    }
  }, [openedModal]);

  useEffect(() => {
    if (openedModal && !isOpen) {
      setIsOpen(true);
    }

    if (!openedModal && isOpen) {
      setIsOpen(false);
    }
  }, [openedModal]);

  function closeModal() {
    setIsOpen(false);

    if (typeof router?.replace === "function") {
      router.replace(pathname, { scroll: false });
    }
  }

  return (
    <Transition
      show={isOpen}
      data-module="sps-website-builder"
      data-model="modal"
      data-variant={props.variant}
      as={"div"}
    >
      <div className="relative">
        <Dialog
          onClose={() => {
            closeModal();
          }}
          data-collection-type="modal"
          data-variant={props.variant}
          className={props.className || ""}
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
            {modal?.pageBlocks ? (
              <div className="modal-container">
                <Dialog.Panel
                  className={`dialog-panel ${
                    props.dialogPanelClassName || "w-full"
                  }`}
                >
                  <button
                    onClick={() => {
                      closeModal();
                    }}
                    className="button-close"
                  >
                    <XMarkIcon />
                  </button>
                  <PageBlocks
                    variant="default"
                    isServer={false}
                    data={modal.pageBlocks}
                  />
                </Dialog.Panel>
              </div>
            ) : null}
          </Transition.Child>
        </Dialog>
      </div>
    </Transition>
  );
}
