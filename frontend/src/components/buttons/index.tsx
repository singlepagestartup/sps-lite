import { FC } from "react";
import { IButtons } from "types";
import SimpleButtons from "./SimpleButtons";
import ButtonsArray from "./ButtonsArray";
import FlyoutMenu from "./FlyoutMenu";

const components = {
  "elements.buttons-array": ButtonsArray,
  "elements.button": SimpleButtons,
  "elements.flyout-menu": FlyoutMenu,
};

export default function Buttons(props: IButtons) {
  const Comp = components[
    props._Component as keyof typeof components
  ] as FC<IButtons>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
