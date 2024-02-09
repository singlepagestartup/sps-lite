"use client";

import { IComponentPropsExtended } from "../../interface";
import { Component as Tier } from "../../../component";

export function Component(props: IComponentPropsExtended<{ variant: "list" }>) {
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8 items-start">
      {props.list?.map((item, index) => {
        return (
          <Tier isServer={false} key={index} variant="default" {...item} />
        );
      })}
    </div>
  );
}
