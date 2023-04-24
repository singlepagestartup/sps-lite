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
            router.replace(pathname);
          }
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
            <div className="fixed inset-0 overflow-y-scroll px-4 pt-4 pb-20 flex h-screen">
              <Dialog.Panel
                className={`m-auto rounded bg-white ${
                  dialogPanelClassName || "w-full"
                }`}
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (pathname) {
                      router.replace(pathname);
                    }
                  }}
                  className="absolute right-2 top-2"
                >
                  <XMarkIcon className="w-6 text-gray-500" />
                </button>
                <PageBlocks
                  pageBlocks={pageBlocks}
                  isLoading={props.isLoading}
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
