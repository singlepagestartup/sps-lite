import { IComponentPropsExtended } from "./interface";
import { Component as SliderBlocksToSliders } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/frontend/component";

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
        <SliderBlocksToSliders
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="find"
          apiProps={{
            params: {
              filters: {
                and: [
                  {
                    column: "sliderBlockId",
                    method: "eq",
                    value: props.data.id,
                  },
                ],
              },
            },
          }}
        >
          {({ data }) => {
            return data?.map((entity, index) => {
              return (
                <SliderBlocksToSliders
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant={entity.variant as any}
                  data={entity}
                />
              );
            });
          }}
        </SliderBlocksToSliders>
      </div>
    </div>
  );
}
