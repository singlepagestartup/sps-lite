import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import utils from "@rogwild/next-utils";
import { BACKEND_URL } from "~utils/envs";
import { IPageProps } from "types";
import Buttons from "~components/buttons";
const { getImageUrl } = utils.api;

export default function SimpleLinksOnLeft(props: IPageProps) {
  const { header } = props;

  return (
    <Disclosure as="nav" className="bg-white shadow w-screen">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" className="relative w-32 h-8">
                    <Image
                      src={getImageUrl(header.logo, { BACKEND_URL })}
                      alt="Your Company"
                      className="object-contain object-left"
                      fill={true}
                    />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {header.buttons?.map((button, index) => {
                    return <Buttons key={index} {...button} />;
                  })}
                </div>
              </div>
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
              <div className="hidden lg:ml-4 lg:flex lg:items-center gap-3">
                {/* <button
                  type="button"
                  className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 p-3">
              {header.buttons?.map((button, index) => {
                return <Buttons key={index} {...button} />;
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
