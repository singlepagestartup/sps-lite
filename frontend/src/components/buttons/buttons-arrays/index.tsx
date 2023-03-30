import { FC } from "react";
import { IBackendButtonsArray } from "types/components";
import Dropdown from "./Dropdown";
import Simple from "./Simple";

export interface IButtonsArray extends IBackendButtonsArray {}

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
