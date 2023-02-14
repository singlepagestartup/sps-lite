import { IHeaderSection } from "types";
import ReactMarkdown from "react-markdown";
import { useMemo } from "react";

export default function SimpleCentered(props: IHeaderSection) {
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
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-primary-600">
            {props.subtitle}
          </h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {props.title}
          </p>
          <ReactMarkdown className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            {props.description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
