"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { IEntity as IBackendLoader } from "~redux/services/backend/api/loader/interfaces";

export interface ILoader extends IBackendLoader {
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
