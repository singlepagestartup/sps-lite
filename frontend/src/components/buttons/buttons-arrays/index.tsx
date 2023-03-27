import { FC } from "react";
import { IButtonsArray } from "types";
import Dropdown from "./Dropdown";
import Simple from "./Simple";

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
