"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Button } from "@sps/shadcn";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className="flex flex-col gap-3"
    >
      {props.data.map((layout, index) => {
        return (
          <Button
            key={index}
            variant={props.value === layout.id ? "primary" : "outline"}
            onClick={() => {
              if (!props.onChange) {
                return;
              }

              props.onChange(layout.id);
            }}
          >
            {layout.title}
          </Button>
        );
      })}
    </div>
  );
}
