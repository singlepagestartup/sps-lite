import { IFaqsBlock } from ".";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(` `);
}

export default function CenteredAccordionOnDark(props: IFaqsBlock) {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
            {props.title}
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {props.faqs?.map((faq, index) => (
              <Disclosure as="div" key={index} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-50">
                          {faq.title}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? `-rotate-180` : `rotate-0`,
                              `h-6 w-6 transform`
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-100">
                        {faq.description}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
