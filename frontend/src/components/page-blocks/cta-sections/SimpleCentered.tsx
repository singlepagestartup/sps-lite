import { ICtaSectionsBlock } from ".";
import { useMemo } from "react";
import SimpleButtons from "~components/buttons/simple-buttons";

export default function SimpleCentered(props: ICtaSectionsBlock) {
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
            return <SimpleButtons key={index} {...button} />;
          })}
        </div>
      </div>
    </div>
  );
}
