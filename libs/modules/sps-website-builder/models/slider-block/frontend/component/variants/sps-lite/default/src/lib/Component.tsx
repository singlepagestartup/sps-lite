import { IComponentPropsExtended } from "./interface";
import { Component as SliderBlocksToSliders } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="slider-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.data.className || ""}`}
    >
      <div className="px-2 w-full max-w-7xl mx-auto">
        {props.data.sliderBlocksToSliders.map(
          (sliderBlocksToSliders, index) => {
            return (
              <SliderBlocksToSliders
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="default"
                data={sliderBlocksToSliders}
              />
            );
          },
        )}
      </div>
    </div>
  );
}
