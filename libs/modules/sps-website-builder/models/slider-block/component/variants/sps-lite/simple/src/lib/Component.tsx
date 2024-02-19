import { Component as Slider } from "@sps/sps-website-builder-slider-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="max-w-7xl container mx-auto bg-white relative w-full my-10">
      <div className="w-full">
        {props.data.slider ? (
          <Slider
            isServer={false}
            variant={props.data.slider.variant}
            data={props.data.slider}
          />
        ) : null}
      </div>
    </div>
  );
}
