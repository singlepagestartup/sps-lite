import { Component as Slider } from "@sps/sps-website-builder-models-slider-frontend-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.slider-block"
      data-variant={props.variant}
      className="max-w-7xl container mx-auto bg-white relative w-full my-10"
    >
      <div className="w-full">
        {props.data.title ? (
          <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl mb-6">
            {props.data.title}
          </h1>
        ) : null}

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
