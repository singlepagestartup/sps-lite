import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";
import { IComponentPropsExtended } from "./interface";
import { Component as NavbarsToWidgets } from "@sps/sps-website-builder-relations-navbars-to-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <nav
      data-module="sps-website-builder"
      data-model="navbar"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      <div className="navbar-container">
        {props.data.SPSWBNavbarsToWidgets.map((entity, index) => {
          return (
            <NavbarsToWidgets
              key={index}
              isServer={props.isServer}
              variant="default"
              data={entity}
            />
          );
        })}
      </div>
    </nav>
  );
}
