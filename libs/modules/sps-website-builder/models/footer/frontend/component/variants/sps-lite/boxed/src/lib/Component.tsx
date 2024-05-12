import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";
import { IComponentPropsExtended } from "./interface";
import { Component as FootersToWidgets } from "@sps/sps-website-builder-relations-footers-to-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <footer
      data-module="sps-website-builder"
      data-model="footer"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      <div className="footer-container">
        {props.data.SPSWBFootersToWidgets.map((entity, index) => {
          return (
            <FootersToWidgets
              key={index}
              isServer={props.isServer}
              variant="default"
              data={entity}
            />
          );
        })}
      </div>
    </footer>
  );
}
