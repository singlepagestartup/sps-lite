"use client";

import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex items-center">
      <p className="text-md font-bold capitalize">{props.title}</p>
    </div>
  );
}
