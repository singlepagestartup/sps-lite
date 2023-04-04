import { FC } from "react";
import Dropdown from "./Dropdown";
import Simple from "./Simple";
import { IBackendButtonsArray } from "types/components/elements";

export interface IButtonsArray
  extends Omit<IBackendButtonsArray, `id` | `description` | `className`> {
  description?: string | null;
  className?: string | null;
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
