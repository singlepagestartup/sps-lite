import { Component as Slider } from "../../../../../../entities/slider/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="max-w-7xl container mx-auto bg-white relative w-full my-10">
      <div className="w-full">
        {props.slider ? <Slider {...props.slider} /> : null}
      </div>
    </div>
  );
}
