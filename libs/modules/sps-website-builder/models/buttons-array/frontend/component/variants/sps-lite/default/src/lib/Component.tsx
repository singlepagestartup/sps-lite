import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as ButtonsArrayToButtons } from "@sps/sps-website-builder-relations-buttons-arrays-to-buttons-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="buttons-array"
      data-variant={props.variant}
      className={`w-full ${props.data.className || "flex gap-5"}`}
    >
      {props.data.buttonsArraysToButtons.map((entity, index) => {
        return (
          <ButtonsArrayToButtons
            key={index}
            isServer={props.isServer}
            variant="default"
            data={entity}
          />
        );
      })}
    </div>
  );
}
