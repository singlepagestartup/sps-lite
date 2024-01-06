"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IBackendComponent } from "~redux/services/backend/components/elements/button/interfaces";

export interface IElement
  extends Omit<
    IBackendComponent,
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
  __component?: IBackendComponent["__component"];
  flyout?: IBackendComponent["flyout"];
  children?: any;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Button(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
