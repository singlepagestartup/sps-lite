import Slider from "~components/slider";
import { IPageBlock } from "../..";

export default function Component(props: IPageBlock) {
  return (
    <div className="max-w-7xl container mx-auto bg-white relative w-full my-10">
      <div className="w-full">
        {props.slider ? <Slider {...props.slider} /> : null}
      </div>
    </div>
  );
}
