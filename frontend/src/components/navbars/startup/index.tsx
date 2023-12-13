import { FC } from "react";
import { INavbar } from "..";

export const variants = {};

export default function Navbars(props: INavbar) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<INavbar>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
