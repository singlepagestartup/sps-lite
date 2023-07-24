import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PageBlocks from "~components/page-blocks";
import { ISpsLiteModal } from ".";
import { usePathname, useRouter } from "next/navigation";

export default function Simple(props: ISpsLiteModal) {
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen, setIsOpen, dialogPanelClassName, pageBlocks } = props;

  return (
    <Transition show={isOpen} as={"div"}>
      <Dialog
        onClose={() => {
          setIsOpen(false);
          if (pathname) {
            router.replace(pathname, { scroll: false });
          }
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
          {props.pageBlocks ? (
            <div className="modal-container">
              <Dialog.Panel
                className={`dialog-panel ${
                  props.dialogPanelClassName || "w-full"
                }`}
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (pathname) {
                      router.replace(pathname, { scroll: false });
                    }
                  }}
                  className="button-close"
                >
                  <XMarkIcon />
                </button>
                <PageBlocks
                  pageBlocks={pageBlocks}
                  showSkeletons={props.showSkeletons}
                  setIsOpen={setIsOpen}
                />
              </Dialog.Panel>
            </div>
          ) : null}
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
