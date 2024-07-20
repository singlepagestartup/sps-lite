import { IComponentPropsExtended } from "./interface";
import { Component as HeroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/frontend/component/root";
import { TipTap } from "@sps/shared-ui-shadcn";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn(
        "w-full flex flex-col",
        props.data.className || "px-2 py-20 lg:py-32",
      )}
    >
      <div className="w-full mx-auto max-w-7xl">
        {props.data?.title ? (
          <h1 className="text-4xl font-bold tracking-tight xl:inline text-gray-900 sm:text-5xl md:text-6xl">
            <p>{props.data?.title}</p>
          </h1>
        ) : null}
        {props.data.description ? (
          <TipTap value={props.data.description} />
        ) : null}
        {/* <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
          {props.data.heroSectionBlocksToButtonsArrays.map((entity, index) => {
            return (
              <HeroSectionBlocksToButtonsArrays
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                data={entity}
                variant="default"
              />
            );
          })}
        </div> */}
        <div className="w-full">{props.fileStorageWidgets}</div>
      </div>
    </div>
  );
}
