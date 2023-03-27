import { FC } from "react";
import { IButton } from "~components/buttons/simple-buttons";
import Dropdown from "./Dropdown";
import Simple from "./Simple";

export interface IButtonsArray {
  title?: string;
  buttons: IButton[];
  description?: string;
  className?: string;
  variant: keyof typeof variants;
}

const variants = { simple: Simple, dropdown: Dropdown };

export default function ButtonsArrays(props: IButtonsArray) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IButtonsArray>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
