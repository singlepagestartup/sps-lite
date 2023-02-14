import { FC } from "react";
import { IButtonsArray } from "types";
import SimpleButtonsArray from "./SimpleButtonsArray";

const variants = { simple: SimpleButtonsArray };

export default function SimpleButtons(props: IButtonsArray) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IButtonsArray>;

  if (!Comp) {
    return <SimpleButtonsArray {...props} />;
  }

  return <Comp {...props} />;
}
