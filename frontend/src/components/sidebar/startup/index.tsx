import { FC } from "react";
import { ISidebar } from "..";

export const variants = {};

export default function Startup(props: ISidebar) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<ISidebar>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
