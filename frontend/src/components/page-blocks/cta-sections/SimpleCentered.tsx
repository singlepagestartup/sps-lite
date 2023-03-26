import { ICtaSections } from ".";
import { useMemo } from "react";
import Link from "next/link";

export default function SimpleCentered(props: ICtaSections) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  return (
    <div className="bg-white" {...additionalAttributes}>
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
          <span className="block">{props.title}</span>
        </h2>
        <span className="block">{props?.description}</span>
        <div className="mt-8 flex justify-center items-center flex-wrap">
          {props?.buttons?.map((button, index) => {
            return (
              <Link
                href={button.url}
                key={index}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get started
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
