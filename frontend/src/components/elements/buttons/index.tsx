"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { IBackendComponentElement } from "~redux/services/backend/components/elements/button/interfaces";

export interface IElement
  extends Omit<
    IBackendComponentElement,
    | "id"
    | "url"
    | "description"
    | "className"
    | "additionalAttributes"
    | "__component"
    | "flyout"
  > {
  url?: string | null;
  description?: string | null;
  className?: string | null;
  additionalAttributes?: any | null;
  onClick?: any;
  __component?: IBackendComponentElement["__component"];
  flyout?: IBackendComponentElement["flyout"];
  children?: any;
}

const variants = {
  ...spsLiteVariants,
};

export default function Buttons(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
