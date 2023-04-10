import BottomLine from "./BottomLine";
import Default from "./Default";
import Dropdown from "./Dropdown";
import Simple from "./Simple";
import { FC } from "react";
import { ISpsLiteBackendButtonsArray } from "types/components/elements/sps-lite";
import Primary from "./Primary";

export interface IButtonsArray
  extends Omit<
    ISpsLiteBackendButtonsArray,
    `id` | `description` | `className` | `__component`
  > {
  description?: string | null;
  className?: string | null;
  onClick?: any;
  __component?: ISpsLiteBackendButtonsArray[`__component`];
}

export const variants = {
  simple: Simple,
  dropdown: Dropdown,
  "bottom-line": BottomLine,
  default: Default,
  primary: Primary,
};

export default function ButtonsArrays(props: IButtonsArray) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IButtonsArray>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
