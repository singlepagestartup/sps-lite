"use client";
import "client-only";

import { IComponentProps } from "../interface";
import { variants } from "./variants";

// default is required for dynamic import
export default function Client(props: IComponentProps) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
