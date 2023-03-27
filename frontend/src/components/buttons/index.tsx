import { FC } from "react";
import { IButtons } from "types";
import SimpleButtons from "./simple-buttons";
import ButtonsArrays from "./buttons-arrays";
import FlyoutMenues from "./flyout-menues";

const components = {
  "elements.buttons-array": ButtonsArrays,
  "elements.button": SimpleButtons,
  "elements.flyout-menu": FlyoutMenues,
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
