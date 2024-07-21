import { cn } from "@sps/shared-frontend-client-utils";
import { IComponentPropsExtended } from "./interface";
// import { Component as SlidesToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/frontend/component/root";
// import { Component as SlidesToButtonsArrays } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements"
      data-variant="default"
      className={cn("w-full flex", props.data.className)}
    >
      <div className="relative min-h-80 w-full flex flex-col items-center justify-center gap-10">
        <div className="absolute inset-0 flex">
          {/* {props.data.slidesToSpsFileStorageWidgets.map((entity, index) => {
            return (
              <SlidesToSpsFileStorageWidgets
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="default"
                data={entity}
              />
            );
          })} */}
        </div>
        <div className="flex flex-col gap-12 items-center">
          <div className="relative p-10">
            <h3 className="font-bold text-xl lg:text-4xl relative">
              {props.data.title}
            </h3>
          </div>

          {/* {props.data.slidesToButtonsArrays.length ? (
            <div className="relative flex gap-6">
              {props.data.slidesToButtonsArrays.map((entity, index) => {
                return (
                  <SlidesToButtonsArrays
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="default"
                    data={entity}
                  />
                );
              })}
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}
