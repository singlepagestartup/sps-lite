"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IBackendComponent } from "@sps/sps-crm-contracts/lib/components/elements/input/interfaces";

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
