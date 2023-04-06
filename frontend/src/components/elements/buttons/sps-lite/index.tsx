import { IBackendButton } from "types/components/elements";
import BottomLine from "./BottomLine";
import Default from "./Default";
import Primary from "./Primary";
import { FC } from "react";

export interface ISpsLiteButton
  extends Omit<
    IBackendButton,
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
  __component?: IBackendButton[`__component`];
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
