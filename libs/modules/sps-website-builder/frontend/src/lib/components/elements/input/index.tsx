"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IBackendComponent } from "@sps/sps-website-builder-frontend/lib/redux/components/elements/input/interfaces/index";

export interface IElement extends IBackendComponent {
  [key: string]: any;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Element(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
