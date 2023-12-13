import { FC } from "react";
import { IFlyout } from "..";

export const variants = {};

export default function Menus(props: IFlyout) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IFlyout>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
