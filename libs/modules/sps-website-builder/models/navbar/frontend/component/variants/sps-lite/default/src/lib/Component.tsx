import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as NavbarsToWidgets } from "@sps/sps-website-builder-relations-navbars-to-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="navbar"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      <div className="navbar-container">
        {props.data.navbarsToWidgets.map((entity, index) => {
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
    </div>
  );
}
