"use client";

import { IComponentProps } from "./interface";

export function Skeleton(props: IComponentProps) {
  return <div className="w-32 flex flex-shrink-0 lg:ml-6 h-10 skeleton"></div>;
}
