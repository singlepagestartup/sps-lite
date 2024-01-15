import { FC } from "react";
import { IElement } from "..";

export const variants = {};

export default function Startup(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IElement>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
