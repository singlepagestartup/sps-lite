import { FC } from "react";
import SimpleButtons, { IButton } from "./simple-buttons";
import ButtonsArrays, { IButtonsArray } from "./buttons-arrays";
import FlyoutMenues from "./flyout-menues";

const components = {
  "elements.buttons-array": ButtonsArrays,
  "elements.button": SimpleButtons,
  "elements.flyout-menu": FlyoutMenues,
};
export interface IButtons extends IButton, IButtonsArray {
  _Component: keyof typeof components;
  variant: any;
}

export default function Buttons(props: IButtons) {
  const Comp = components[
    props._Component as keyof typeof components
  ] as FC<IButtons>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
