"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import type { IEntity as IBackendLoader } from "../../redux/entities/loader/interfaces";

export interface ILoader extends IBackendLoader {
  children?: any;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Loader(props: ILoader) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <>{props.children}</>;
  }

  return <Comp {...props} />;
}
