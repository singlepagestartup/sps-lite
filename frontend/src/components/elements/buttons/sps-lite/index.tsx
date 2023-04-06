import BottomLine from "./BottomLine";
import Default from "./Default";
import Primary from "./Primary";
import { FC } from "react";
import { ISpsLiteBackendButton } from "types/components/elements/sps-lite";

export interface ISpsLiteButton
  extends Omit<
    ISpsLiteBackendButton,
    | `id`
    | `url`
    | `description`
    | `className`
    | `additionalAttributes`
    | `__component`
  > {
  url?: string | null;
  description?: string | null;
  className?: string | null;
  additionalAttributes?: any | null;
  onClick?: any;
  __component?: ISpsLiteBackendButton[`__component`];
}

export const variants = {
  "bottom-line": BottomLine,
  primary: Primary,
  default: Default,
};

export default function SimpleButtons(props: ISpsLiteButton) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteButton>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
