import { FC } from "react";
import { IButtonsArray } from "~components/buttons/buttons-arrays";
import Dropdown from "./Dropdown";

const variants = { dropdown: Dropdown };

export interface IFlyoutMenu {
  title: string;
  buttonsArrays: IButtonsArray[];
  _Component: `elements.flyout-menu`;
  variant: `dropdown`;
}

export default function FlyoutMenues(props: IFlyoutMenu) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IFlyoutMenu>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
