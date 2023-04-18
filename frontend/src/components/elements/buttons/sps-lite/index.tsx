import BottomLine from "./BottomLine";
import Secondary from "./Secondary";
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
    | `flyoutMenu`
  > {
  url?: string | null;
  description?: string | null;
  className?: string | null;
  additionalAttributes?: any | null;
  onClick?: any;
  __component?: ISpsLiteBackendButton[`__component`];
  flyoutMenu?: ISpsLiteBackendButton[`flyoutMenu`];
}

export const variants = {
  "bottom-line": BottomLine,
  primary: Primary,
  secondary: Secondary,
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
