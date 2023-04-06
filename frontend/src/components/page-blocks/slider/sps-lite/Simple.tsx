import { useMemo } from "react";
import Slider from "~components/slider";
import { ISpsLiteSliderBlock } from ".";

export default function Simple(props: ISpsLiteSliderBlock) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  return (
    <section
      className={`bg-white relative w-full my-10`}
      {...additionalAttributes}
    >
      <div className="max-w-7xl container mx-auto">
        <div className="w-full">
          {props.slider ? <Slider {...props.slider} /> : null}
        </div>
      </div>
    </section>
  );
}
