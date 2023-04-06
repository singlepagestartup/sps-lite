import { FC } from "react";
import Dropdown from "./Dropdown";

const variants = { dropdown: Dropdown };

export interface IFlyoutMenu {
  title: string;
  buttonsArrays: any[];
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
