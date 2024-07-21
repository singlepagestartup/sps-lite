import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      {props.children}
      {/* {props.data.widgetsToNavbarBlocks.map((widgetToNavbarBlock, index) => {
        return (
          <WidgetsToNavbarBlocks
            key={index}
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="default"
            data={widgetToNavbarBlock}
          />
        );
      })}
      {props.data.widgetsToFooterBlocks.map((widgetToFooterBlock, index) => {
        return (
          <WidgetsToFooterBlocks
            key={index}
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="default"
            data={widgetToFooterBlock}
          />
        );
      })}
      {props.data.widgetsToSliderBlocks.map((widgetToSliderBlock, index) => {
        return (
          <WidgetsToSliderBlocks
            key={index}
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="default"
            data={widgetToSliderBlock}
          />
        );
      })} */}
    </div>
  );
}
