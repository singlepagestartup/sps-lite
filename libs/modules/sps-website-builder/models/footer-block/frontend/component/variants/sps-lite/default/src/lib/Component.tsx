import { IComponentPropsExtended } from "./interface";
import { Component as FooterBlocksToLogotypes } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/frontend/component/root";
import { Component as FooterBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="footer-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn(
        "w-full bg-white flex flex-col",
        props.data.className || "pb-4 pt-12 px-4 lg:pb-6 lg:pt-16 lg:px-2",
      )}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-4 justify-end gap-12">
          <div className="w-fit flex flex-col gap-2">
            {props.data.footerBlocksToLogotypes.map((entity, index) => {
              return (
                <FooterBlocksToLogotypes
                  key={index}
                  variant="default"
                  isServer={false}
                  hostUrl={props.hostUrl}
                  data={entity}
                />
              );
            })}
            {props.data.subtitle ? (
              <p className="text-muted-foreground text-xs">
                {props.data.subtitle}
              </p>
            ) : null}
            {props.data.footerBlocksToButtonsArrays
              .filter((entity) => entity.position === "additional")
              .map((entity, index) => {
                return (
                  <FooterBlocksToButtonsArrays
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="default"
                    data={entity}
                  />
                );
              })}
          </div>
          <div className="flex flex-col col-span-2 col-start-3 lg:grid lg:grid-cols-3 gap-6">
            {props.data.footerBlocksToButtonsArrays
              .filter((entity) => entity.position === "default")
              .map((entity, index) => {
                return (
                  <FooterBlocksToButtonsArrays
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="default"
                    data={entity}
                  />
                );
              })}
          </div>
        </div>
        <div className="w-full h-px bg-gray-400"></div>
        <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between gap-4">
          <div>
            {props.data.description ? (
              <p className="text-muted-foreground text-xs">
                {props.data.description}
              </p>
            ) : null}
          </div>
          <div className="flex items-center flex-wrap gap-4">
            {props.data.footerBlocksToButtonsArrays
              .filter((entity) => entity.position === "extra")
              .map((entity, index) => {
                return (
                  <FooterBlocksToButtonsArrays
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="default"
                    data={entity}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
