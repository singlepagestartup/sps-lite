import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ISpsLiteNavbar } from ".";
import PageBlocks from "~components/page-blocks";

export default function Simple(props: ISpsLiteNavbar) {
  return (
    <Disclosure
      as="nav"
      className={`bg-white shadow w-screen z-30 fixed ${
        props.topbar?.variant === `simple` ? `mt-10` : ``
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2">
            <PageBlocks pageBlocks={props.pageBlocks} />
            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="">
              <PageBlocks pageBlocks={props.pageBlocks} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
