"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { IBackendApiEntity as IBackendApiLoader } from "~redux/services/backend/api/loader/interfaces";

export interface ILoader extends IBackendApiLoader {
  children?: any;
}

const variants = {
  ...spsLiteVariants,
};

export default function Loaders(props: ILoader) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <>{props.children}</>;
  }

  return <Comp {...props} />;
}
