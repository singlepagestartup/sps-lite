import { FC } from "react";
import { IModal } from "..";

export const variants = {};

export default function Startup(props: IModal) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IModal>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
