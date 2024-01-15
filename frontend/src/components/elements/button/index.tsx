"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IBackendComponent } from "~redux/services/backend/components/elements/button/interfaces";

export interface IElement extends IBackendComponent {}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Element(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
