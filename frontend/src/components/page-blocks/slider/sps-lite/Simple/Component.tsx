import Slider from "~components/slider";
import { ISpsLiteSliderBlock } from "..";

export default function Component(props: ISpsLiteSliderBlock) {
  return (
    <div className="max-w-7xl container mx-auto bg-white relative w-full my-10">
      <div className="w-full">
        {props.slider ? <Slider {...props.slider} /> : null}
      </div>
    </div>
  );
}
