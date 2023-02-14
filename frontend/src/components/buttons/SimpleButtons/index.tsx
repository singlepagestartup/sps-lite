import { FC } from "react";
import { IButton } from "types";
import BottomLine from "./BottomLine";
import Default from "./Default";
import Primary from "./Primary";

const variants = {
  "bottom-line": BottomLine,
  primary: Primary,
  default: Default,
};

export default function SimpleButtons(props: IButton) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IButton>;

  if (!Comp) {
    return <Default {...props} />;
  }

  return <Comp {...props} />;
}
